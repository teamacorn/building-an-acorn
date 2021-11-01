import axios from 'axios';
import { FETCH_CART_REQUEST } from './cartType';
import { FETCH_CART_SUCCESS } from './cartType';
import { FETCH_CART_FAILURE } from './cartType';

export const fetchCartRequest = () => {
  return {
    type: FETCH_CART_REQUEST
  }
}

export const fetchCartSuccess = cart => {
  return {
    type: FETCH_CART_SUCCESS,
    payload: cart
  }
}

export const fetchCartFailure = error => {
  return {
    type: FETCH_CART_FAILURE,
    payload: error
  }
}

export const fetchCart = () => {
  return (dispatch) => {
    dispatch(fetchCartRequest)
    axios.get(`/cart`)
    .then(cart => {
      const inCart = cart.data
      console.log(inCart)
      dispatch(fetchCartSuccess(inCart))
    })
    .catch(error => {
      const errorMsg = error.message
      dispatch(fetchCartFailure(errorMsg))
    })
  }
}