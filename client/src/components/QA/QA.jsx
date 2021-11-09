import React from 'react';
import { TextField } from '@mui/material';
import QuestionList from './QuestionsList.jsx';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import {useSelector, useDispatch } from 'react-redux';

const QA = () => {
  // TODO: load more questions based on a button pressed on the QA module
  const qaList = useSelector(state => state.qaList);

  return (qaList.loading)?
    (<div></div>):
    (
      <div id='qa-component'>
        <p id='qa-title'>QUESTIONS & ANSWERS</p>
        <div id="qa-search-field">
          <TextField 
            margin="normal"
            fullWidth
            label="HAVE A QUESTION? SEARCH FOR ANSWER..." 
            variant="outlined"
            size="small"/>

          <QuestionList qaList={qaList}/>

          <Stack id="qa-bottom-button" direction="row" spacing={2}>
            <Button size="large" variant="outlined">MORE ANSWERED QUESTIONS</Button>
            <Button size="large" variant="outlined">ADD A QUESTION +</Button>
          </Stack>
        </div>
      </div>
    )
}

export default QA;