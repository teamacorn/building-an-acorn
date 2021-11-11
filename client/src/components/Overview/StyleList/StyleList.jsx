import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import Style from './Style.jsx';
import { addToCart } from '../../../redux';
import SelectSize from './SelectSize.jsx';
import { updateCurrentStyle } from '../../../redux';
import Grid from '@mui/material/Grid';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, PinterestIcon, TwitterIcon } from 'react-share'
import Rating from '@mui/material/Rating';

const StyleList = () => {
  const styleList = useSelector(state => state.styleList);
  const currentProduct = useSelector(state => state.currentProduct)
  const currentStyleId = useSelector(state => state.styleId.currentStyleId)
  const currentProductRating = useSelector(state => state.ratings)
  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(updateCurrentStyle(parseInt(event.target.id)))
  }

  if (styleList.loading || currentProduct.loading || styleList.styles.length === 0 || isNaN(currentStyleId) || currentProductRating.loading) {
    return (<h2></h2>)
  } else if (styleList.error) {
    return <div>{styleList.error}</div>
  } else {
    return (
      <div className='styleList'>
        <Rating name="quarter-rating-read" value={currentProductRating.averageStarRating} precision={0.25} readOnly />
        <h3>{currentProduct.product.category}</h3>
        <h1>{currentProduct.product.name}</h1>

        {
          styleList.styles.map((style, index) => {
            if(style.style_id === currentStyleId) {
              if (style.sale_price === null) {
                return (
                  <div key={style.style_id} className='prices'>
                    <p className='price'>${style.original_price}</p>
                  </div>
                )
              } else {
                return (
                  <div key={style.style_id} className='prices'>
                    <p className='sale-price price'>${style.sale_price}</p>
                    <p className='original-price price'>${style.original_price}</p>
                  </div>
                )
              }
            }
          })
        }
        {
          styleList.styles.map(style => {
            if (style.style_id === currentStyleId) {
              return (
                <div key={style.style_id}>
                  <p>Style {'>'} {style.name}</p>
                </div>
              )
            }
          })
        }
      {
        <Grid container spacing={1} className='style-container'>
        {
          styleList.styles.map((style) => (
            <Grid key={style.style_id} item md={3}>
            <Style
              style={style}
              id={style.style_id}
              key={style.style_id}
              handleClick = {handleClick}
            />
            </Grid>
          ))
        }
        </Grid>

      }
      <SelectSize />
      <div className='icons'>
       <FacebookShareButton
        url={styleList.styles.filter(style => (parseInt(style.style_id) === currentStyleId))[0].photos[0].thumbnail_url}
        quote={"Checkout this awesome product!!"}
      >
        <FacebookIcon size={32} round className='FacebookIcon'/>
      </FacebookShareButton>

      <TwitterShareButton
        // url={styleList.styles.filter(style => (parseInt(style.style_id) === currentStyleId))[0].photos[0].thumbnail_url}
        url={'https://twitter.com/TeamAcornFEC'}
        title={"Checkout this awesome project!!"}
      >
        <TwitterIcon size={32} round className='TwitterIcon'/>
      </TwitterShareButton>

      <PinterestShareButton
        url={styleList.styles.filter(style => (parseInt(style.style_id) === currentStyleId))[0].photos[0].thumbnail_url}
        media={styleList.styles.filter(style => (parseInt(style.style_id) === currentStyleId))[0].photos[0].thumbnail_url}
      >
        <PinterestIcon size={32} round className='PinterestIcon'/>
      </PinterestShareButton>
      </div>
      </div>
    )
  }
  }

export default StyleList;