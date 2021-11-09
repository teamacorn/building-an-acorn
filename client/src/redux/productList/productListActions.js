import axios from 'axios';
import { FETCH_PRODUCT_LIST_REQUEST }from './productListTypes.js'
import { FETCH_PRODUCT_LIST_SUCCESS } from './productListTypes.js'
import { FETCH_PRODUCT_LIST_FAILURE } from './productListTypes.js'
import { fetchCurrentProduct } from '../currentProduct/currentProductActions'

export const fetchProductListRequest = () => {
  return {
    type: FETCH_PRODUCT_LIST_REQUEST
  }
}

export const fetchProductListSuccess = products => {
  return {
    type: FETCH_PRODUCT_LIST_SUCCESS,
    payload: products
  }
}

export const fetchProductListFailure = error => {
  return {
    type: FETCH_PRODUCT_LIST_FAILURE,
    payload: error
  }
}

export const fetchProductList = () => {
  return (dispatch) => {
    dispatch(fetchProductListRequest)
    axios.get(`/products`)
    .then(listOfProducts => {
      const products = listOfProducts.data
      let product_id = listOfProducts.data[0].id
      dispatch(fetchProductListSuccess(products));
      dispatch(fetchCurrentProduct(product_id));
    })
    .catch(error => {
      const errorMsg = error.message
      dispatch(fetchProductListFailure(errorMsg))
    })
  }
}