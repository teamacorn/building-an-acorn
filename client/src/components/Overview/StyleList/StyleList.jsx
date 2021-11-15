import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import Style from './Style.jsx';
import { addToCart } from '../../../redux';
import SelectSize from './SelectSize.jsx';
import { updateCurrentStyle } from '../../../redux';
import Grid from '@mui/material/Grid';
import { FacebookShareButton, PinterestShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, PinterestIcon, TwitterIcon } from 'react-share'
import Rating from '@mui/material/Rating';
import { CgChevronRight } from 'react-icons/cg';


const StyleList = () => {
  const styleList = useSelector(state => state.styleList);
  const currentProduct = useSelector(state => state.currentProduct)
  const currentStyleId = useSelector(state => state.styleId.currentStyleId)
  const currentProductRating = useSelector(state => state.ratings)
  const reviews = useSelector(state => state.reviews)
  const dispatch = useDispatch();
  const [styleId, setStyleId] = useState(NaN)


  const handleClick = (event) => {
    dispatch(updateCurrentStyle(parseInt(event.target.id)))
  }

  if (styleList.loading || currentProduct.loading || styleList.styles.length === 0 || isNaN(currentStyleId) || currentProductRating.loading || (currentProduct.product.category === '') || (styleList.styles.filter(style => (parseInt(style.style_id) === currentStyleId))[0] === undefined) || reviews.loading) {
    return (<h2></h2>)
  } else if (styleList.error) {
    return <div>{styleList.error}</div>
  } else {
    return (
      <div className='styleList'>
        <Rating style={{marginTop: '3%'}} name="quarter-rating-read" value={currentProductRating.averageStarRating} precision={0.25} readOnly />
        <a href="#reviews" style={{position: 'relative', top: '-6px', left: '5px'}}><span>Read all {reviews.reviewsList.length} reviews</span></a>
        <span style={{display: 'block', marginTop:'3%', textTransform: 'uppercase', opacity: '80%'}}>{currentProduct.product.category}</span>
        <h1 style={{fontSize: "25px", marginTop: '10px'}}>{currentProduct.product.name}</h1>

        {
          styleList.styles.map((style, index) => {
            if(style.style_id === currentStyleId) {
              if (style.sale_price === null) {
                return (
                  <div key={style.style_id} className='prices'>
                    <span className='price'>${style.original_price}</span>
                  </div>
                )
              } else {
                return (
                  <div key={style.style_id} className='prices' style={{marginBottom: '16px'}}>
                    <span className='original-price price'>${style.original_price}</span>
                    <span className='sale-price price' style={{paddingLeft: '5px'}}>${style.sale_price}</span>
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
                  <div className='styleNameDiv' style={{marginTop: '16px'}}><span className='boldedStyle'>Style ></span> <span className='greyStyleName'>{style.name}</span></div>
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
              currentStyleId = {currentStyleId}
            />
            </Grid>
          ))
        }
        </Grid>

      }
      <SelectSize />
      <div className='icons'>
        <div className='FacebookIcon'>
        <FacebookShareButton
        url={styleList.styles.filter(style => (parseInt(style.style_id) === currentStyleId))[0].photos[0].thumbnail_url}
        quote={"Checkout this awesome product!!"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
        </div>
        <div className='TwitterIcon'>
        <TwitterShareButton
        // url={styleList.styles.filter(style => (parseInt(style.style_id) === currentStyleId))[0].photos[0].thumbnail_url}
        url={'https://twitter.com/TeamAcornFEC'}
        title={"Checkout this awesome project!!"}
      >
        <TwitterIcon size={32} round/>
      </TwitterShareButton>
        </div>
        <div className='PinterestIcon'>
        <PinterestShareButton
        url={styleList.styles.filter(style => (parseInt(style.style_id) === currentStyleId))[0].photos[0].thumbnail_url}
        media={styleList.styles.filter(style => (parseInt(style.style_id) === currentStyleId))[0].photos[0].thumbnail_url}
      >
        <PinterestIcon size={32} round/>
      </PinterestShareButton>
        </div>
      </div>
      </div>
    )
  }
  }

export default StyleList;