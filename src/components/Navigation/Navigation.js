import React, { PureComponent, createElement } from 'react';
import PropTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';
import classNames from 'classnames';
import styles from './Navigation.less';
import {Col, Row} from "antd";

export default class Navigation extends PureComponent {

  render() {
    const {
      title, logo, action, content, extraContent, className, bgImg,
    } = this.props;
    let clsString = classNames(styles.pageHeader, className);
    bgImg ? clsString = classNames(clsString, styles.bgImg) : undefined;

    return (
      <div className={clsString}>
        <div className={styles.container}>
          <Row gutter={24}>
            <Col span={16} offset={4}>
              <div style={{ textAlign: 'center', padding: '150px 0'}}>
                <h1 style={{ fontSize: '80px', marginTop: '0' }}>测试header</h1>
                <span>测试subheading</span>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
