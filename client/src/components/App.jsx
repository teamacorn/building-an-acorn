import React from "react";
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import store from '../redux/store.js';
import Overview from './Overview';
// import ReviewsList from './Ratings_Reviews/Reviews/ReviewsList.jsx';
import Reviews from './Ratings_Reviews/Reviews/Reviews.jsx';
import Ratings from './Ratings_Reviews/Ratings/Ratings.jsx';

function App (){
  return (
    <Provider store={store}>
      <div className="App">
        <Overview />
        <Ratings />
        <Reviews />
      </div>
    </Provider>
  );
}

export default hot(App);