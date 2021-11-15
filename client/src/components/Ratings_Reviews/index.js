import React from 'react';
import RatingsComp from './Ratings/RatingsComp.jsx'
import ReviewsComp from './Reviews/ReviewsComp.jsx';
import Grid from '@mui/material/Grid';

const RatingsReviews = () => {
  return (
    <div id="reviews-ratings-components">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <RatingsComp />
        </Grid>
        <Grid item xs={8}>
          <ReviewsComp />
        </Grid>
      </Grid>
    </div>
  )
}

export default RatingsReviews;