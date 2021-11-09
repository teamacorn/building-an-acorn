import React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';

const AnswerList = ({answers}) => {
  // answers is an object
  // TODO: add button to show more answers
  return (
    Object.keys(answers).map((key, index) => {
      return (
        (index === 0)?
        (
          <AccordionDetails key={key}>
            A: {answers[key].body}
          </AccordionDetails>
        ):
        (
          <AccordionDetails key={key}>
            {'  '}+ {answers[key].body}
          </AccordionDetails>
        )
      )
    })
  )
}

export default AnswerList;