import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReviewImages from './ReviewImages.jsx';
import ReviewStars from './ReviewStars.jsx';
import { ShowMoreReviews, Helpful, Report } from './ReviewButtons.jsx'


const Reviews = ({numOfReview, currentSort}) => {

  const reviews = useSelector(state => state.reviews.reviewsList);

  const [sortOptions, setSortOptions] = useState(reviews);

  const helpfulSort = reviews.sort(((a, b) => b.helpfulness - a.helpfulness));

  const dateSort = reviews.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    } else if (b.date > a.date) {
      return 1
    } else {
      return 0;
    }
  });


  if (currentSort === 'helpful') {
    setSortOptions(helpfulSort);
  } else if (currentSort === 'newest') {
    setSortOptions(dateSort);
  } else {
    setSortOptions(reviews);
  }
// "2021-09-20T00:00:00.000Z"

  if(!reviews) {
    return null;
  } else {
  return (
    sortOptions.slice(0, numOfReview).map((review, index) => {
        let count = index+1;
        let reviewId = review.review_id;
        let rating = review.rating;
        let username = review.reviewer_name;
        let date = review.date.split('T')[0];
        let summary = review.summary;
        let body = review.body;
        let recommend = review.recommend;
        let response = review.response;
        let helpfulness = review.helpfulness;
        let photos = review.photos;
        return (
          <div className="review" key={reviewId}>
            <ReviewStars rating={rating}/>
            <span id="username-date">
              <p id="{username}">{username}</p>
              <p id="{date}">{date}</p>
            </span>
            <div id="{summary}">{summary}</div>
            <div id="{body}">{body}</div>
            <div id="{user-rec}">
              {
                !recommend ? null :
                  <p id="{user-recommend}">✓ I RECOMMEND THIS PRODUCT</p>
              }
            </div>
            <div>
              {
                !response ? null :
                  <div>
                    <b>Response: </b>
                    <p>{review.response}</p>
                  </div>
              }
            </div>
            <div id="{review-photos}">
              {
                !photos ? null :
                  <ReviewImages photos={photos} />
              }
            </div>
            <div id="helpful-button">
              {
                <Helpful helpfulness={helpfulness} id={reviewId}/>
              }
            </div>
            <div id="report-button">
              {
                <Report id={reviewId}/>
              }
            </div>
          </div>
        )
    })
  )
}
}


export default Reviews;