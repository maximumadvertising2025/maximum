
import React from 'react';

interface HeroProps {
  mainImageUrl: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({ mainImageUrl, title, subtitle, ctaText, ctaLink }) => {
  return (
    <header 
      className="relative h-[calc(100vh-5rem)] md:h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('${mainImageUrl}')` }}
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
      <div className="relative z-10 text-center px-4 py-8">
        <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl text-slate-200 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto drop-shadow-md">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <div className="mt-8 md:mt-10">
            <a
              href={ctaLink}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>
      {ctaLink === "#portfolio" && (
         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <a href={ctaLink} aria-label="Scroll to portfolio section">
                <svg className="w-8 h-8 text-slate-300 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </a>
        </div>
      )}
    </header>
  );
};

export default Hero;
