'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, Search as SearchIcon, Sparkles, Shirt, Crown, Percent, BookOpen } from 'lucide-react';
import Link from 'next/link';

const searchCategories = [
	{ name: 'New In', icon: Sparkles },
	{ name: 'Clothing', icon: Shirt },
	{ name: 'Brands', icon: Crown },
	{ name: 'Sale', icon: Percent },
	{ name: 'Lookbooks', icon: BookOpen },
];

const searchTrending = [
	{ name: 'Summer Dresses', count: 4301 },
	{ name: 'Linen Shirts', count: 2890 },
	{ name: 'Graphic Tees', count: 8112 },
	{ name: 'Vintage Denim', count: 5320 },
	{ name: 'Cross-body Bags', count: 3258 },
	{ name: 'White Sneakers', count: 6893 },
	{ name: 'Swimwear', count: 2045 },
	{ name: 'Oversized Hoodies', count: 7843 },
	{ name: 'Cargo Pants', count: 4981 },
	{ name: 'Sunglasses', count: 1873 },
];

interface SearchWidgetProps {
	onClose: () => void;
}

const SearchWidget: React.FC<SearchWidgetProps> = ({ onClose }) => {
	const widgetRef = useRef<HTMLDivElement>(null);
	const backdropRef = useRef<HTMLDivElement>(null);
	const contentRef = useRef<HTMLDivElement>(null);
	const listItemsRef = useRef<(HTMLLIElement | null)[]>([]);

	useEffect(() => {
		const body = document.body;
		body.style.overflow = 'hidden';

		// Set initial states for animation
		gsap.set(contentRef.current, { y: -30, opacity: 0 });
		gsap.set(backdropRef.current, { opacity: 0 });
		gsap.set(listItemsRef.current, { opacity: 0 });

		const tl = gsap.timeline();
		tl.set(widgetRef.current, { display: 'flex' })
			.to(backdropRef.current, { opacity: 1, duration: 0.4, ease: 'power2.out' })
			.to(contentRef.current, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }, '-=0.3')
			.to(listItemsRef.current, { opacity: 1, stagger: 0.03, duration: 0.3 }, '-=0.2');

		return () => {
			body.style.overflow = 'auto';
		};
	}, []);

	const handleClose = () => {
		const tl = gsap.timeline({
			onComplete: () => {
				if (widgetRef.current) {
					widgetRef.current.style.display = 'none';
				}
				onClose();
			}
		});
		tl.to(contentRef.current, { y: -30, opacity: 0, duration: 0.3, ease: 'power2.in' })
			.to(backdropRef.current, { opacity: 0, duration: 0.3, ease: 'power2.in' }, '-=0.2');
	};

	return (
		<div ref={widgetRef} className="fixed inset-0 z-[100] items-start justify-center pt-24" style={{ display: 'none' }} onClick={handleClose}>
			<div ref={backdropRef} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
			<div
				ref={contentRef}
				className="relative bg-white w-full max-w-4xl rounded-lg shadow-2xl overflow-hidden transform-gpu"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="p-5 border-b border-gray-200">
					<div className="flex items-center">
						<SearchIcon className="text-gray-400" size={20} />
						<input
							type="text"
							placeholder="Search for products, brands, and more"
							className="w-full ml-4 text-lg bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
							autoFocus
						/>
						<button onClick={handleClose} className="text-gray-400 hover:text-gray-600 ml-4">
							<X size={24} />
						</button>
					</div>
				</div>
				<div className="flex h-[50vh]">
					<div className="w-1/3 border-r border-gray-200 p-5">
						<ul className="space-y-1">
							{searchCategories.map((category, index) => (
								<li key={index}>
									<Link href="#" className={`flex items-center p-2.5 rounded-md transition-colors duration-200 text-sm ${index === 0 ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-600 hover:bg-gray-50'}`}>
										<category.icon className="mr-3" size={18} />
										{category.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className="w-2/3 p-5 overflow-y-auto">
						<ul className="space-y-3">
							{searchTrending.map((item, index) => (
								<li key={index} ref={el => { listItemsRef.current[index] = el; }}>
									<Link href="#" className="flex justify-between items-center text-gray-600 hover:text-gray-900 group text-sm">
										<span>{item.name}</span>
										<span className="text-xs text-gray-400 group-hover:text-gray-600">{item.count}</span>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchWidget;