import {UPDATE_CURRENT_PRODUCT} from './currentProductTypes';

const initialState = {
  currentProduct: null
};

const currentProductReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_CURRENT_PRODUCT:
      return {...state, currentProduct: action.payload};
    default:
      return state;
  }
};

export default currentProductReducer;