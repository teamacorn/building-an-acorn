import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "./styles.css";
import { fetchProductList } from './redux/productList/productListActions'

import store from './redux/store'

// TODO: find a place to store the thunk
store.dispatch((dispatch) => {
  dispatch(fetchProductList())
})

ReactDOM.render(
  <App />,
  document.getElementById("app"),
  // () => { fetchProductList()(store.dispatch); }
);