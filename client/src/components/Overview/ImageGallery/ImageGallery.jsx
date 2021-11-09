import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import ImageGallery from 'react-image-gallery';

// const images = [
//   {
//     original: 'https://picsum.photos/id/1018/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1018/250/150/',
//   },
//   {
//     original: 'https://picsum.photos/id/1015/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1015/250/150/',
//   },
//   {
//     original: 'https://picsum.photos/id/1019/1000/600/',
//     thumbnail: 'https://picsum.photos/id/1019/250/150/',
//   },
// ];

const MyGallery = () => {
  const styleList = useSelector(state => state.styleList);
  const currentStyleId = useSelector(state => state.styleId.currentStyleId);
  const [currentImages, setCurrentImages] = useState([])

    if (styleList.loading || currentStyleId.loading) {
      return (<h2>Loading</h2>)
    } else if (styleList.error) {
      return <div>{styleList.error}</div>
    } else {
      return (
        <div className='image-gallery-div'>
          {
            styleList.styles.map(style => {
              if (style.style_id === currentStyleId) {
                let images = style.photos.map(obj => {
                  return {
                    thumbnail: obj['thumbnail_url'],
                    original: obj['url']
                  }
                })
                return (
                  // <div key={style.style_id}>
                  <ImageGallery items={images} thumbnailPosition = 'left' showGalleryPlayButton = {false} showPlayButton = {false} useBrowserFullscreen={false} key={style.style_id}/>
                  // </div>
                )
              }
            })
          }
        </div>
      )
    }
  }
export default MyGallery
