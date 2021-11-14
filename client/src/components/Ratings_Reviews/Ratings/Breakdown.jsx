import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reviews from '../Reviews/Reviews.jsx';

const Breakdown = () => {

  const meta = useSelector(state => state.ratings.metadata);

  let ratings = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  if (meta.ratings) {
    ratings = Object.assign({}, ratings, meta.ratings);
  }
  // onClick filter = only show reviews with clicked (toggle)
  return (
    <div className="click-star">
      <div className="star-ratings-breakdown">
        <span>
          <a id="star-five-stars">5 stars</a><br /><br />
          <a id="star-four-stars">4 stars</a><br /><br />
          <a id="star-three-stars">3 stars</a><br /><br />
          <a id="star-two-stars">2 stars</a><br /><br />
          <a id="star-one-stars">1 stars</a>
        </span>
      </div>
    </div>
  )
}



export default Breakdown;

