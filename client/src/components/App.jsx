import React from "react";
import { hot } from 'react-hot-loader/root';
import CakeContainer from './CakeContainer.js';
import { Provider } from 'react-redux';
import store from '../redux/store.js';

function App (){
  return (
    <Provider store={store}>
      <div className="App">
      </div>
    </Provider>
  );
}

export default hot(App);