import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reviews from './Reviews.jsx';
import Rating from '@mui/material/Rating';


const ReviewStars = ({rating}) => {
  return (

    <Rating name="quarter-rating-review" defaultValue={rating} precision={0.25} readOnly />

  )
}

export default ReviewStars;


