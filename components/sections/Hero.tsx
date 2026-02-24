'use client';

import React from 'react';
import ColorBends from '../ColorBends';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';
import { Button } from '../ui/button';

const Hero: React.FC = () => {

  return (
    <section className="min-h-screen w-full relative">
      <video width="1080" height="1080" autoPlay loop muted preload="none" className='absolute inset-0 w-full h-full object-cover'>
        <source src={"https://image.uniqlo.com/UQ/CMS/video/jp/2026/HOME/GL_Aseets/PJ/CPJ/Mainlaunch/PC_MEN.mp4"} type="video/mp4" />
      </video>
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
