import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReviewImages from './ReviewImages.jsx';
import ReviewStars from './ReviewStars.jsx';
import { ShowMoreReviews, Helpful, Report } from './ReviewButtons.jsx'
import { fetchReviews } from '../../../redux'

const Reviews = ({numOfReview, currentSort}) => {

  const reviewList = useSelector(state => state.reviews); // list of review sorted by relevant

  const dispatch = useDispatch();
  const currentProduct = useSelector(state => state.currentProduct);
  const currentRating = useSelector(state => state.currentRating.currentRating);

  let filtered = []

  if (Object.values(currentRating).filter(item => item === false).length === Object.values(currentRating).length) {
    filtered = reviewList.reviewsList;
  } else {
    for (const [key, value] of Object.entries(currentRating)) {
      let list = reviewList.reviewsList
      if (value === true) {
      for(var i=0; i<list.length; i++) {
          if (list[i].rating === parseInt(key)) {
            filtered.push(list[i])
          }
        }
      }
    }
  }


  if (currentProduct.loading || reviewList.loading || reviewList.reviewsList === undefined) {
    return (<div></div>)
  } else if (currentProduct.error) {
    return (<div>{currentProduct.error}</div>)
  } else {
  return (
    filtered.slice(0, numOfReview).map((review, index) => {
        let count = index+1;
        let reviewId = review.review_id;
        let rating = review.rating;
        let username = review.reviewer_name;
        let dateString = review.date.split('T')[0].split('-');
        let date = dateFormatter(review.date);
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
            {/* {
              body.length <= 250 ? <div id="{body}">{body}</div> :
              <div>
                <div id="{body}">{body.slice(0, 250)}</div>
                <button id="show-more-body">Show More</button>
                </div>
            } */}
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
                    <b>Response from seller </b>
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

function dateFormatter(dateString) {
  // dateString "2021-03-07T00:00:00.000Z"
  // convert to Month DD, YYYY
  let year = dateString.substring(0,4);
  let month = dateString.substring(5,7);
  let day = dateString.substring(8, 10);

  switch(month) {
    case '01':
      return `January ${day}, ${year}`;
    case '02':
      return `February ${day}, ${year}`;
    case '03':
      return `March ${day}, ${year}`;
    case '04':
      return `April ${day}, ${year}`;
    case '05':
      return `May ${day}, ${year}`;
    case '06':
      return `June ${day}, ${year}`;
    case '07':
      return `July ${day}, ${year}`;
    case '08':
      return `August ${day}, ${year}`;
    case '09':
      return `September ${day}, ${year}`;
    case '10':
      return `October ${day}, ${year}`;
    case '11':
      return `November ${day}, ${year}`;
    case '12':
      return `December ${day}, ${year}`;
  }
}

export default Reviews;