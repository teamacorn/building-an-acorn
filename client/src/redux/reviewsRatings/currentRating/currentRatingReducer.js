import { UPDATE_CURRENT_RATING } from './currentRatingTypes';

const initialState = {
  currentRating: {
    5: false,
    4: false,
    3: false,
    2: false,
    1: false
  }
}

const currentRatingReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_RATING: return {
      ...state,
      currentRating: action.payload
    }

    default: return state
  }
}

export default currentRatingReducer;
