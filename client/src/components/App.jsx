import React from "react";
import { hot } from 'react-hot-loader/root';
import store from '../redux/store.js';
import StyleList from './Overview/StyleList.jsx';
import {useSelector, useDispatch } from 'react-redux';

function App (){
  // add here
  const styleList = useSelector(state => state.styleList);
  const currentProduct = useSelector(state => state.currentProduct);
  const productList = useSelector(state => state.productList);

  var someIsLoading = styleList.loading || currentProduct.loading || productList.loading; // add here
  var someHasError = styleList.error || currentProduct.error || productList.error; // add here

  if (someIsLoading) {
    return <div></div>
  } else if (someHasError) {
    return <div>Error occurs! Please refresh the page!</div>
  } else {
    return (
      <div className="App">
        <StyleList />
      </div>
    )
  }

}

export default hot(App);