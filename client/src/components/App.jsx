import React from "react";
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import store from '../redux/store.js';
import Overview from './Overview';

function App (){
  return (
    <Provider store={store}>
      <div className="App">
        <Overview />
      </div>
    </Provider>
  );
}

export default hot(App);