import React from 'react';
import {useSelector} from 'react-redux';

const Description = () => {
  const currentProduct = useSelector(state => state.currentProduct);

  if (currentProduct.loading) {
    return (<h2>loading</h2>)
  } else if (currentProduct.error) {
    return <div>{currentProduct.error}</div>
  } else {
    return (
      <div>
        <h2>{currentProduct.product.slogan}</h2>
        <p>{currentProduct.product.description}</p>
      </div>
    )
  }
}

export default Description;