import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AnswerList from './AnswerList.jsx';
import {useSelector, useDispatch } from 'react-redux';
import {markQuestionHelpful} from './../../redux';
import AddAnswerForm from './AddAnswerForm.jsx';

const QuestionList = ({qaList, numOfQuestions}) => {
  const dispatch = useDispatch();

  var onClickHandlerHelpful = (e) => {
    console.log('question id: ',  e.target.name);
    e.target.style.cursor = 'auto';
    e.target.style.textDecoration = 'none';
    var helpfulness = document.getElementById(e.target.name).innerHTML;
    document.getElementById(e.target.name).innerHTML = '(' + (parseInt(helpfulness.substring(1, helpfulness.length))+1) + ')';

    // TODO: dispatch
    dispatch(markQuestionHelpful(e.target.name));
  };

  return (
    <div id='qa-question-list'>
    {
      qaList.slice(0, numOfQuestions).map(result => {
        return (
          <Accordion expanded={true} className='qa-list-accordion' style={{ boxShadow: "none" }} key={result.question_id}>
            <AccordionSummary><span className='qa-header'>Q:</span>&nbsp;&nbsp;
            {

              <>
              <span className='qa-header' style={{width: '100%'}} dangerouslySetInnerHTML={{__html: result.question_body}}></span>
              <span className='qa-small' style={{textAlign: 'right', width: '100%'}}> 
                Helpful? <a name={result.question_id} onClick={onClickHandlerHelpful} className='report-helpful-btn'>Yes</a> <span id={result.question_id}>({result.question_helpfulness})</span> &ensp;| 
                &ensp; <AddAnswerForm question_id={result.question_id}/>
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