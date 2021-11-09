import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AnswerList from './AnswerList.jsx';
import {useSelector, useDispatch } from 'react-redux';

const QuestionList = ({qaList}) => {
  // TODO: load more questions based on a button pressed on the QA module
  // const qaList = useSelector(state => state.qaList);

  return (
    <div id='qa-question-list'>
    {
      qaList.qa.map(result => {
        return (
          <Accordion className='qa-list-accordion' style={{ boxShadow: "none" }} key={result.question_id}>
            <AccordionSummary>Q: 
            {
              (result.question_body[result.question_body.length - 1] === '?')?
              (' ' + result.question_body):
              (' ' + result.question_body + '?')

            }
            </AccordionSummary>

            <AnswerList answers={result.answers}/>
          </Accordion>
        )
      })
    }
    </div>
  )
};

export default QuestionList;