'use client';

import React from 'react';
import { InteractiveHoverButton } from '../ui/interactive-hover-button';
import { Button } from '../ui/button';

const Hero: React.FC = () => {

  return (
    <section className="min-h-screen w-full relative">
      <video width="1080" height="1080" autoPlay loop muted preload="none" className='absolute inset-0 w-full h-full object-cover'>
        <source src={"https://image.uniqlo.com/UQ/CMS/video/jp/2026/HOME/GL_Aseets/PJ/CPJ/Mainlaunch/PC_MEN.mp4"} type="video/mp4" />
      </video>
      <div className="absolute inset-0 w-full h-full z-10 flex flex-col justify-center items-start gap-5 p-8 md:p-12 lg:p-24">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl tracking-widest text-shadow-lg">FROM EVERYDAY ESSENTIALS TO STATEMENT PIECES, YOUR WARDROBE UPGRADE STARTS AT KANJI.</h1>
          <p className="text-lg md:text-xl text-neutral-100 font-normal">Discover the latest trends and express your unique style with our curated collection of clothing and accessories. At Kanji, we believe that fashion is more than just what you wear—it's a way to tell your story.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
            <InteractiveHoverButton >Get Started</InteractiveHoverButton>
            <Button variant={"default"} size={'lg'} className='rounded-full hover:text-neutral-300 hover:bg-neutral-950 cursor-pointer'>Login</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;