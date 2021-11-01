import React, { useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import Style from './Style.jsx';

const StyleList = () => {
  const styleList = useSelector(state => state.styleList)

  if (styleList.loading) {
    return (<h2>Loading</h2>)
  } else if (styleList.error) {
    return <div>{styleList.error}</div>
  } else {
    return (
      <div>
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