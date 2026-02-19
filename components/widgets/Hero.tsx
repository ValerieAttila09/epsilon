import { heroData } from '@/lib/constants';
import React from 'react';

const Hero: React.FC = () => {
  const { title, subtitle, button, image } = heroData;

  return (
    <section className="relative h-[calc(100vh-4rem)] text-white flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${image.src})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase">
          {title}
        </h1>
        <p className="text-lg md:text-xl mb-8 font-light">
          {subtitle}
        </p>
        <a
          href={button.href}
          className="bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300 text-lg"
        >
          {button.label}
        </a>
      </div>
    </section>
  );
};

export default Hero;
