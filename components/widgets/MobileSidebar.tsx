'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { IMenuData, MenuKey } from '@/types/interfaces';

interface MobileSidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  menuData: IMenuData;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ isOpen, setIsOpen, menuData }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const tl = gsap.timeline();
      tl.set(sidebar, { display: 'block' })
        .to(backdropRef.current, { opacity: 1, duration: 0.3 })
        .to(contentRef.current, { x: 0, duration: 0.4, ease: 'power3.out' }, '-=0.2');
    } else {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set(sidebar, { display: 'none' });
          document.body.style.overflow = 'auto';
        }
      });
      tl.to(contentRef.current, { x: '100%', duration: 0.4, ease: 'power3.in' })
        .to(backdropRef.current, { opacity: 0, duration: 0.3 }, '-=0.3');
    }
  }, [isOpen]);
    
  return (
    <div ref={sidebarRef} className="fixed inset-0 z-[100] lg:hidden" style={{ display: 'none' }}>
      <div ref={backdropRef} className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <div ref={contentRef} className="absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-lg flex flex-col" style={{ transform: 'translateX(100%)' }}>
        <div className="flex justify-between items-center p-2.5 border-b">
          <h2 className="font-bold text-xl tracking-widest text-black">KANJI</h2>
          <button onClick={() => setIsOpen(false)} className="p-2 text-black">
            <X size={24} />
          </button>
        </div>
        <nav className="flex-1 px-6 py-8 overflow-y-auto">
          <ul className='space-y-8'>
            {(Object.keys(menuData) as MenuKey[]).map((menuKey) => (
              <li key={menuKey}>
                <h3 className="font-bold text-base mb-4 text-gray-800 uppercase tracking-wider">{menuKey}</h3>
                <div className='space-y-4'>
                  {menuData[menuKey].map((section) => (
                    <div key={section.title}>
                      <h4 className="font-semibold text-sm text-gray-600 mb-3">{section.title}</h4>
                      <ul className="space-y-3 pl-2">
                        {section.links.map((link, index) => (
                          <li key={index}>
                            <Link href="#" onClick={() => setIsOpen(false)} className="text-gray-800 hover:text-black transition-colors duration-200 text-sm font-medium">
                              {link}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-6 border-t">
            <button className='w-full bg-black text-white py-3 rounded-full text-center font-bold'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
