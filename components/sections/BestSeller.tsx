import React from 'react';
import { bestSellers } from '@/lib/constants';
import ProductCard from '../ProductCard';

const BestSeller = () => {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">Best Sellers</h2>
                <p className="text-gray-600 mt-2">Our most popular products.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {bestSellers.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default BestSeller;
