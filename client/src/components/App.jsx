import React from "react";
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import Stack from '@mui/material/Stack';
import store from '../redux/store.js';
import Overview from './Overview';
import QA from './QA/QA.jsx';

function App (){
  return (
    <Provider store={store}>
      <div className="App">
        <Stack spacing={2} className='stack-style'>
          <Overview />
          <QA/>
        </Stack>
      </div>
    </Provider>
  );
}

export default hot(App);
