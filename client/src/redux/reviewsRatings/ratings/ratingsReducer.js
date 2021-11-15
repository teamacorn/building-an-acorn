import { FETCH_RATINGS_REQUEST } from './ratingsTypes.js';
import { FETCH_RATINGS_SUCCESS } from './ratingsTypes.js';
import { FETCH_RATINGS_FAILURE } from './ratingsTypes.js';

const initialState = {
  loading: false,
  metadata: {},
  averageRating: 0,
  averageStarRating: 0,
  totalRatings: 0,
  recommendedPerc: 0,
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
      let o = action.payload.ratings;
      let r = action.payload.recommended;
      // t = total; k = key; v = value
      let avg = (Object.keys(o).reduce((t, k) => (t + parseInt(k) * parseInt(o[k])), 0) /  Object.values(o).reduce((t, v) => (t + parseInt(v)), 0));
      let averageRating = Math.round(avg * 10) / 10;
      let averageStarRating = Number((Math.round(avg * 4) / 4).toFixed(2));
      let totalRatings = Object.values(o).reduce((t, v) => (t + parseInt(v)), 0);
      let rPerc = Math.round((parseInt(r.true) / (Object.values(r).reduce((t, v) => (t + parseInt(v)), 0))) * 100);
      return {
        ...state,
        loading: false,
        metadata: action.payload,
        averageRating: averageRating,
        averageStarRating: averageStarRating,
        totalRatings: totalRatings,
        recommendedPerc: rPerc,
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