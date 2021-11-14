import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const AverageRating = () => {

  const averageStarRating = useSelector(state => state.ratings.averageStarRating);
  const averageRating = useSelector(state => state.ratings.averageRating);

  if (!averageRating) {
    return null
  } else {
    return (
      <div>
        <div className="average-rating">
          <h1>{averageRating}</h1>
        </div>
        <div className="review-star-ratings" id={averageStarRating}>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      </div>
    )
  }
}

export default AverageRating;