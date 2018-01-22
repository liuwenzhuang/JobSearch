import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import styles from './Home.less';

export default class Home extends Component {
  state = {

  };

  render() {
    const images = [
      {
        original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/3.jpg',
        thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/3.jpg',
      },
      {
        original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/2.jpg',
        thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/2.jpg'
      },
      {
        original: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/1.jpg',
        thumbnail: 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/1.jpg'
      }
    ];
    return (
      <div className={styles.home}>
        <ImageGallery
          items={images}
          showPlayButton={false}
          showFullscreenButton={false}
          showThumbnails={false}
        />
      </div>
    );
  }
}
