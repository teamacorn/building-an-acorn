import {UPDATE_PRODUCT_LIST} from './productListTypes';


const initialState = {
  productList: []
};

const productListReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_PRODUCT_LIST:
      return {...state, productList: action.payload};
    default:
      return state;
  }
}

export default productListReducer;