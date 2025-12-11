export interface HotelData {
  name: string;
  rating: number;
  ratingLabel: string;
  highlights: string[];
  amenities: string[];
  surroundings: {
    type: 'metro' | 'airport' | 'train' | 'landmark';
    name: string;
    distance: string;
  }[];
  images: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
