import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markReviewHelpful, reportReview, addReviewToReviews } from '../../../redux';
import Reviews from './Reviews.jsx';
import Button from '@mui/material/Button';

// ----------------------------------------------------------------

export const Helpful = ({ helpfulness, id }) => {
  const dispatch = useDispatch();
  const [yesCount, setYesCount] = useState(helpfulness);
  const [noCount, setNoCount] = useState(0);

  const [disable, setDisable] = useState(false);

  const increment = () => {
    if (!disable) {
      setYesCount(prevCount => prevCount + 1);
      setDisable(true);
      dispatch(markReviewHelpful(id));
      //
    }
  }
  const decrement = () => {
    if (!disable) {
      setNoCount(prevCount => prevCount + 1);
      setDisable(true);
      dispatch(markReviewHelpful(id));
      //
    }
  }
  return (
    <div className="review-helpful">
      <h5>
        Helpful?&nbsp;&nbsp;
        <a onClick={(increment)}>Yes</a>
        ({yesCount})&nbsp;&nbsp;|&nbsp;&nbsp;
        <a onClick={(decrement)}>No</a>
        ({noCount})
      </h5>
    </div>
  )
}

// ----------------------------------------------------------------

export const Report = ({ id }) => {
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

export const ShowMoreReviews = ({ addVisibleReviews }) => {

  const reviewsLength = useSelector(state => state.reviews.reviewsList.length);

  let counter = 2;

  const isClicked = () => {
    addVisibleReviews(prevCount => prevCount + 2)
    counter += 2;
  }


  // if (reviewsLength < 2 || counter >= reviewsLength-1 ) {
  //   return (<div></div>)
  // } else {
    return (
      <div>
        <Button onClick={(isClicked)}>Show More Reviews +</Button>
      </div>
    )

}

// ----------------------------------------------------------------

export const AddReview = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <Button>Add Review</Button>
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

