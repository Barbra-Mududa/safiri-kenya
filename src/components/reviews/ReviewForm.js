import React, { useState } from 'react';
import "./review.css"

const ReviewForm = ({ onSubmit }) => {
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [rating, setRating] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const review = {
        author,
        content,
        rating: parseFloat(rating),
      };
      onSubmit(review);
      setAuthor('');
      setContent('');
      setRating('');
    };
  
    return (
      <form onSubmit={handleSubmit} className='form-container'>
        <h3 id='h'>Write a Review</h3>
        <div className='form-group'>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className='message'>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className='numbers'>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="0"
            max="5"
            step="0.5"
            required
          />
        </div>
        <button id='submit-button' type="submit">Submit</button>
      </form>
    );
  };

export default ReviewForm;