/**
 * Created by summer on 2018/12/11.
 */
import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import classnames from 'classnames';
import CouponItem from '../../components/CouponItem/CouponItem';
import api, { request } from '../../utils/request';

import './CouponList.scss';

const CARD_LIST = [
  {
    cardId: 1,
    name: '盖璞（上海）商业有限公司',
    describe: '挚蓝优享会员卡',
    validdate: '2018.12.13',
    url: 'gap.jpeg',
    logoUrl: 'gapLogo.jpeg'
  },
  {
    cardId: 2,
    name: '全家FamilyMart',
    describe: '全家微会员',
    validdate: '2018.12.14',
    url: 'family.jpeg',
    logoUrl: 'familyLogo.jpeg'
  },
  {
    cardId: 3,
    name: '绿茶餐饮连锁机构',
    describe: '会员卡',
    validdate: '2018.12.15',
    url: 'greenTea.jpeg',
    logoUrl: 'greenTeaLogo.jpeg'
  },
  {
    cardId: 4,
    name: '桂满陇',
    describe: '会员卡',
    validdate: '2018.12.16',
    url: 'guimanlong.jpeg',
    logoUrl: 'guimanlongLogo.jpeg'
  },
  {
    cardId: 5,
    name: 'innisfree',
    describe: '悦诗风吟会员卡',
    validdate: '2018.12.17',
    url: 'innisfree.jpeg',
    logoUrl: 'innisfreeLogo.jpeg'
  },
  {
    cardId: 6,
    name: '南京大排档',
    describe: '会员卡',
    validdate: '2018.12.18',
    url: 'nanjing.jpeg',
    logoUrl: 'nanjingLogo.jpeg'
  }
];

export default class CardList extends Component {
  state = {
    currIndex: 0,
    couponList: [],
    holdList: [],
    writeOffList: []
  };

  componentDidMount() {
    this.fetchCouponList();
  };

  fetchCouponList = () => {
    request.post(api.GW_INTERACT_API, {serviceName: 'couponList'})
      .then(res => {
        if (!isEmpty(res)) {
          console.log(res);
          this.setState({
            couponList: res,
            holdList: res.HOLD,
            writeOffList: res.WRITEOFF
          })
        }
      })
      .catch(e => {
        console.log(e);
      })
  };

  handleClickGo = (id) => {
    window.location.href = `/card/card-detail/${id}`;
  };

  handleStatusChange = (index) => {
    this.setState({
      currIndex: index
    })
  };

  render() {
    const { currIndex, holdList, writeOffList } = this.state;
    return (
      <div className="coupon-list-wrapper">
        <div className="status">
                  <span className={classnames('status__each', {active: currIndex === 0})} onClick={(e) => {
                    e.preventDefault();
                    this.handleStatusChange(0);
                  }}>未使用({holdList.length})</span>
          <span className={classnames('status__each', {active: currIndex === 1})} onClick={(e) => {
            e.preventDefault();
            this.handleStatusChange(1);
          }}>使用记录({writeOffList.length})</span>
        </div>
        {
          currIndex === 0 &&
          <div className="card">
            {
              !isEmpty(holdList) && holdList.map((card, index) => {
                return (
                  <CouponItem
                    key={index}
                    name={card.issuerName}
                    amount={card.amount}
                    validdate={`${card.validateBeginDate}~${card.validateEndDate}`}
                    onClickGo={()=>{
                      this.handleClickGo(card.couponNo);
                    }}
                  />
                )
              })
            }
          </div>
        }
        {
          currIndex === 1 &&
          <div className="card">
            {
              !isEmpty(writeOffList) && writeOffList.map((card, index) => {
                return (
                  <CouponItem
                    key={index}
                    name={card.issuerName}
                    amount={card.amount}
                    validdate={`${card.validateBeginDate}~${card.validateEndDate}`}
                    onClickGo={()=>{
                      this.handleClickGo(card.couponNo);
                    }}
                  />
                )
              })
            }
          </div>
        }
      </div>
    )
  }
}
