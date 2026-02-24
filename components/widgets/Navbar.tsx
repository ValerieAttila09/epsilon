'use client';

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Search, ShoppingBag, User } from 'lucide-react';
import { IMenuData, MenuKey } from '@/types/interfaces';
import { menuData } from '@/lib/constants';
import Link from 'next/link';
import SearchWidget from './SearchWidget';

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<MenuKey | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuWrapperRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menu: MenuKey) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const menuContent = menuContentRef.current;
    const wrapper = menuWrapperRef.current;
    if (activeMenu && menuContent && wrapper) {
      const menuColumns = Array.from(menuContent.children);
      const contentHeight = menuContent.parentElement!.offsetHeight;

      animationRef.current = gsap.timeline();
      animationRef.current
        .to(wrapper, {
          height: contentHeight,
          autoAlpha: 1,
          duration: 0.4,
          ease: 'power2.out',
        })
        .fromTo(
          menuColumns,
          { autoAlpha: 0, y: 20 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
            stagger: 0.05,
          },
          '-=0.2'
        );
    } else if (wrapper) {
      animationRef.current = gsap.timeline();
      animationRef.current.to(wrapper, {
        height: 0,
        autoAlpha: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, [activeMenu]);

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const isOpaque = isScrolled || activeMenu !== null;

  const navbarClasses = isOpaque
    ? 'bg-white text-black shadow-md'
    : 'bg-transparent text-white';

  return (
    <>
        <header
        onMouseLeave={handleMouseLeave}
        className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-300 ${navbarClasses}`}
        >
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
            <div className="flex items-center gap-20">
            <div className="font-bold text-2xl tracking-widest">
                KANJI
            </div>
            <nav className="hidden md:flex items-center space-x-5">
                {(Object.keys(menuData) as MenuKey[]).map((menu) => (
                <div key={menu} onMouseEnter={() => handleMouseEnter(menu)} className="py-3 px-2 cursor-pointer">
                    <span className={`transition-colors duration-300 ${isOpaque ? 'hover:text-gray-500' : 'hover:text-gray-300'}`}>
                    {menu}
                    </span>
                </div>
                ))}
            </nav>
            </div>
            <div className="flex items-center space-x-6">
                <button onClick={handleSearchToggle} className="cursor-pointer">
                    <Search />
                </button>
                <ShoppingBag className="cursor-pointer" />
                <User className="cursor-pointer" />
            </div>
        </div>

        <div
            ref={menuWrapperRef}
            onMouseEnter={() => activeMenu && handleMouseEnter(activeMenu)}
            className="absolute top-full left-0 w-full bg-white text-black border-b border-gray-200 shadow-lg overflow-hidden h-0 invisible"
        >
            <div className="w-full ms-auto py-4">
            <div ref={menuContentRef} className="container mx-auto px-6 grid grid-cols-5 gap-8 pb-6">
                {activeMenu &&
                menuData[activeMenu].map((section, index) => (
                    <div key={index} className='space-y-4'>
                    <h3 className="font-normal text-md mb-4 text-gray-500">{section.title}</h3>
                    <ul>
                        {section.links.map((link, linkIndex) => (
                        <li key={linkIndex} className="mb-2">
                            <Link href="#" className="text-sm font-thin text-gray-700 hover:text-black transition-colors duration-300">
                            {link}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </div>
                ))}
            </div>
            </div>
        </div>
        </header>
        {isSearchOpen && <SearchWidget onClose={handleSearchToggle} />}
    </>
  );
};

export default Navbar;
