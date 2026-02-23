import React from 'react';
import { bigSales } from '@/lib/constants';
import ProductCard from '../ProductCard';

const BigSales = () => {
  return (
    <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
            <div className="text-left mb-10">
                <h2 className="text-3xl font-bold text-white">Big Sales</h2>
                <p className="text-neutral-400">Check out our biggest sales of the season.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {bigSales.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    </section>
  );
};

export default BigSales;
