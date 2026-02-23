import React from 'react';
import { newArrivals } from '@/lib/constants';
import ProductCard from '../ProductCard';

const NewArrivals = () => {
  return (
    <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
            <div className="text-left mb-10">
                <h2 className="text-3xl font-bold text-white">New Arrivals</h2>
                <p className="text-neutral-400">Check out our latest products.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {newArrivals.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default NewArrivals;
