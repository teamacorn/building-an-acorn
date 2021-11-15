import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rating from '@mui/material/Rating';


const AverageRating = () => {


  const avg = useSelector(state => state.ratings);

  if (!avg.averageRating) {
    return null
  } else {
    return (
      <div>
        <div className="average-rating">
          <h1>{avg.averageRating}</h1>
        </div>
        <div className="review-star-ratings" id={avg.averageStarRating}>
        <Rating name="quarter-rating-review" defaultValue={avg.averageStarRating} precision={0.25} readOnly />
        </div>
        <div>
          {avg.totalRatings} people have rated this product
        </div>
      </div>
    )
  }
}

export default AverageRating;