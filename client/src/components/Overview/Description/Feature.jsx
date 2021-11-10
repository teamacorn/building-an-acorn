import React from 'react';

const Feature = ({ newFeature, value }) => {
  return (
    <div>
      <li>{newFeature}</li>
      <li>{value}</li>
    </div>
  )
}

export default Feature;