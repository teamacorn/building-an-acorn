import { combineReducers } from 'redux';
import productListReducer from './productList/productListReducer';
import currentProductReducer from './currentProduct/currentProductReducer';
import styleReducer from './overview/styleList/styleReducer';
import getCartReducer from './overview/getCart/getCartReducer';
const rootReducer = combineReducers({
  productList: productListReducer ,
  currentProduct: currentProductReducer,
  styleList: styleReducer,
  getCart: getCartReducer
});

export default rootReducer;