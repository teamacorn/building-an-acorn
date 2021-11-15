import React, {useState} from 'react';

const AnswerImageList = ({photos}) => {
   if (photos.length > 0) {
    return (
      <>
        {
          photos.map((photo, index) => (<img className='answerImage' height='60' width='80' key={index} src={photo}></img>))
        }<br/>
      </>
    )
   } else {
    return <span></span>
   }
};

export default AnswerImageList;