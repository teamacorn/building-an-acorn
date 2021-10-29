import axios from 'axios';
import {UPDATE_PRODUCT_LIST} from './productListTypes';

export const fetchProductList = () => {
  return (dispatch) => {
    axios.get('/products')
      .then(res => {
        dispatch(updateProductList(res.data));
      })
      .catch(err => {
        console.error(err);
      })
  }
};

export const updateProductList = (productList = []) => ({
  type: UPDATE_PRODUCT_LIST,
  payload: productList
});
