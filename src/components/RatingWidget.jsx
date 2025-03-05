import React, { useState } from "react";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating < 1 || rating > 5) {
      alert("Please select a rating between 1 and 5.");
      return;
    }

    onRatingSubmit(productId, rating);
    setRating(0); // Reset rating after submission
  };

  return (
    <div className="rating-widget">
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRatingClick(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            style={{
              cursor: "pointer",
              color: star <= (hoveredRating || rating) ? "gold" : "gray",
              fontSize: "24px",
            }}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
};

export default RatingWidget;
