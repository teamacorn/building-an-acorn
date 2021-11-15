import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reviews from '../Reviews/Reviews.jsx';
import { updateCurrentRating } from '../../../redux';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LinearProgress  from '@mui/material/LinearProgress';


const Breakdown = () => {

  const dispatch = useDispatch()
  const ratingSelect = useSelector(state => state.currentRating.currentRating);
  const ratings = useSelector(state => state.ratings.metadata.ratings);
  const totalRatings = useSelector(state => state.ratings.totalRatings);
  const handleClick = (e) => {
    const copy = {...ratingSelect};
    if (ratingSelect[e.target.value] === false) {
      copy[e.target.value] = true;
      dispatch(updateCurrentRating(copy));
    } else {
      copy[e.target.value] = false;
      dispatch(updateCurrentRating(copy));
    }
  }
  if (!ratings) {
    return null;
  } else {
    let barPerc = [];
    let ratingsTotal = [];
    Object.values(ratings).map((rating, index) => {
      ratingsTotal.push(rating)
      var perc = ((rating / totalRatings)*100).toFixed(2);
      barPerc.unshift(parseInt(perc));
    })

  let tempIndex = [5,4,3,2,1];

  return (
    <div className="click-star">
      <div className="star-ratings-breakdown">
        {
          barPerc.map((rating, index) => {
            return (
             <div key={index*213} style={{display: 'flex', maginLeft: '20px'}}>
              <Button variant='text' id="star-five-stars" style={{width: '95px', paddingLeft: '0',textDecoration:'underline'}}key={index} value={tempIndex[index]} onClick={handleClick}>{tempIndex[index]} stars</Button>
            <LinearProgress variant="determinate"
            key={index+6}  value={rating} style={{ width: '100%', height: '7px',marginTop: '15px', }}/>
              </div>
            );
          })
        }
        {/* {
          ratingsTotal.reverse().map((barNum, index) => {
            return (
              <div id="index">({barNum})</div>
            )
          })
        } */}

        </div>
        </div>
    )
  }
}

export default Breakdown;
