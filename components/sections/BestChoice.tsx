import React from 'react';
import { bestChoices } from '@/lib/constants';
import ProductCard from '../ProductCard';

const BestChoice = () => {
  return (
    <section className="py-12 bg-grneutralay-900">
        <div className="container mx-auto px-4">
            <div className="text-left mb-10">
                <h2 className="text-3xl font-bold text-white">Best Choices</h2>
                <p className="text-neutral-400">Our top-rated products.</p>
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
