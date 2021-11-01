import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import Style from './Style.jsx';
import { addToCart } from '../../redux';

const StyleList = () => {
  const styleList = useSelector(state => state.styleList);
  const dispatch = useDispatch();

  if (styleList.loading) {
    return (<h2>Loading</h2>)
  } else if (styleList.error) {
    return <div>{styleList.error}</div>
  } else {
    console.log(styleList.styles)
    return (
      <div>
        <button onClick={() => {dispatch(addToCart(1318923))}}>Add To Cart</button>
      {
        styleList.styles.map((style) => (
          <Style
            style={style}
            id={style.style_id}
            key={style.style_id}
          />
    ))
      }
      </div>
    )
  }
  }

export default StyleList;