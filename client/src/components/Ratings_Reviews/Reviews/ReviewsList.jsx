import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markReviewHelpful } from '../../../redux';
import { reportReview } from '../../../redux';
// ^ try combining the two imports above
  // import Reviews from './ReviewsList.jsx';
import Grid from '@mui/material/Grid';


const reviewStarRating = () => {
  Number((Math.round(avg * 4) / 4).toFixed(2));
}

const ImageMap = (photos) => {
  return (
    photos.map(photo => (
      <img>{photo}</img>
    )
    ))
};

{/* <Grid container spacing={2}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={4}>
    <Item>xs=4</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid> */}

const ReviewsList = () => {

  const reviews = useSelector(state => state.reviews);

  if (reviews.loading) {
    return (<h2>loading</h2>)
  } else if (reviews.error) {
    return <div>{reviews.error}</div>
  } else {
    return (
      <div className="reviews">
        {
          reviews.reviewsList.map((review, index) => {
            let time = review.date.split('T')[0];
            // *** if (index < 2) {
            return (
              <div key={review.review_id} className='review'>
                {
                  <div>
                    <h3 id="review-summary">{review.summary}</h3>
                    <h5 id="review-user-data">
                      {review.reviewer_name}
                      {' '}
                      {time}
                    </h5>
                    <p id="review-body">{review.body}</p>
                    {review.recommend ? <p id="review-recommend">✓ I RECOMMEND THIS PRODUCT</p> : null}
                    {/* {review.photos.map((photo) => {
                         <img>{photo.url}</img>
                      })} */}
                    <div className="review-helpful-report">
                      <h5>
                        Helpful?
                        <a ><u>Yes</u></a>
                        ({review.helpfulness}) |
                        <a ><u> Report</u></a>
                      </h5>
                    </div>
                  </div>
                }
              </div>
            )
            // *** }
          })
        }
      </div>

    )



  }
}

export default ReviewsList;