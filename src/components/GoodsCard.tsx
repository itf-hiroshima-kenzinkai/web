import React from 'react';
import type { GoodsItem } from '../models/goods';
const ProductCard: React.FC<GoodsItem> = ({ imageUrl, price, description, linkUrl }) => {
  return (
    <div >
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block group">
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="w-full aspect-square">
            <img src={imageUrl} alt={description} className="object-cover w-full " />
          </div>
          <div className="p-4 text-center">
            <p className="text-lg font-bold text-gray-800">{price.toLocaleString()} 円 (税込)</p>
            <p className="text-sm text-gray-600 mt-1">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;