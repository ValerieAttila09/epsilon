import React from 'react';
import { bestChoices } from '@/lib/constants';
import ProductCard from '../ProductCard';

const BestChoice = () => {
  return (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">Best Choices</h2>
                <p className="text-gray-600 mt-2">Our top-rated products.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {bestChoices.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default BestChoice;
