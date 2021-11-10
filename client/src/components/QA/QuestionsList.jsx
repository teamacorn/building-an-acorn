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
      qaList.slice(0, numOfQuestions).map(result => {
        return (
          <Accordion expanded={true} className='qa-list-accordion' style={{ boxShadow: "none" }} key={result.question_id}>
            <AccordionSummary><span>Q:</span>&nbsp;&nbsp;
            {
              // (result.question_body[result.question_body.length - 1] === '?')?
              // (' ' + result.question_body):
              // (' ' + result.question_body + '?')
              <span dangerouslySetInnerHTML={{__html: result.question_body}}></span>

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