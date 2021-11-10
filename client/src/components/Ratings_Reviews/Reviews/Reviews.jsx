import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markReviewHelpful } from '../../../redux';
import { reportReview } from '../../../redux';
import ReviewsList from './ReviewsList.jsx';
// ^ try combining the two imports above


const Reviews = () => {

  const reviews = useSelector(state => state.reviews);

  return (
    <div className="reviews-container">
      <p>REVIEWS</p>
      <h3 id="reviews-overview">{reviews.reviewsList.length} reviews, sorted by
      <select name="sort" id="sort">
        <option value="relevant">Relevant</option>
        <option value="newest">Newest</option>
        <option value="helpful">Helpful</option>
      </select>
      </h3>
      <div className="reviews-list">
        <ReviewsList />
      </div>
      <button type="button">SHOW MORE REVIEWS</button>
      <button type="button">ADD A REVIEW +</button>
    </div>
  )
}


export default Reviews;

