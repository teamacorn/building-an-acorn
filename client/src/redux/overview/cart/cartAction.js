import axios from 'axios';
import { FETCH_CART_REQUEST } from './cartTypes';
import { FETCH_CART_SUCCESS } from './cartTypes';
import { FETCH_CART_FAILURE } from './cartTypes';

export const fetchCartRequest = () => {
  return {
    type: FETCH_CART_REQUEST
  }
}

export const fetchCartSuccess = items => {
  return {
    type: FETCH_CART_SUCCESS,
    payload: items
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
    dispatch(fetchCartRequest()); // was not invoked
    axios.get(`/cart`)
    .then(cart => {
      const inCart = cart.data
      dispatch(fetchCartSuccess(inCart))
    })
    .catch(error => {
      const errorMsg = error.message
      dispatch(fetchCartFailure(errorMsg))
    })
  }
}

export const addToCart = (skuId) => {
  return (dispatch) => {
    axios.post(`/cart`, {sku_id: skuId})
    .then(items => {
      dispatch(fetchCart())
    })
    .catch(error => {
      // TODO: how to display it didn't add to cart
      console.error(error.message)
    })
  }
}