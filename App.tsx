import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import InfoCard from './components/InfoCard';
import ConciergeChat from './components/ConciergeChat';
import { HOTEL_DATA } from './constants';
import { MapPin, CheckCircle2, Train, Plane, Landmark } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f1f2f6] pb-12">
      <div className="max-w-[1180px] mx-auto px-4 py-8">
        
        <Header title={HOTEL_DATA.name} />
        
        <Gallery images={HOTEL_DATA.images} />

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* LEFT COLUMN */}
          <div className="flex-[2.3] flex flex-col gap-6">
            
            {/* Highlights */}
            <InfoCard title="Highlights">
              <div className="flex flex-wrap gap-3">
                {HOTEL_DATA.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    <span>{item.split(' ')[0]}</span> {/* Emoji */}
                    <span>{item.substring(item.indexOf(' ') + 1)}</span>
                  </div>
                ))}
              </div>
            </InfoCard>

            {/* Amenities */}
            <InfoCard title="Amenities">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {HOTEL_DATA.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </InfoCard>

          </div>

          {/* RIGHT COLUMN */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Rating */}
            <InfoCard title="Rating">
              <div className="flex items-end gap-3 mb-2">
                <span className="text-4xl font-bold text-blue-700">{HOTEL_DATA.rating}</span>
                <span className="text-lg text-gray-400 mb-1">/ 10</span>
              </div>
              <p className="text-gray-600 font-medium">{HOTEL_DATA.ratingLabel}</p>
            </InfoCard>

            {/* Surroundings */}
            <InfoCard title="Surroundings">
              <div className="space-y-4">
                {HOTEL_DATA.surroundings.map((item, idx) => {
                  let Icon = MapPin;
                  if (item.type === 'train' || item.type === 'metro') Icon = Train;
                  if (item.type === 'airport') Icon = Plane;
                  if (item.type === 'landmark') Icon = Landmark;

                  return (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-700 pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                      <Icon className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="block font-semibold text-gray-900">{item.name}</span>
                        <span className="text-gray-500 capitalize">{item.type} • {item.distance}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </InfoCard>
            
          </div>
        </div>

      </div>

      <ConciergeChat />
    </div>
  );
};

export default App;
