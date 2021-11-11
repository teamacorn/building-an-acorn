import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';


const Ratings = () => {

  const ratings = useSelector(state => state.ratings);
  // ^ why is this loading state twice
  // console.log('data', ratings);

  return (
    <div className="ratings-container">
      <h1>{`Ratings & Reviews`}</h1>

      <p id="placeholder">RATINGS</p>
      <h1 id="average-rating">{ratings.averageRating}</h1>
      <p id="recommend-percentage">{ratings.recommendedPerc}% of reviews recommend this product</p>
      <div id="breakdown">
      <a><u>5 stars</u></a><br />
      <a><u>4 stars</u></a><br />
      <a><u>3 stars</u></a><br />
      <a><u>2 stars</u></a><br />
      <a><u>1 stars</u></a>
      </div>
    </div>
  )
}

export default Ratings;