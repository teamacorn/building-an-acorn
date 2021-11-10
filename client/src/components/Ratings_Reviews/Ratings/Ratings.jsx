import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Ratings = () => {

  const ratings = useSelector(state => state.ratings);
  // ^ why is this loading state twice
  console.log('data', ratings);

  return (
    <div>
      <h1>{`Ratings & Reviews`}</h1>

      <p>RATINGS</p>
      <h1>{ratings.averageRating}</h1>
      <p>{ratings.recommendedPerc}% of reviews recommend this product</p>
      <a><u>5 stars</u></a><br />
      <a><u>4 stars</u></a><br />
      <a><u>3 stars</u></a><br />
      <a><u>2 stars</u></a><br />
      <a><u>1 stars</u></a>

    </div>
  )
}

export default Ratings;