import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SortSelect } from './SortSelect.jsx';

const ReviewsHeader = ({sort}) => {
  const reviews = useSelector(state => state.reviews);
    // if (reviews[0] === undefined) {
    //   return (
    //     <div className="review-header">
    //       <h3>
    //         0 reviews, sorted by &nbsp;
    //         <SortSelect reviews={reviews}/>
    //       </h3>
    //     </div>
    //   );
    // }
  return (
    <div className="review-header">
      <h3 id="reviews-overview">{reviews.reviewsList.length} reviews, sorted by &nbsp;
      <SortSelect reviews={reviews} sort={sort}/>
      </h3>
    </div>
  )
}
export default ReviewsHeader;

