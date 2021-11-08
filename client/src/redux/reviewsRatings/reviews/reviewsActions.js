import axios from 'axios';
import { FETCH_REVIEWS_SUCCESS } from './ReviewsTypes';
import { FETCH_REVIEWS_FAILURE } from './ReviewsTypes';
import { FETCH_REVIEWS_REQUEST } from './ReviewsTypes';

const fetchReviewsRequest = () => {
  return {
    type: FETCH_REVIEWS_REQUEST
  }
}

const fetchReviewsSuccess = (reviews) => {
  return {
    type: FETCH_REVIEWS_SUCCESS,
    payload: reviews
  }
}

const fetchReviewsFailure = (error) => {
  return {
    type: FETCH_REVIEWS_FAILURE,
    payload: error
  }
}

export const fetchReviews = (id) => {
  return (dispatch) => {
    dispatch(fetchReviewsRequest)
    axios.get(`/reviews/${id}`)
    .then((reviews) => {
      dispatch(fetchReviewsSuccess(reviews.data.results));
    })
    .catch((error) => {
      dispatch(fetchRatingsFailure(error.message))
    });
  }
};

export const addReviewToReviews = (review) => {
  return (dispatch) => {
    axios.post(`/reviews`, {review})
      .then(response => {
        dispatch(fetchReviews())
      })
      .catch(error => {
        console.error(error.message)
      })
  }
}

export const markReviewHelpful = (reviewId) => {
  return (dispatch) => {
    axios.put(`/reviews/${review_id}/helpful`)
      .then(res => {
        console.log("Marked review as helpful");
      })
      .catch(error => {
        console.error(error.message);
      })
  }
}

export const reportReview = (reviewId) => {
  return (dispatch) => {
    axios.put(`/reviews/${review_id}/report`)
      .then(res => {
        console.log("Review has been reported");
      })
      .catch(error => {
        console.error(error.message);
      })
  }
}

