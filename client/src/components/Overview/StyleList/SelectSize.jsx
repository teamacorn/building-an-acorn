import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../../redux';
import { updateCurrentStyle } from '../../../redux';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const SelectSize = () => {
  const styleList = useSelector(state => state.styleList);
  const dispatch = useDispatch();
  const currentStyleId = useSelector(state => state.styleId.currentStyleId)
  const [currentSkuId, setCurrentSkuId] = useState('NaN')
  const [currentQuantity, setCurrentQuantity] = useState('NaN')

  const handleChange = (event) => {
    setCurrentSkuId(event.target.value);
    if (event.target.value === 'NaN') {
      setCurrentQuantity('NaN')
    } else {
      setCurrentQuantity(1)
    }
  }

  const handleChangeQuantity = (event) => {
    setCurrentQuantity(event.target.value);
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
      <Select
      className='select'
      onChange={handleChange}
      value={currentSkuId}
      style={{width: '55%', marginRight: '7%', marginBottom: '7%'}}
      >
        <MenuItem value={'NaN'}>Select Size</MenuItem>
      {
          styleList.styles.map(style => {
            let skuIds = Object.keys(style.skus);
            if (currentStyleId === style.style_id) {
             return (
              skuIds.map((skuId, index) => {
                if (style.skus[skuId].quantity > 0) {
                  return <MenuItem key={index} value={skuId}>{style.skus[skuId].size}</MenuItem>
                } else {
                  return <MenuItem key={index} disabled>OUT OF STOCK</MenuItem>
                }
              }
             ))
            }
          })
        }
      </Select>
      <Select id='quantity'
      onChange={handleChangeQuantity}
      value={currentQuantity}
      style={{width: '25%'}}
      >
        {
          (isNaN(currentSkuId)) ?
          (<MenuItem disabled value={'NaN'}> - </MenuItem>) :
          styleList.styles.map(style => {
            if (currentStyleId === style.style_id) {
              let skuIds = Object.keys(style.skus);
              return (
                skuIds.map((skuId, index) => {
                  if (currentSkuId === skuId) {
                    if (style.skus[currentSkuId].quantity > 15) {
                      return (
                        Array.apply(null, { length: 15 }).map((amount, index) => (
                          <MenuItem key={index + 1} value={index + 1}> {index + 1} </MenuItem>
                         ))
                      )
                    } else {
                      return (
                        Array.apply(null, { length: style.skus[currentSkuId].quantity }).map((amount, index) => (
                          <MenuItem key={index + 1} value={index + 1}> {index + 1} </MenuItem>
                        ))
                      )
                    }
                  }
                })
              )
            }
          })
        }
      </Select>
      {
        (isNaN(currentSkuId)) ?
        (<Button variant="outlined" type="submit" className='addToCart' value="Add to Cart" style={{width: '87%', height: '4em' }} disabled>Add to Cart</Button>) :
        (<Button variant="outlined" type="submit" className='addToCart' value="Add to Cart" style={{width: '87%', height: '4em' }}>Add to Cart</Button>)
      }
    </form>
    )
  }
}
export default SelectSize;