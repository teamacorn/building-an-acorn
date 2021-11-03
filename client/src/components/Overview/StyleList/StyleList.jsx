import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import Style from './Style.jsx';
import { addToCart } from '../../../redux';
import SelectSize from './SelectSize.jsx';
import { updateCurrentStyle } from '../../../redux';

const StyleList = () => {
  const styleList = useSelector(state => state.styleList);
  const currentProduct = useSelector(state => state.currentProduct)
  const currentStyleId = useSelector(state => state.styleId.currentStyleId)
  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(updateCurrentStyle(parseInt(event.target.id)))
  }

  if (styleList.loading || currentProduct.loading) {
    return (<h2>Loading</h2>)
  } else if (styleList.error) {
    return <div>{styleList.error}</div>
  } else {
    return (
      <div>
        <p>reviews</p>
        <h3>{currentProduct.product.category}</h3>
        <h1>{currentProduct.product.name}</h1>

        {
          styleList.styles.map((style, index) => {
            if(style.style_id === currentStyleId) {
              if (style.sale_price === null) {
                return (
                  <div key={style.style_id} className='prices'>
                    <p className='price'>${style.original_price}</p>
                  </div>
                )
              } else {
                return (
                  <div key={style.style_id} className='prices'>
                    <p className='sale-price price'>${style.sale_price}</p>
                    <p className='original-price price'>${style.original_price}</p>
                  </div>
                )
              }
            }
          })
        }
        {
          styleList.styles.map(style => {
            if (style.style_id === currentStyleId) {
              return (
                <div key={style.style_id}>
                  <p>Style {'>'} {style.name}</p>
                </div>
              )
            }
          })
        }
      {
        styleList.styles.map((style) => (
          <Style
            style={style}
            id={style.style_id}
            key={style.style_id}
            handleClick = {handleClick}
          />
        ))
      }
      <SelectSize />
      {/* <button onClick={() => {dispatch(addToCart(1318923))}}>Add To Cart</button> */}
      </div>
    )
  }
  }

export default StyleList;