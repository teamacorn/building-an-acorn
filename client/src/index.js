import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "./styles.css";
import { fetchProductList } from './redux/productList/productListActions'

import store from './redux/store'

store.dispatch(function getProducts (dispatch, getState) {
  const state = getState();
  dispatch(fetchProductList())
})

ReactDOM.render(
  <App />,
  document.getElementById("app"),
  // need to do axios call to get the first batch of data
  // () => { fetchProductList()(store.dispatch); }
);