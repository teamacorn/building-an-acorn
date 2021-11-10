import React, {useState} from 'react';
import { TextField } from '@mui/material';
import QuestionList from './QuestionsList.jsx';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import {useSelector, useDispatch } from 'react-redux';

const QA = () => {
  const qaList = useSelector(state => state.qaList);
  const [numOfQuestions, setNumOfQuestions] = useState(2);
  const [moreQuestionBtnText, setMoreQuestionBtnText] = useState('MORE ANSWERED QUESTIONS');
  
  var onClickHandler = (event) => {
    if (numOfQuestions !== 2) {
      setNumOfQuestions(2);
    } else {
      setNumOfQuestions(qaList.qa.length);
    }
    if (moreQuestionBtnText !== 'MORE ANSWERED QUESTIONS') {
      setMoreQuestionBtnText('MORE ANSWERED QUESTIONS');
    } else {
      setMoreQuestionBtnText('SHOW LESS QUESTIONS');
    }
  };

  var onChangeHandler = () => {
    
  };
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

          <QuestionList qaList={qaList} numOfQuestions={numOfQuestions}/>
          <Stack id="qa-bottom-button" direction="row" spacing={2}>
            <Button id="more-question-btn" size="large" variant="outlined" onClick={onClickHandler}>{moreQuestionBtnText}</Button>
            <Button size="large" variant="outlined">ADD A QUESTION +</Button>
          </Stack>
        </div>
      </div>
    )
}

export default QA;