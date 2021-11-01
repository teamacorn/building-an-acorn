import React from "react";
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import store from '../redux/store.js';
import StyleList from './Overview/StyleList.jsx';


function App (){
  return (
    <Provider store={store}>
      <div className="App">
        <StyleList />
      </div>
    </Provider>
  );
}

export default hot(App);