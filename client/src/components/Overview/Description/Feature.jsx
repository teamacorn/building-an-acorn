import React from 'react';

const Feature = ({ newFeature, value }) => {
  return (
    <div>
      <li className='checkMark'>{newFeature}</li>
      <li className='checkMark'>{value}</li>
    </div>
  )
}

export default Feature;