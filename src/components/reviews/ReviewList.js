import React, { useState, useEffect } from 'react';
import './review.css';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/reviews')
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  const handleDeleteReview = (reviewId) => {
    fetch(`/reviews/${reviewId}`, {
      method: 'DELETE'
    })
      .then((response) => response.json())
      .then((data) => {
        // Filter out the deleted review from the reviews state
        const updatedReviews = reviews.filter(review => review.id !== reviewId);
        setReviews(updatedReviews);
      })
      .catch((error) => {
        console.error('Error deleting review:', error);
      });
  };

  return (
    <div className='review-list'>
      <h3>Reviews</h3>
      <div className='list'>
        {reviews.map((review, index) => (
          <div className="review-item" key={index}>
            <h4 id='h'>{review.author}</h4>
            <p id='con'>{review.content}</p>
            <p id='con'>Rating: {review.rating}/5</p>
            <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewList;
