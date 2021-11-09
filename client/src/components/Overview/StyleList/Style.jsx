import React from 'react';
import Grid from '@mui/material/Grid';

const Style = ({style, id, handleClick}) => {

  return (
  <div>
        <img id={id} className='circular--portrait' src={style.photos[0].thumbnail_url} onClick={handleClick}/>

  </div>
  )
}

export default Style;