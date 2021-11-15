import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; // Chrome redux-dev tool plug-in

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export default store;