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
          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
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
    <div className="bg-white text-gray-800 rounded-xl shadow-sm overflow-hidden group transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {product.isNew && (
          <div className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            NEW
          </div>
        )}
        {product.onSale && product.discount && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {product.discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</h3>
        <p className="text-base font-semibold mt-1 truncate">{product.name}</p>
        <div className="flex items-center mt-2">
          <div className="flex">{renderStars()}</div>
          <span className="text-gray-500 text-xs ml-2">({product.reviews})</span>
        </div>
        <div className="flex items-baseline justify-between mt-4">
          {product.onSale ? (
            <div className="flex items-baseline">
              <p className="text-lg font-bold text-red-500">
                ${(product.price - (product.price * (product.discount ?? 0)) / 100).toFixed(2)}
              </p>
              <p className="text-sm text-gray-400 line-through ml-2">
                ${product.price.toFixed(2)}
              </p>
            </div>
          ) : (
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
