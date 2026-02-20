'use client';

import React from 'react';
import ColorBends from '../ColorBends';

const Hero: React.FC = () => {

  return (
    <section className="min-h-screen w-full relative">
      <ColorBends
        colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
        rotation={0}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={0.5}
        noise={0.1}
        transparent
        autoRotate={0}
        className=''
      />
      <div className="absolute inset-x-0 h-1/4 bottom-0 bg-linear-to-t from-black to-transparent"/>
    </section>
  );
};

export default Hero;
