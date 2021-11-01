import { combineReducers } from 'redux';
import productListReducer from './productList/productListReducer';
import currentProductReducer from './currentProduct/currentProductReducer';
import styleReducer from './overview/styleList/styleReducer';
import cartReducer from './overview/cart/cartReducer';
const rootReducer = combineReducers({
  productList: productListReducer ,
  currentProduct: currentProductReducer,
  styleList: styleReducer,
  cart: cartReducer
});

export default rootReducer;