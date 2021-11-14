import React, {useState} from 'react';

const AnswerImageList = ({photos}) => {
  console.log(photos);
  return (
    <>
      {
        photos.map((photo, index) => (<img className='answerImage' height='60' width='80' key={index} src={photo}></img>))
      }
    </>
  )
};

export default AnswerImageList;