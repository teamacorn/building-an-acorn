import React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';

const AnswerList = ({answers, numOfAnswers}) => {
  // answers is an object
  // TODO: add button to show more answers
  return (
    Object.keys(answers).slice(0, numOfAnswers).map((key, index) => {
      return (
        (index === 0)?
        (
          <AccordionDetails key={key}>
            A: {answers[key].body} <br/>
            &emsp; by {answers[key].answerer_name}, {dateFormatter(answers[key].date)} | 
            Helpful? <button>Yes</button> ({answers[key].helpfulness}) | 
            <button>Report</button>
          </AccordionDetails>
        ):
        (
          <AccordionDetails className='answer-list-tabbed' key={key}>
            &emsp; {answers[key].body} <br/>
            &emsp; by {answers[key].answerer_name}, {dateFormatter(answers[key].date)} | 
            Helpful? <button>Yes</button> ({answers[key].helpfulness}) | 
            <button>Report</button>
          </AccordionDetails>
        )
      )
    })
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