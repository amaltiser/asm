import { HotelData } from './types';

export const HOTEL_DATA: HotelData = {
  name: "Crown Hotel St. Petersburg",
  rating: 9.4,
  ratingLabel: "Amazing — The hotel is ok",
  highlights: [
    "🌄 Mountain View",
    "📍 Ideal Location",
    "🚗 Car Rentals",
    "🍳 Delicious Breakfast",
    "🌿 Garden View"
  ],
  amenities: [
    "Luggage Storage",
    "Bar",
    "Airport Drop-off",
    "Business Center",
    "Tour & Ticket Service",
    "Safe at Front Desk",
    "Bellhop"
  ],
  surroundings: [
    { type: 'metro', name: "Mayakovskaya", distance: "410m" },
    { type: 'metro', name: "Ploschad Vosstaniya", distance: "500m" },
    { type: 'airport', name: "Pulkovo", distance: "22.7 km" },
    { type: 'train', name: "Moskovskiy", distance: "1.5 km" },
    { type: 'train', name: "Borovaya", distance: "3.2 km" },
    { type: 'landmark', name: "Russian Museum", distance: "280m" }
  ],
  images: [
    "https://picsum.photos/800/600", // Main
    "https://picsum.photos/400/300?random=1",
    "https://picsum.photos/400/300?random=2",
    "https://picsum.photos/400/300?random=3",
    "https://picsum.photos/400/300?random=4",
  ]
};
