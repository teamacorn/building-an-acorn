import {useSelector, useDispatch } from 'react-redux';
import React from 'react';

const Test = () => {
  const qaList = useSelector(state => state.qaList);

  return (qaList.loading)? 
    (<div>Loading</div>):
    (
      <div>
        <div>{qaList.qa.product_id}</div>
        {
          // console.log(qaList.qa)
          qaList.qa.map(result => {
            return <div key={result.question_id}>{result.question_body}</div>
          })
        }
      </div>

      // <div>
      //   {
      //     qaList.qa.results.map(result => {
      //       return <div>{result.question_body}</div>
      //     })
      //   }
      // </div>
    )
}

export default Test;