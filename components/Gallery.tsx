import React from 'react';

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [mainImage, ...subImages] = images;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-2 h-auto md:h-[400px] mb-8 rounded-xl overflow-hidden shadow-sm">
      <div className="col-span-1 md:col-span-2 row-span-2 relative group cursor-pointer">
        <img
          src={mainImage}
          alt="Main View"
          className="w-full h-[250px] md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
      </div>
      {subImages.slice(0, 4).map((img, idx) => (
        <div key={idx} className="relative group cursor-pointer overflow-hidden">
          <img
            src={img}
            alt={`Gallery ${idx}`}
            className="w-full h-[150px] md:h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay for last image if there are more */}
          {idx === 3 && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity">
              View All Photos
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
