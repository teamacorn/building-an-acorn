import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { LinkStars, SoloRating } from './RatingsBreakdown.jsx';
import Breakdown  from './Breakdown.jsx';
import AverageRating  from './AverageRating.jsx';
import RatingsBars from './RatingsBars.jsx';
import CharBars  from './CharBars.jsx';

const RatingsComp = () => {


  return (
    <div>
      <div className="ratings-container">
        <h3>{`Ratings & Reviews`}</h3>
      </div>
      <AverageRating />
      <Breakdown />
      <RatingsBars />
      <CharBars />
    </div>

  )

}

export default RatingsComp;