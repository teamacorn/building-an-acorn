import axios from 'axios'
import { FETCH_CURRENT_PRODUCT_REQUEST }from './currentProductTypes'
import { FETCH_CURRENT_PRODUCT_SUCCESS } from './currentProductTypes'
import { FETCH_CURRENT_PRODUCT_FAILURE } from './currentProductTypes'
import { fetchStyleList } from '../overview/styleList/styleActions'
import { fetchQA } from '../qa/qaActions';
import { fetchReviews } from '../reviewsRatings/reviews/reviewsActions';
import { fetchRatings } from '../reviewsRatings/ratings/ratingsActions'

export const fetchCurrentProductRequest = () => {
  return {
    type: FETCH_CURRENT_PRODUCT_REQUEST
  }
}

export const fetchCurrentProductSuccess = product => {
  return {
    type: FETCH_CURRENT_PRODUCT_SUCCESS,
    payload: product
  }
}

export const fetchCurrentProductFailure = error => {
  return {
    type: FETCH_CURRENT_PRODUCT_FAILURE,
    payload: error
  }
}

export const fetchCurrentProduct = (id) => {
  return (dispatch) => {
    dispatch(fetchCurrentProductRequest)
    axios.get(`/products/${id}`)
    .then(product => {
      const currentProduct = product.data
      dispatch(fetchCurrentProductSuccess(currentProduct))
      dispatch(fetchStyleList(id))
      //dispatch reviewList, ReviewMeta, QA List
      dispatch(fetchQA(38222)); // TODO: change it back to id
      dispatch(fetchReviews(id));
      dispatch(fetchRatings(id));
    })
    .catch(error => {
      const errorMsg = error.message
      dispatch(fetchCurrentProductFailure(errorMsg))
    })
  }
}