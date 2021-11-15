import { FETCH_CURRENT_PRODUCT_REQUEST }from './currentProductTypes'
import { FETCH_CURRENT_PRODUCT_SUCCESS } from './currentProductTypes'
import { FETCH_CURRENT_PRODUCT_FAILURE } from './currentProductTypes'

const initialState = {
  loading: false,
  product: {},
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_CURRENT_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
        error: ''
      }
    case FETCH_CURRENT_PRODUCT_FAILURE:
      return {
        ...state,
        loading: false,
        product: {},
        error: action.payload
      }
    default: return state
  }
}

export default reducer;