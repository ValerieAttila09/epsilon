import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FooterLabelImage from "../../assets/images/kanji-lable-footer.v2.svg"

const Footer = () => {
  return (
    <footer className="w-full px-6 sm:px-12 md:px-20 py-10 space-y-10">
      <div className="w-full flex items-center justify-between">
        <div className="space-y-1">
          <span className="text-sm font-thin text-neutral-300">Contact us at</span>
          <p className="text-md font-normal">kanji.in.studio@gmail.com</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href={"/"} className="">
            <span className="text-sm font-medium">How It Works</span>
          </Link>
          <Link href={"/"} className="">
            <span className="text-sm font-medium">Benefits</span>
          </Link>
          <Link href={"/"} className="">
            <span className="text-sm font-medium">Teams</span>
          </Link>
          <Link href={"/"} className="">
            <span className="text-sm font-medium">Features</span>
          </Link>
        </div>
      </div>
      <div className="w-full relative">
        <Image src={FooterLabelImage} alt={"Footer Label Image"} width={1440} height={720} className='w-full h-auto object-cover z-5'/>
      </div>
      <div className="w-full flex items-center justify-between">
        <span className="text-sm text-neutral-300 font-normal">&copy; 2026 Kanji in Studio. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <Link href="/" className='hover:underline hover:text-neutral-400 transition-all'>
            <span className="text-sm text-neutral-300 font-normal">LinkedIn</span>
          </Link>
          <Link href="/" className='hover:underline hover:text-neutral-400 transition-all'>
            <span className="text-sm text-neutral-300 font-normal">Instagram</span>
          </Link>
          <Link href="/" className='hover:underline hover:text-neutral-400 transition-all'>
            <span className="text-sm text-neutral-300 font-normal">YouTube</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
