import { FETCH_RATINGS_REQUEST } from './ratingsTypes.js';
import { FETCH_RATINGS_SUCCESS } from './ratingsTypes.js';
import { FETCH_RATINGS_FAILURE } from './ratingsTypes.js';

const initialState = {
  loading: false,
  metadata: {},
  error: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RATINGS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_RATINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        metadata: action.payload,
        error: ''
      }
    case FETCH_RATINGS_FAILURE:
      return {
        ...state,
        loading: false,
        metadata: {},
        error: action.payload
      }
    default: return state
  }
}

export default reducer;