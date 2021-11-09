import React from 'react';
import StyleList from './StyleList/StyleList.jsx';
import MyGallery from './ImageGallery/ImageGallery.jsx'
import Grid from '@mui/material/Grid';

const Overview = () => {
  return (
    <div>
    {/* <MyGallery />
    <StyleList /> */}
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <MyGallery />
        </Grid>
        <Grid item xs={4}>
          <StyleList />
        </Grid>
      </Grid>
    </div>
  )
}

export default Overview