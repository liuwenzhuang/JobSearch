import React, { Component } from 'react';
import {Icon, Button} from 'antd'
import ImageGallery from 'react-image-gallery';
import styles from './Home.less';
import 'react-image-gallery/styles/css/image-gallery-no-icon.css';

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
          showBullets
          renderLeftNav={(onClick) => {
            return <Icon type="left" className={styles.imageGalleryCustomLeftNav} onClick={onClick} />;
          }}
          renderRightNav={(onClick) => {
            return <Icon type="right" className={styles.imageGalleryCustomRightNav} onClick={onClick} />;
          }}
        />
      </div>
    );
  }
}
