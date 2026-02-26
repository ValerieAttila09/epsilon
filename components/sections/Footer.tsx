import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FooterLabelImage from "../../assets/images/kanji-lable-footer.v2.svg"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-6 sm:px-12 md:px-20 py-10 space-y-8 md:space-y-10">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        <div className="text-center md:text-left space-y-1">
          <span className="text-sm font-thin text-neutral-300">Contact us at</span>
          <p className="text-md font-normal">support@kanjimarket.com</p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <Link href={"https://kanjimarket.com/shop"} className="text-sm font-medium hover:text-neutral-400 transition-colors">Shop</Link>
          <Link href={"https://kanjimarket.com/new-arrivals"} className="text-sm font-medium hover:text-neutral-400 transition-colors">New Arrivals</Link>
          <Link href={"https://kanjimarket.com/about"} className="text-sm font-medium hover:text-neutral-400 transition-colors">About Us</Link>
          <Link href={"https://kanjimarket.com/contact"} className="text-sm font-medium hover:text-neutral-400 transition-colors">Contact</Link>
        </nav>
      </div>
      <div className="w-full relative">
        <Image src={FooterLabelImage} alt={"Footer Label Image"} width={1440} height={720} className='w-full h-auto object-cover z-5'/>
      </div>
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-4">
        <span className="text-sm text-neutral-300 font-normal text-center md:text-left">&copy; {currentYear} Kanji Market. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <Link href="#" className='hover:underline hover:text-neutral-400 transition-all'><span className="text-sm text-neutral-300 font-normal">Facebook</span></Link>
          <Link href="#" className='hover:underline hover:text-neutral-400 transition-all'><span className="text-sm text-neutral-300 font-normal">Instagram</span></Link>
          <Link href="#" className='hover:underline hover:text-neutral-400 transition-all'><span className="text-sm text-neutral-300 font-normal">X</span></Link>
          <Link href="#" className='hover:underline hover:text-neutral-400 transition-all'><span className="text-sm text-neutral-300 font-normal">Pinterest</span></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;