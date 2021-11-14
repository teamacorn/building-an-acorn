import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markReviewHelpful, reportReview, addReviewToReviews } from '../../../redux';
import Reviews from './Reviews.jsx';
import Button from '@mui/material/Button';

// ----------------------------------------------------------------

export const Helpful = ({helpfulness, id}) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(helpfulness);
  const [disable, setDisable] = useState(false);;
  const increment = () => {
    if (!disable) {
    setCount(prevCount => prevCount + 1);
    setDisable(true);
    dispatch(markReviewHelpful(id));
    // ^^ Here is the problem
    }
  }
  return (
    <div className="review-helpful">
      <h5>
        Helpful?&nbsp;
        <a onClick={(increment)}>Yes</a>
        ({count})&nbsp;&nbsp;|&nbsp;&nbsp;
      </h5>
    </div>
  )
}

// ----------------------------------------------------------------

export const Report = ({id}) => {
  const dispatch = useDispatch();
  const [disable, setDisable] = useState(false);;
  const isClicked = () => {
    if (!disable) {
    setDisable(true);
    dispatch(reportReview(id));
    }
  }
  return (
    <div>
  <a onClick={(isClicked)}><h5>Report</h5></a>
  </div>
  )
}

// ----------------------------------------------------------------

export const ShowMoreReviews = ({addVisibleReviews}) => {

  // const [visibleReviews, addVisibleReviews] = useState(2);

  // set on click
  const isClicked = () => {
    addVisibleReviews(prevCount => prevCount + 2)
  }

  return (
    <div>
      <button onClick={(isClicked)}>Show More Reviews +</button>
    </div>
  )
}

// ----------------------------------------------------------------

export const AddReview = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <button>Add Review</button>
    </div>
  )
}


// show more reviews
  // const visibleReviews = 2
    // on button click // if show more reivews = true
    // visible reviews += 2
  // while (visibleReviews > 0) {
  //   reviews.map(reviewList, index = {
  //   {<div> reviews[index] <div/>}
  //   })
  // }
  // *Dont forget to incorporate sort

  // add review
    // modal

  // report review

 // mark review as helpful

 // mark review as review

