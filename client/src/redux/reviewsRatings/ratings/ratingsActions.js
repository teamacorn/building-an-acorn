import axios from 'axios';
import { FETCH_RATINGS_REQUEST } from './ratingsTypes';
import { FETCH_RATINGS_SUCCESS } from './ratingsTypes';
import { FETCH_RATINGS_FAILURE } from './ratingsTypes';

const fetchRatingsRequest = () => {
  return {
    type: FETCH_RATINGS_REQUEST
  }
}

const fetchRatingsSuccess = (ratings) => {
  return {
    type: FETCH_RATINGS_SUCCESS,
    payload: ratings
  }
}

const fetchRatingsFailure = (error) => {
  return {
    type: FETCH_RATINGS_FAILURE,
    payload: error
  }
}

export const fetchRatings = (id) => {
  return (dispatch) => {
    dispatch(fetchRatingsRequest)
    axios.get(`/reviews/meta/${id}`)
    .then((ratings) => {
      dispatch(fetchRatingsSuccess(ratings.data));
    })
    .catch((error) => {
      dispatch(fetchRatingsFailure(error.message))
    });
  }
};
