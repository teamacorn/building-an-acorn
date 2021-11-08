import { FETCH_REVIEWS_REQUEST } from './reviewsTypes.js';
import { FETCH_REVIEWS_SUCCESS } from './reviewsTypes.js';
import { FETCH_REVIEWS_FAILURE } from './reviewsTypes.js';

const initialState = {
  loading: false,
  reviews: [],
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REVIEWS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        reviews: action.payload,
        error: ''
      }
    case FETCH_REVIEWS_FAILURE:
      return {
        ...state,
        loading: false,
        reviews: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer;