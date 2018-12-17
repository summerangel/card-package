/**
 * Created by summer on 2018/12/13.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './CouponItem.scss';

export default class CouponItem extends Component {
  static propTypes = {
    bgStyle: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.element,
      PropTypes.object
    ]),
    logoIcon: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.object,
      PropTypes.string
    ]),
    name: PropTypes.string,
    amount: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    validdate: PropTypes.string,
    onClickGo: PropTypes.func
  };

  static defaultProps = {
    bgStyle: {
      backgroundImage: `url(${require('../../assets/gap.jpeg')})`
    },
    logoIcon: require('../../assets/gapLogo.jpeg'),
    name: '',
    amount: 0,
    validdate: '',
    onClickGo: ()=>{}
  };

  render() {
    const { name, amount, validdate, onClickGo } = this.props;
    return (
      <div className="coupon-item" onClick={(e)=>{
        e.preventDefault();
        onClickGo();
      }}>
        <div className="coupon-item__money">￥{amount}</div>
        <div className="coupon-item__info">
          <h4>{name}</h4>
          <p>有效期：{validdate}</p>
          <p>详细信息</p>
        </div>
      </div>
    )
  }
}
