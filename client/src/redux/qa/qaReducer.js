import { FETCH_QA_REQUEST } from "./qaTypes";
import { FETCH_QA_SUCCESS } from "./qaTypes";
import { FETCH_QA_FAILURE } from "./qaTypes";

// initial state
const initialState = {
  loading: false,
  qa: [],
  error: ''
}

// reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_QA_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_QA_SUCCESS:
      return {
        ...state,
        loading: false,
        qa: action.payload,
        error: ''
      }
    case FETCH_QA_FAILURE:
      return {
        ...state,
        loading: false,
        qaList: [],
        error: action.payload
      }
    default:
      return state;
  }
};

export default reducer;