import React from 'react';
import Feature from './Feature.jsx'
import {useSelector} from 'react-redux';

const Features = () => {
  const currentProduct = useSelector(state => state.currentProduct);

  if (currentProduct.loading || JSON.stringify(currentProduct.product) === '{}') {
    return (<h2>loading</h2>)
  } else if (currentProduct.error) {
    return <div>{currentProduct.error}</div>
  } else {
    return (
      <div>
        {currentProduct.product.features.map((feature, index) => {
          return (
            <Feature
            newFeature={feature.feature}
            value = {feature.value}
            key = {index}
          />
          )
        })}
      </div>
    )
  }
}

export default Features;