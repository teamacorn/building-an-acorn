import React, {useState} from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import AnswerImageList from './AnswerImageList.jsx';
import {useSelector, useDispatch } from 'react-redux';

const AnswerList = ({answers}) => {
  const dispatch = useDispatch();
  const defaultNumOfAnswers = 2; // TODO: try 2?
  const sortedAnswers = sortAnswer(answers);
  const [numOfAnswers, setNumOfAnswers] = useState(defaultNumOfAnswers);
  const [moreAnswerBtnText, setMoreAnswerBtnText] = useState('LOAD MORE ANSWER');


  var onClickHandlerMoreAnswer = () => {
    if (numOfAnswers !== defaultNumOfAnswers) {
      setNumOfAnswers(defaultNumOfAnswers);
    } else {
      setNumOfAnswers(Object.keys(answers).length);
    }
    if (moreAnswerBtnText !== 'LOAD MORE ANSWER') {
      setMoreAnswerBtnText('LOAD MORE ANSWER');
    } else {
      setMoreAnswerBtnText('SHOW LESS ANSWER');
    }
  };

  var onClickHandlerReport = (e) => {
    e.target.textContent = 'Reported';
    e.target.style.pointerEvents = 'none';
    e.target.style.textDecoration = 'none';

    // TODO: dispatch
    // no need to do this cuz API does not work
  };

  var onClickHandlerHelpful = (e) => {
    e.target.style.pointerEvents = 'none';
    e.target.style.cursor = 'auto';
    e.target.style.textDecoration = 'none';
    console.log('answer id: ', e.target.name);
    var helpfulness = document.getElementById(e.target.name).innerHTML;
    console.log(helpfulness)
    document.getElementById(e.target.name).innerHTML = '(' + (parseInt(helpfulness.substring(1, helpfulness.length))+1) + ')';

    // TODO: dispath
    // no need to do this cuz API does not work
  };

  return (
    <>
      {
        sortedAnswers.slice(0, numOfAnswers).map((answer, index) => {
          return (
            ((index === 0)?
            (
                <AccordionDetails key={answer[0]}>
                  <div className='accordion-question-detail'>
                    <span className='qa-header'>A: </span>&nbsp;&nbsp;
                    {answer[1].body} <br/><br/>
                    <div style={{marginLeft: "30px"}}>
                      <AnswerImageList photos={answer[1].photos} />
                    </div>
                    <p className='qa-small'>
                      &emsp;&nbsp;&nbsp; &nbsp; by {answer[1].answerer_name.toLowerCase() === 'seller'? (<span style={{fontWeight: '700'}}>Seller</span>): answer[1].answerer_name}, {dateFormatter(answer[1].date)} &ensp;| &ensp;
                      Helpful? <a name={answer[0]} onClick={onClickHandlerHelpful} className='report-helpful-btn'>Yes</a> <span id={answer[0]}>({answer[1].helpfulness})</span> &ensp;| &ensp;
                      <a onClick={onClickHandlerReport} className="report-helpful-btn report-btn">Report</a>
                    </p>
                  </div>
                </AccordionDetails>
            ):
            (
                <AccordionDetails className='answer-list-tabbed' key={answer[0]}>
                  &emsp;&nbsp;&nbsp;&nbsp;{answer[1].body} <br/><br/>
                  <div style={{marginLeft: "30px"}}>
                    <AnswerImageList photos={answer[1].photos} />
                  </div>
                  <p className='qa-small'>
                  &emsp;&nbsp; &nbsp;&nbsp; by {answer[1].answerer_name.toLowerCase() === 'seller'? (<span style={{fontWeight: '700'}}>Seller</span>): answer[1].answerer_name}, {dateFormatter(answer[1].date)} &ensp;| &ensp;
                  Helpful? <a name={answer[0]} onClick={onClickHandlerHelpful} className='report-helpful-btn'>Yes</a> <span id={answer[0]}>({answer[1].helpfulness})</span> &ensp;| &ensp;
                  <a onClick={onClickHandlerReport} className="report-helpful-btn report-btn">Report</a>
                  </p>
                </AccordionDetails>
            ))
          )
        })
      }
      {
        (() => {
          return (numOfAnswers !== answers.length)?
          (
            <>
              &emsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
              <Button
                size="small"
                variant="outlined"
                className='show-more-ans-btn'
                style={{
                  // textDecoration: 'underline'
                  // paddingRight: '0px',
                  // paddingLeft: '0px'
                }}
                onClick={onClickHandlerMoreAnswer}
              >
                {moreAnswerBtnText}
              </Button>
            </>
          ):
          (<></>)
        })()
      }
    </>
  )
}
function sortAnswer(answers) {
  var sortable = [];
  for (var a in answers) {
    sortable.push([a, answers[a]]);
  }
  sortable.sort((a, b) => {
    return parseInt(b[1].helpfulness) - parseInt(a[1].helpfulness);
  });
  return sortable;
}
function dateFormatter(dateString) {
  // dateString "2021-03-07T00:00:00.000Z"
  // convert to Month DD, YYYY
  let year = dateString.substring(0,4);
  let month = dateString.substring(5,7);
  let day = dateString.substring(8, 10);

  switch(month) {
    case '01':
      return `January ${day}, ${year}`;
    case '02':
      return `February ${day}, ${year}`;
    case '03':
      return `March ${day}, ${year}`;
    case '04':
      return `April ${day}, ${year}`;
    case '05':
      return `May ${day}, ${year}`;
    case '06':
      return `June ${day}, ${year}`;
    case '07':
      return `July ${day}, ${year}`;
    case '08':
      return `August ${day}, ${year}`;
    case '09':
      return `September ${day}, ${year}`;
    case '10':
      return `October ${day}, ${year}`;
    case '11':
      return `November ${day}, ${year}`;
    case '12':
      return `December ${day}, ${year}`;
  }
}

export default AnswerList;