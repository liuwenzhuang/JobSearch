import React, {Component} from 'react';
import {Icon, Button} from 'antd'
import ImageGallery from 'react-image-gallery';
import styles from './Home.less';
import 'react-image-gallery/styles/css/image-gallery-no-icon.css';
import PageHeader from "../../components/PageHeader/index";
import Navigation from "../../components/Navigation/Navigation";

export default class Home extends Component {
  state = {};

  render() {

    const content = (
      <div className="imgContainer">
        <img style={{width: '100%'}} alt="" src="https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"/>
      </div>
    );
    return (
      <Navigation
        content={content}
        bgImg
      />);
  }
}
