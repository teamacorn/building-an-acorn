import React, {useEffect, useState} from 'react';
import { TextField } from '@mui/material';
import QuestionList from './QuestionsList.jsx';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import {useSelector, useDispatch } from 'react-redux';

const QA = () => {
  const qaList = useSelector(state => state.qaList);

  const [queryString, setQueryString] = useState('');
  const [filteredQAList, setFilteredQAList] = useState([]);
  const [numOfQuestions, setNumOfQuestions] = useState(2);
  const [moreQuestionBtnText, setMoreQuestionBtnText] = useState('MORE ANSWERED QUESTIONS');

  useEffect(() => {
    setFilteredQAList(filterQuestionByQuery(queryString)); // this resolves empty filteredQAList 
  }, [qaList.qa]);

    useEffect(() => {
    setFilteredQAList(filterQuestionByQuery(queryString)); // this resolves empty filteredQAList 
  }, [queryString]);

  var onClickHandlerMoreQuestion = () => {
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

  var filterQuestionByQuery = (query) => {
    if (query === '') {
      return qaList.qa;
    } else {
      var filtered = qaList.qa.filter(qa => {
        return qa.question_body.includes(query);
      });
      filtered = filtered.map(qa => ({...qa})); // cant use slice since it's shallow copying the list
      filtered.forEach(q => {
        q.question_body = q.question_body.replace(query, `<mark>${query}</mark>`)
      });
      return filtered;
    }
  };

  var onChangeHandler = (e) => {
    console.log(e.target.value);
    setQueryString(e.target.value);
    if (e.target.value.length >= 3) {
      setFilteredQAList(filterQuestionByQuery(e.target.value));
    } else {
      setFilteredQAList(qaList.qa);
    }
    // console.log(filteredQAList);
  };

  return (qaList.loading)?
    (<div></div>):
    (
      <div id='qa-component'>
        <p id='qa-title'>QUESTIONS & ANSWERS</p>
        <div id="qa-search-field">
          <TextField 
            onChange={onChangeHandler}
            margin="normal"
            fullWidth
            label="HAVE A QUESTION? SEARCH FOR ANSWER..." 
            variant="outlined"
            size="small"/>

          <QuestionList qaList={filteredQAList} numOfQuestions={numOfQuestions}/>
          <Stack id="qa-bottom-button" direction="row" spacing={2}>
            <Button id="more-question-btn" size="large" variant="outlined" onClick={onClickHandlerMoreQuestion}>{moreQuestionBtnText}</Button>
            <Button size="large" variant="outlined">ADD A QUESTION +</Button>
          </Stack>
        </div>
      </div>
    )
}



export default QA;