'use client';

import React from 'react';
import ColorBends from '../ColorBends';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';
import { Button } from '../ui/button';

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
      <div className="absolute inset-x-0 h-1/4 bottom-0 bg-linear-to-t from-black to-transparent" />
      <div className="absolute inset-0 w-full h-full z-10 flex flex-col justify-center items-start gap-5 p-8">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-white font-bold text-6xl tracking-widest text-shadow-sm">WE HAVE EVERYTHING YOU WANT</h1>
          <p className="text-lg text-neutral-300 font-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ullam, vel blanditiis culpa earum sequi officia, eius ab quia reprehenderit quaerat iste at mollitia aspernatur a unde, officiis voluptas cupiditate!</p>
          <div className="flex items-center gap-2 mt-2">
            <InteractiveHoverButton >Get Started</InteractiveHoverButton>
            <Button variant={"default"} size={'lg'} className='rounded-full hover:text-neutral-300 hover:bg-neutral-950 cursor-pointer'>Login</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
