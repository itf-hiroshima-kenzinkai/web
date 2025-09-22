import React from 'react';
import type { GoodsItem } from '../models/goods';
const ProductCard: React.FC<GoodsItem> = ({ imageUrl, price, description, linkUrl }) => {
  return (
    <div >
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block group">
        <div className=" bg-[#E93A3A] overflow-hidden ">
          <div className="w-full aspect-square">
            <img src={imageUrl} alt={description} className="object-cover w-full " />
          </div>
          <div className="p-4 text-center">
           <p className="text-3xl font-bold text-white text-left">
              <span>{price.toLocaleString()}</span> 
              <span className="text-xl"> 円 (税込)</span> 
            </p>
            <p className="text-xl text-white mt-1 text-left">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProductCard;