import React from 'react';
import Image from 'next/image';
import { IProduct } from '@/types/interfaces';

const ProductCard = ({ product }: { product: IProduct }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-neutral-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 7.09l6.561-.955L10 0l2.95 6.135 6.561.955-4.756 4.455 1.123 6.545z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="bg-neutral-800 text-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-neutral-900 text-xs font-bold px-2 py-1 rounded">
            NEW
          </div>
        )}
        {product.onSale && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                SALE
            </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm text-neutral-400">{product.category}</h3>
        <p className="text-lg font-semibold mt-1">{product.name}</p>
        <div className="flex items-center mt-2">
          <div className="flex">{renderStars()}</div>
          <span className="text-neutral-400 text-sm ml-2">{product.reviews} reviews</span>
        </div>
        <div className="flex items-center justify-between mt-4">
            {product.onSale ? (
                <div className="flex items-center">
                    <p className="text-xl font-bold text-red-500">
                        ${(product.price - (product.price * (product.discount ?? 0)) / 100).toFixed(2)}
                    </p>
                    <p className="text-sm text-neutral-400 line-through ml-2">
                        ${product.price.toFixed(2)}
                    </p>
                </div>
            ) : (
          <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
