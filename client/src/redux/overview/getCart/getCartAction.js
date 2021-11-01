import axios from 'axios';
import { GET_CART_REQUEST } from './getCartTypes';
import { GET_CART_SUCCESS } from './getCartTypes';
import { GET_CART_FAILURE } from './getCartTypes';

export const getCartRequest = () => {
  return {
    type: GET_CART_REQUEST
  }
}

export const getCartSuccess = items => {
  return {
    type: GET_CART_SUCCESS,
    payload: items
  }
}

export const getCartFailure = error => {
  return {
    type: GET_CART_FAILURE,
    payload: error
  }
}

export const getCart = () => {
  return (dispatch) => {
    dispatch(getCartRequest)
    axios.get(`/cart`)
    .then(items => {
      console.log(items.data)
      dispatch(getCartSuccess(items.data))
    })
    .catch(error => {
      const errorMsg = error.message
      dispatch(getCartFailure(errorMsg))
    })
  }
}