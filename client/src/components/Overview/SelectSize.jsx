import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../redux';
import { updateCurrentStyle } from '../../redux'

const SelectSize = () => {
  const styleList = useSelector(state => state.styleList);
  const dispatch = useDispatch();
  const currentStyleId = useSelector(state => state.styleId.currentStyleId)
  const [currentSkuId, setCurrentSkuId] = useState(NaN)

  const handleChange = (event) => {
    setCurrentSkuId(event.target.value);
  }

  const handleSubmit = (event) => {
    let qty = parseInt(document.getElementById('quantity').value);
    for (let i = 0; i < qty; i++) {
      dispatch(addToCart(currentSkuId))
    }
    event.preventDefault()
  }


  if (styleList.loading) {
    return (<h2>Loading</h2>)
  } else if (styleList.error) {
    return <div>{styleList.error}</div>
  } else {
    return (
      <form onSubmit={handleSubmit}>
      <select name='size' onChange={handleChange}>
        <option value='NaN'>Select Size</option>
      {
          styleList.styles.map(style => {
            let skuIds = Object.keys(style.skus);
            if (currentStyleId === style.style_id) {
             return (
              skuIds.map((skuId, index) => {
                if (style.skus[skuId].quantity > 0) {
                  return <option key={index} value={skuId}>{style.skus[skuId].size}</option>
                } else {
                  return <option key={index} disabled>OUT OF STOCK</option>
                }
              }
             ))
            }
          })
        }
      </select>
      <select id='quantity' name='quantity'>
        {
          (isNaN(currentSkuId)) ?
          (<option disabled> - </option>) :
          styleList.styles.map(style => {
            if (currentStyleId === style.style_id) {
              let skuIds = Object.keys(style.skus);
              return (
                skuIds.map((skuId, index) => {
                  if (currentSkuId === skuId) {
                    if (style.skus[currentSkuId].quantity > 15) {
                      return (
                        Array.apply(null, { length: 15 }).map((amount, index) => (
                          <option key={index + 1}> {index + 1} </option>
                         ))
                      )
                    } else {
                      return (
                        Array.apply(null, { length: style.skus[currentSkuId].quantity }).map((amount, index) => (
                          <option key={index + 1}> {index + 1} </option>
                        ))
                      )
                    }
                  }
                })
              )
            }
          })
        }
      </select>
      {
        (isNaN(currentSkuId)) ?
        (<input type="submit" className='addToCart' value="Add to Cart" disabled/>) :
        (<input type="submit" className='addToCart' value="Add to Cart"/>)
      }
    </form>
    )
  }
}
export default SelectSize;