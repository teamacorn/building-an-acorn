import { FETCH_PRODUCT_LIST_REQUEST }from './productListTypes.js'
import { FETCH_PRODUCT_LIST_SUCCESS } from './productListTypes.js'
import { FETCH_PRODUCT_LIST_FAILURE } from './productListTypes.js'


const initialState = {
  loading: false,
  listOfProducts: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        listOfProducts: action.payload,
        error: ''
      }
    case FETCH_PRODUCT_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        listOfProducts: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer;
