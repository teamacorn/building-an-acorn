import axios from 'axios';
import { FETCH_STYLE_LIST_REQUEST } from './styleTypes';
import { FETCH_STYLE_LIST_SUCCESS } from './styleTypes';
import { FETCH_STYLE_LIST_FAILURE } from './styleTypes';

export const fetchStyleListRequest = () => {
  return {
    type: FETCH_STYLE_LIST_REQUEST
  }
}

export const fetchStyleListSuccess = styleList => {
  return {
    type: FETCH_STYLE_LIST_SUCCESS,
    payload: styleList
  }
}

export const fetchStyleListFailure = error => {
  return {
    type: FETCH_STYLE_LIST_FAILURE,
    payload: error
  }
}

export const fetchStyleList = (id) => {
  console.log(id)
  return (dispatch) => {
    dispatch(fetchStyleListRequest)
    axios.get(`/products/${id}/styles`)
    .then(listOfStyles => {
      const styleList = listOfStyles.data.results
      dispatch(fetchStyleListSuccess(styleList))
    })
    .catch(error => {
      const errorMsg = error.message
      dispatch(fetchStyleListFailure(errorMsg))
    })
  }
}