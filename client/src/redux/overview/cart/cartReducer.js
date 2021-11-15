import { FETCH_CART_REQUEST } from './cartTypes';
import { FETCH_CART_SUCCESS } from './cartTypes';
import { FETCH_CART_FAILURE } from './cartTypes';

const initialState = {
  loading: false,
  cartList: [],
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
        cartList: action.payload,
        error: ''
      }
    case FETCH_CART_FAILURE:
      return {
        ...state,
        loading: false,
        cartList: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer;