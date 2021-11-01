import { FETCH_STYLE_LIST_REQUEST } from './styleTypes';
import { FETCH_STYLE_LIST_SUCCESS } from './styleTypes';
import { FETCH_STYLE_LIST_FAILURE } from './styleTypes';

const initialState = {
  loading: false,
  styles : [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STYLE_LIST_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_STYLE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        styles: action.payload,
        error: ''
      }
    case FETCH_STYLE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        styles: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer;