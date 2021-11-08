import { combineReducers } from 'redux';
import productListReducer from './productList/productListReducer';
import currentProductReducer from './currentProduct/currentProductReducer';
import styleReducer from './overview/styleList/styleReducer';
import cartReducer from './overview/cart/cartReducer';
import qaReducer from './qa/qaReducer';
import currentStyleIdReducer from './overview/currentStyle/currentStyleReducer';
import ratingsReducer from './reviewsRatings/ratings/ratingsReducer';
import reviewsReducer from './reviewsRatings/reviews/reviewsReducer';

const rootReducer = combineReducers({
  productList: productListReducer ,
  currentProduct: currentProductReducer,
  styleList: styleReducer,
  cart: cartReducer,
  qaList: qaReducer,
  styleId: currentStyleIdReducer,
  ratings: ratingsReducer,
  reviews: reviewsReducer
});

export default rootReducer;