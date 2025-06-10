import React, { useState } from "react";
import Icon from "@/components/ui/icon";

interface StarRatingProps {
  initialRating?: number;
  onChange?: (rating: number) => void;
  readonly?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  initialRating = 0,
  onChange,
  readonly = false,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  const handleStarClick = (starIndex: number) => {
    if (readonly) return;
    const newRating = starIndex + 1;
    setRating(newRating);
    onChange?.(newRating);
  };

  const handleStarHover = (starIndex: number) => {
    if (readonly) return;
    setHoverRating(starIndex + 1);
  };

  const handleMouseLeave = () => {
    if (readonly) return;
    setHoverRating(0);
  };

  return (
    <div className="flex gap-1" onMouseLeave={handleMouseLeave}>
      {[...Array(5)].map((_, index) => {
        const isActive = (hoverRating || rating) > index;
        return (
          <button
            key={index}
            type="button"
            className={`transition-all duration-200 ${
              readonly ? "cursor-default" : "cursor-pointer hover:scale-110"
            }`}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
            disabled={readonly}
          >
            <Icon
              name={isActive ? "Star" : "Star"}
              size={24}
              className={`${
                isActive ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              } transition-colors duration-200`}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
