import { GET_CART_REQUEST } from './getCartTypes';
import { GET_CART_SUCCESS } from './getCartTypes';
import { GET_CART_FAILURE } from './getCartTypes';

const initialState = {
  loading: false,
  cart: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: action.payload,
        error: ''
      }
    case GET_CART_FAILURE:
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