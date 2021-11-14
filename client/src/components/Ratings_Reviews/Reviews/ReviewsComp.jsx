import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReviewsHeader from './ReviewsHeader.jsx';
import Reviews from './Reviews.jsx';
import { ShowMoreReviews, AddReview } from './ReviewButtons.jsx';
import Grid from '@mui/material/Grid';

const ReviewsComp = () => {

  const [visibleReviews, addVisibleReviews] = useState(2);
  const [currentSort, setCurrentSort] = useState('relevance');

  return (
  <div id="reviews">
  <ReviewsHeader sort={setCurrentSort}/>
  <Reviews numOfReview={visibleReviews} currentSort={currentSort}/>
  <ShowMoreReviews addVisibleReviews={addVisibleReviews}/>
  <AddReview />
  </div>
  )

}

export default ReviewsComp;
