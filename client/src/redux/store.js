import { createStore } from 'redux';
import cakeReducer from './cake/cakeReducer.js';

const store = createStore(cakeReducer)

export default store;