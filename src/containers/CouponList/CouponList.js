/**
 * Created by summer on 2018/12/11.
 */
import React, { Component } from 'react';
import classnames from 'classnames';
// import CardItem from '../../components/CardItem/CardItem';
import CouponItem from '../../components/CouponItem/CouponItem';

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
    currIndex: 0
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
    const { currIndex } = this.state;
    return (
      <div className="coupon-list-wrapper">
        <div className="status">
                  <span className={classnames('status__each', {active: currIndex === 0})} onClick={(e) => {
                    e.preventDefault();
                    this.handleStatusChange(0);
                  }}>未使用(0)</span>
          <span className={classnames('status__each', {active: currIndex === 1})} onClick={(e) => {
            e.preventDefault();
            this.handleStatusChange(1);
          }}>使用记录(35)</span>
        </div>
        <div className="card">
          {
            CARD_LIST.map((card, index) => {
              return (
                <CouponItem
                  key={index}
                  name={card.name}
                  validdate={card.validdate}
                  onClickGo={()=>{
                    this.handleClickGo(card.cardId);
                  }}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}