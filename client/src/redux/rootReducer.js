import { combineReducers } from 'redux';
import productListReducer from './productList/productListReducer';
import currentProductReducer from './currentProduct/currentProductReducer';
const rootReducer = combineReducers({
  productList: productListReducer ,
  currentProductReducer: currentProductReducer
});

export default rootReducer;