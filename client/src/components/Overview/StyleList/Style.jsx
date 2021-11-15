import React from 'react';
import Grid from '@mui/material/Grid';
import { CgCheckO } from 'react-icons/cg';

const Style = ({style, id, handleClick, currentStyleId}) => {
  if (id === currentStyleId) {
    return (
    <div className='roundImageContainer' >
     <div className='currentStyleSelected'>
     <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="20px" height="20px"><path className="circle" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
   <path className="check"  d="M9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"/></svg>

     </div>
    <img id={id} className='circular--portrait' src={style.photos[0].thumbnail_url} onClick={handleClick}/>
</div>)
  } else {
    return (
      <div className='roundImageContainer img-magnifier-container'>
            <img id={id} className='circular--portrait' src={style.photos[0].thumbnail_url} onClick={handleClick}/>
      </div>
      )
  }
}

export default Style;