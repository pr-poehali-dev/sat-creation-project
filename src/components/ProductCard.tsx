import React from "react";
import StarRating from "./StarRating";

interface ProductCardProps {
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  rating,
  reviewCount,
}) => {
  return (
    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200">
      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium text-gray-900 text-sm mb-1">{name}</h3>
        <div className="flex items-center gap-2">
          <StarRating initialRating={rating} readonly />
          <span className="text-xs text-gray-500">({reviewCount} отзывов)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
