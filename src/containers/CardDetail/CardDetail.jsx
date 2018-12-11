/**
 * Created by summer on 2018/12/11.
 */
import React, { Component } from 'react';
import BarItem from '../../components/BarItem';

import './CardDetail.scss';

const detailMock = {
  name: '绿茶餐饮连锁机构',
  describe: '会员卡',
  logoUrl: 'greenTeaLogo.jpeg',
  bgUrl: 'greenTea.jpeg',
  cardNo: '4720 0230 6258'
};

export default class CardDetail extends Component {
    render() {
        return (
            <div className="card-detail-wrapper">
                <div className="card" style={
                    {
                        backgroundImage: `url(${require('../../assets/' + detailMock.bgUrl)})`
                    }
                }>
                    <div className="card__mask"></div>
                    <div className="card__info">
                        <div className="card__info__shop">
                            <img src={require('../../assets/'+detailMock.logoUrl)} alt=""/>
                            <div>
                                <h4>{detailMock.name}</h4>
                                <p>{detailMock.describe}</p>
                            </div>
                        </div>
                        <img src={require('../../assets/erweima.jpg')} alt="二维码"/>
                    </div>
                    <div className="card__info__no">{detailMock.cardNo}</div>
                </div>
                <div className="point-coupon">
                    <div className="point-coupon__each">
                        <p>积分</p>
                        <p className="point-coupon__each__num">5</p>
                    </div>
                    <div className="verticle-line"></div>
                    <div className="point-coupon__each">
                        <p>优惠券</p>
                        <p className="point-coupon__each__num">查看</p>
                    </div>
                </div>
                <BarItem
                    title="会员中心"
                    rightPart={<span>更多服务</span>}
                    hasBottom={true}
                />
                <BarItem
                    title="更多优惠券"
                    rightPart={<span>快来兑换啊</span>}
                    hasBottom={true}
                />
                <BarItem
                    title="会员卡详情"
                    hasBottom={true}
                />
                <BarItem
                    title="试用门店"
                    hasBottom={true}
                />
                <BarItem
                    title="公众号"
                    hasBottom={true}
                />
            </div>
        )
    }
}