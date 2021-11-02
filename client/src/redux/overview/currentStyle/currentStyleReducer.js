import { UPDATE_CURRENT_STYLE } from './currentStyleTypes';

const initialState = {
  currentStyleId: NaN
}

const currentStyleIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_STYLE: return {
      ...state,
      currentStyleId: action.payload
    }

    default: return state
  }
}

export default currentStyleIdReducer
