import React from "react";
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import Stack from '@mui/material/Stack';
import store from '../redux/store.js';
import Overview from './Overview';
import QA from './QA/QA.jsx';
import RatingsReviews from './Ratings_Reviews';
import NavBar from './Overview/NavBar/NavBar.jsx'

function App (){
  return (
    <Provider store={store}>
      <NavBar />
      <div className="App">
        <Stack spacing={2} className='stack-style'>
          <Overview />
          <QA/>
          <RatingsReviews />
          <></>
        </Stack>
      </div>
    </Provider>
  );
}

export default hot(App);