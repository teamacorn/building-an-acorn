import React from 'react';
import Reviews from './Reviews.jsx';


const ReviewImages = ({ photos }) => (
    photos.map((photo, index) => (
      <img id="{photo.url}" key={index} src={photo.url} />
    ))
)

export default ReviewImages;


