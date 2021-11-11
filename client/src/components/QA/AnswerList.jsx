import React, {useState} from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';


const AnswerList = ({answers}) => {
  // answers is an object
  // TODO: sort answers based on helpfulness
  var sortable = [];
  for (var a in answers) {
    sortable.push([a, answers[a]]);
  }
  sortable.sort((a, b) => {
    return parseInt(b[1].helpfulness) - parseInt(a[1].helpfulness);
  });

  const [numOfAnswers, setNumOfAnswers] = useState(2);
  const [moreAnswerBtnText, setMoreAnswerBtnText] = useState('LOAD MORE ANSWER');

  var onClickHandlerMoreAnswer = () => {
    if (numOfAnswers !== 2) {
      setNumOfAnswers(2);
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
  };

  return (
    <>
      {
        Object.keys(answers).slice(0, numOfAnswers).map((key, index) => {
          return (
            ((index === 0)?
            (
                <AccordionDetails key={key}>
                  <div className='accordion-question-detail'>
                    <span className='qa-header'>A: </span>&nbsp;&nbsp;
                    {answers[key].body} <br/><br/>
                    <p className='qa-small'>
                      &emsp;&nbsp;&nbsp; &nbsp; by {answers[key].answerer_name}, {dateFormatter(answers[key].date)} &ensp;| &ensp;
                      Helpful? <a className='report-helpful-btn'>Yes</a> ({answers[key].helpfulness}) &ensp;| &ensp;
                      <a onClick={onClickHandlerReport} className="report-helpful-btn report-btn">Report</a>
                    </p>
                  </div>
                </AccordionDetails>
            ):
            (
                <AccordionDetails className='answer-list-tabbed' key={key}>
                  &emsp;&nbsp;&nbsp;&nbsp;&nbsp;{answers[key].body} <br/><br/>
                  <p className='qa-small'>
                  &emsp;&nbsp; &nbsp;&nbsp; by {answers[key].answerer_name}, {dateFormatter(answers[key].date)} &ensp;| &ensp;
                  Helpful? <a className='report-helpful-btn'>Yes</a> ({answers[key].helpfulness}) &ensp;| &ensp;
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
              &emsp; &nbsp;&nbsp;  &nbsp; &nbsp;&nbsp;<button onClick={onClickHandlerMoreAnswer}>{moreAnswerBtnText}</button>
            </>
          ):
          (<></>)
        })()
      }
    </>
  )
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