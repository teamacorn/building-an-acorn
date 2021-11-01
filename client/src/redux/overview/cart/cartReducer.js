import { FETCH_CART_REQUEST } from './cartType';
import { FETCH_CART_SUCCESS } from './cartType';
import { FETCH_CART_FAILURE } from './cartType';

const initialState = {
  loading: false,
  cart : [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
        error: ''
      }
    case FETCH_CART_FAILURE:
      return {
        ...state,
        loading: false,
        cart: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer;