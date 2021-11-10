import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AnswerList from './AnswerList.jsx';
import {useSelector, useDispatch } from 'react-redux';

const QuestionList = ({qaList, numOfQuestions}) => {
  // TODO: load more questions based on a button pressed on the QA module
  // const qaList = useSelector(state => state.qaList);

  return (
    <div id='qa-question-list'>
    {
      qaList.qa.slice(0, numOfQuestions).map(result => {
        return (
          <Accordion expanded={true} className='qa-list-accordion' style={{ boxShadow: "none" }} key={result.question_id}>
            <AccordionSummary>Q: 
            {
              (result.question_body[result.question_body.length - 1] === '?')?
              (' ' + result.question_body):
              (' ' + result.question_body + '?')

            }
            </AccordionSummary>

            <AnswerList answers={result.answers} numOfAnswers={2}/>
            
          </Accordion>
        )
      })
    }
    </div>
  )
};

export default QuestionList;