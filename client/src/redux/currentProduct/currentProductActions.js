import axios from 'axios'
import { FETCH_CURRENT_PRODUCT_REQUEST }from './currentProductTypes'
import { FETCH_CURRENT_PRODUCT_SUCCESS } from './currentProductTypes'
import { FETCH_CURRENT_PRODUCT_FAILURE } from './currentProductTypes'
import { fetchStyleList } from '../overview/styleList/styleActions'

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
    })
    .catch(error => {
      const errorMsg = error.message
      dispatch(fetchCurrentProductFailure(errorMsg))
    })
  }
}