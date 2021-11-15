import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SortSelect } from './SortSelect.jsx';

const ReviewsHeader = ({sort}) => {
  const reviews = useSelector(state => state.reviews);

    if (reviews.loading) {
      return(<div></div>)
    } else if (reviews.error) {
      return (<div>{reviews.error}</div>)
    } else {
      return (
        <div className="review-header">
          <h3 id="reviews-overview">{reviews.reviewsList.length} reviews, sorted by &nbsp;
          <SortSelect sort={sort}/>
          </h3>
        </div>
      )
    }
}
export default ReviewsHeader;

