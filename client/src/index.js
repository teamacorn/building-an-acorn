import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "./styles.css";
import {fetchProductList} from './redux/productList/productListActions'
import store from './redux/store'

ReactDOM.render(
  <App />, 
  document.getElementById("app"),
  // need to do axios call to get the first batch of data
  () => { fetchProductList()(store.dispatch); }
);