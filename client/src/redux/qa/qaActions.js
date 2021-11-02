import axios from 'axios';
import { FETCH_QA_REQUEST } from './qaTypes';
import { FETCH_QA_SUCCESS } from './qaTypes';
import { FETCH_QA_FAILURE } from './qaTypes';

export const fetchQARequest = () => {
  return {
    type: FETCH_QA_REQUEST
  }
}

export const fetchQASuccess = items => {
  return {
    type: FETCH_QA_SUCCESS,
    payload: items
  }
}

export const fetchQAFailure = error => {
  return {
    type: FETCH_QA_FAILURE,
    payload: error
  }
}

// fetch questions
export const fetchQA = () => {
  return (dispatch) => {
    dispatch(fetchQARequest());
    axios.get('')
  }
}
// add to question list 

// should dispatch fetch questions


// helper -- sort questions by helpfulness
// helper -- sort answers by "seller" then "helpfulness"