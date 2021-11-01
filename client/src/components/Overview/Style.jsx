import React from 'react';

const Style = ({style, id}) => {
  // const handleClick = (event) => {
  //   console.log(event.target.id)
  // }
  return (
  <div className='circular'>
    <img id={id} className='resize' src={style.photos[0].thumbnail_url}/>
  </div>
  )
}

export default Style;