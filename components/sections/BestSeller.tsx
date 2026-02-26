import React from 'react';
import { bestSellers } from '@/lib/constants';
import ProductCard from '../ProductCard';

const BestSeller = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Best Sellers</h2>
                <p className="text-gray-600 mt-2 text-md md:text-lg">Our most popular products.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {bestSellers.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <div className="text-center mt-10 md:mt-12">
                <a href="/products" className="inline-block bg-gray-800 text-white py-2 px-6 md:py-3 md:px-8 rounded-full font-semibold hover:bg-gray-700 transition-colors text-sm md:text-base">
                    See more
                </a>
            </div>
        </div>
    </section>
  );
};

export default BestSeller;