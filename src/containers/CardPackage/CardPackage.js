/**
 * Created by summer on 2018/12/11.
 */
import React, { Component } from 'react';
import BarItem from '../../components/BarItem/BarItem';
import CardItem from '../../components/CardItem/CardItem';

import './CardPackage.scss';

const CARD_LIST = [
    {
        name: '盖璞（上海）商业有限公司',
        describe: '挚蓝优享会员卡',
        url: 'gap.jpeg',
        logoUrl: 'gapLogo.jpeg'
    },
    {
        name: '全家FamilyMart',
        describe: '全家微会员',
        url: 'family.jpeg',
        logoUrl: 'familyLogo.jpeg'
    },
    {
        name: '绿茶餐饮连锁机构',
        describe: '会员卡',
        url: 'greenTea.jpeg',
        logoUrl: 'greenTeaLogo.jpeg'
    }
];

export default class CardPackage extends Component {

    handleLinkGo = (url) => {
        window.location.href = url;
    };

    render() {
        return (
            <div className="card-package-wrapper">
                {/*<div className="bar-wrap">*/}
                    {/*<BarItem*/}
                        {/*title={'卡包'}*/}
                        {/*iconPart={<img className="bar-wrap__icon" src={require('../../assets/icon/card_two_icon.jpg')} alt=""/>}*/}
                        {/*rightPart={<span>查看全部(9)</span>}*/}
                        {/*onLinkGo={() => {*/}
                          {/*this.handleLinkGo('/card/card-list')*/}
                        {/*}}*/}
                    {/*/>*/}
                    {/*<div className="bar-wrap__card">*/}
                        {/*{*/}
                            {/*CARD_LIST.map((card, index) => {*/}
                                {/*return (*/}
                                    {/*<CardItem*/}
                                        {/*key={index}*/}
                                        {/*name={card.name}*/}
                                        {/*bgStyle={{*/}
                                            {/*backgroundImage: `url(${require('../../assets/' + card.url)})`*/}
                                        {/*}}*/}
                                        {/*logoIcon={require('../../assets/'+ card.logoUrl)}*/}
                                        {/*describe={card.describe}*/}
                                    {/*/>*/}
                                {/*)*/}
                            {/*})*/}
                        {/*}*/}
                        {/*<div className="bar-wrap__card__item" style={{*/}
                            {/*backgroundImage: `url(${require('../../assets/gap.jpeg')})`*/}
                        {/*}}>*/}
                            {/*<img src={require('../../assets/gapLogo.jpeg')} alt=""/>*/}
                            {/*<div className="bar-wrap__card__item__shop">*/}
                                {/*<h4>盖璞（上海）商业有限公司</h4>*/}
                                {/*<p>挚蓝优享会员卡</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="bar-wrap__card__item" style={{*/}
                            {/*backgroundImage: `url(${require('../../assets/family.jpeg')})`*/}
                        {/*}}>*/}
                            {/*<img src={require('../../assets/familyLogo.jpeg')} alt=""/>*/}
                            {/*<div className="bar-wrap__card__item__shop">*/}
                                {/*<h4>全家FamilyMart</h4>*/}
                                {/*<p>全家微会员</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                        {/*<div className="bar-wrap__card__item" style={{*/}
                            {/*backgroundImage: `url(${require('../../assets/greenTea.jpeg')})`*/}
                        {/*}}>*/}
                            {/*<img src={require('../../assets/greenTeaLogo.jpeg')} alt=""/>*/}
                            {/*<div className="bar-wrap__card__item__shop">*/}
                                {/*<h4>绿茶餐饮连锁机构</h4>*/}
                                {/*<p>会员卡</p>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <div className="bar-list">
                    <BarItem
                      title={'卡包'}
                      customStyle={'bar-list__custom'}
                      hasBottom={true}
                      iconPart={<img className="bar-wrap__icon" src={require('../../assets/icon/card_two_icon.jpg')} alt=""/>}
                      // rightPart={<span>查看全部(9)</span>}
                      onLinkGo={() => {
                        this.handleLinkGo('/card/card-list')
                      }}
                    />
                    <BarItem
                        title={'我的票券'}
                        iconPart={<img className="bar-wrap__icon" src={require('../../assets/icon/coupon_icon.jpg')} alt=""/>}
                        customStyle={'bar-list__custom'}
                        onLinkGo={() => this.handleLinkGo('/card/coupon-list')}
                    />
                    {/*<BarItem*/}
                        {/*title={'朋友的优惠券'}*/}
                        {/*iconPart={<img className="bar-wrap__icon" src={require('../../assets/icon/discount_coupon.jpg')} alt=""/>}*/}
                        {/*customStyle={'bar-list__custom'}*/}
                    {/*/>*/}
                </div>
            </div>
        )
    }
}
