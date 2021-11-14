import React from 'react';
import { useSelector } from 'react-redux';

const RatingsBars = () => {

  const ratings = useSelector(state => state.ratings.metadata.ratings);
  const totalRatings = useSelector(state => state.ratings.totalRatings);

  if (!ratings) {
    return null;
  } else {
    let barPerc = [];
    let ratingsTotal = [];
    Object.values(ratings).map((rating, index) => {
      ratingsTotal.push(rating)
      var perc = ((rating / totalRatings)*100).toFixed(2);
      barPerc.unshift(perc);
    })
    return (
      <div>
        <div id="ratings-bars">
          {
            barPerc.map((ratings, index) => {
              return (
                <span id="bar" key={index}>{ratings}<br /></span>
              )
            })
          }
        </div>
        <div id="rating-totals">
          {
            ratingsTotal.map((total, index) => {
              return (
                <span id="total" className={index+1} key={index}>{'(' + total + ')'}</span>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default RatingsBars;