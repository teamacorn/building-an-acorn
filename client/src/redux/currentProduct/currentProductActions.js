import {UPDATE_CURRENT_PRODUCT} from './currentProductTypes';

export const updateCurrentProduct = (currentProduct = null) => ({
  type: UPDATE_CURRENT_PRODUCT,
  payload: currentProduct
});