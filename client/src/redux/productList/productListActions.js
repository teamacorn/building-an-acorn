import axios from 'axios';
import {UPDATE_PRODUCT_LIST} from './productListTypes';
import {updateCurrentProduct} from './../currentProduct/currentProductActions';

export const fetchProductList = () => {
  return (dispatch) => {
    axios.get('/products')
      .then(res => {
        dispatch(updateProductList(res.data));
        dispatch(updateCurrentProduct(res.data[0]));
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
