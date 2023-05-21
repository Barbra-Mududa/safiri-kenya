import React, { useState } from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';
import "./review.css"

const Review = () => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (review) => {
    // Make an API call to post the review
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((newReview) => {
        setReviews([...reviews, newReview]);
      })
      .catch((error) => {
        console.error('Error submitting review:', error);
      });
  };

  return (
    <div>
      <ReviewForm onSubmit={handleReviewSubmit} />
      <ReviewList/>
    </div>
  );
};

export default Review;
