import React, { useState } from "react";
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  const handleReviewSubmit = () => {
    if (newReview) {
      setReviews([...reviews, newReview]);
      setNewReview("");
    }
  };

  return (
    <section id="reviews" className="reviews section">
      <h2>Reviews </h2>
      <ul className="review-list">
        {reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
      <div className="add-review">
        <textarea
          rows="4"
          placeholder="Add a Review..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        ></textarea>
        <button onClick={handleReviewSubmit}>Submit</button>
      </div>
    </section>
  );
};

export default Reviews;