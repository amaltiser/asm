import { GoogleGenAI } from "@google/genai";
import { HOTEL_DATA } from "../constants";

let ai: GoogleGenAI | null = null;

const getAIInstance = () => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }
  return ai;
};

const SYSTEM_INSTRUCTION = `
You are the Virtual Concierge for ${HOTEL_DATA.name}.
Your goal is to answer potential guest questions based strictly on the following hotel details.
Be polite, professional, and concise.

Details:
- Name: ${HOTEL_DATA.name}
- Rating: ${HOTEL_DATA.rating}/10 (${HOTEL_DATA.ratingLabel})
- Highlights: ${HOTEL_DATA.highlights.join(', ')}
- Amenities: ${HOTEL_DATA.amenities.join(', ')}
- Surroundings: ${HOTEL_DATA.surroundings.map(s => `${s.type}: ${s.name} (${s.distance})`).join(', ')}

If a user asks about something not listed here (like pool, gym, specific room prices if not mentioned), say you don't have that information but can check with the front desk (simulate this).
Keep answers short and helpful.
`;

export const sendConciergeMessage = async (history: {role: 'user' | 'model', text: string}[], newMessage: string): Promise<string> => {
  try {
    const client = getAIInstance();
    const model = 'gemini-2.5-flash';

    // We use generateContent for a single turn here for simplicity in this stateless service,
    // but building a chat history context manually to ensure stateless robustness or using Chat API.
    // For this UI, let's use the Chat API pattern.

    const chat = client.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({
      message: newMessage
    });

    return result.text || "I apologize, I'm having trouble connecting to the concierge service right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I am currently unavailable. Please try again later.";
  }
};
