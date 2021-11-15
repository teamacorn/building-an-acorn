import React from 'react';
import StyleList from './StyleList/StyleList.jsx';
import MyGallery from './ImageGallery/ImageGallery.jsx'
import Description from './Description/Description.jsx'
import Features from './Description/Features.jsx'
import Grid from '@mui/material/Grid';


const Overview = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <MyGallery />
        </Grid>
        <Grid item xs={4}>
          <StyleList />
        </Grid>
      </Grid>
      <div className='descriptionDiv'>
        <div className='descriptionText'>
          <Description />
        </div>
        <div className='featureText'>
          <Features />
        </div>
        <div className='isSelectedStyle'>
        </div>
      </div>
    </div>
  )
}

export default Overview
