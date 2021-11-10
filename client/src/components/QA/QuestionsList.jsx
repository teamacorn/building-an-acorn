import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AnswerList from './AnswerList.jsx';
import {useSelector, useDispatch } from 'react-redux';

const QuestionList = ({qaList, numOfQuestions}) => {

  return (
    <div id='qa-question-list'>
    {
      qaList.slice(0, numOfQuestions).map(result => {
        return (
          <Accordion expanded={true} className='qa-list-accordion' style={{ boxShadow: "none" }} key={result.question_id}>
            <AccordionSummary><span className='qa-header'>Q:</span>&nbsp;&nbsp;
            {
              // (result.question_body[result.question_body.length - 1] === '?')?
              // (' ' + result.question_body):
              // (' ' + result.question_body + '?')
              <>
              <span className='qa-header' style={{width: '100%'}} dangerouslySetInnerHTML={{__html: result.question_body}}></span>
              <span className='qa-small' style={{textAlign: 'right', width: '100%'}}> 
                Helpful? <a className='report-helpful-btn'>Yes</a> ({result.question_helpfulness}) &ensp;| 
                &ensp; <a className="report-helpful-btn">Add an answer</a> 
              </span>
              </>
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