import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Rating = ({ maxRating, color, starSpacing }) => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const stars = Array(maxRating)
    .fill(null)
    .map((_, index) => {
      const starValue = index + 1;
      const isFilled = starValue <= rating;
      const starIcon = isFilled ? (
        <FaStar color={color} />
      ) : (
        <FaRegStar color={color} />
      );

      return (
        <span
          key={index}
          style={{ marginRight: starSpacing, cursor: "pointer" }}
          onClick={() => handleRatingClick(starValue)}
        >
          {starIcon}
        </span>
      );
    });

  return <div className="flex">{stars}</div>;
};

export default Rating;
