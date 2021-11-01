import axios from 'axios';
import { getCart } from '../getCart/getCartAction'

export const addToCart = (skuId) => {
  console.log('invoked')
  return (dispatch) => {
    axios.post(`/cart`, {sku_id: skuId})
    .then(items => {
      dispatch(getCart())
    })
    .catch(error => {
      // TODO: how to display it didn't add to cart
      console.error(error.message)
    })
  }
}