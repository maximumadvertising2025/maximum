
import React from 'react';

interface ImageItem {
  id: string;
  src: string;
  alt: string;
}

interface PortfolioGalleryProps {
  images: ImageItem[];
}

const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ images }) => {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-cyan-400">Work</span>
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            A glimpse into my creative projects and design capabilities.
          </p>
        </div>
        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
            {images.map((image, index) => (
              <div 
                key={image.id} 
                className="group relative overflow-hidden rounded-lg shadow-xl aspect-w-4 aspect-h-3 bg-slate-700"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  loading={index > 1 ? "lazy" : "eager"} // Eager load first few, lazy load others
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-white drop-shadow-sm">{image.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-400">No portfolio items to display yet.</p>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;
