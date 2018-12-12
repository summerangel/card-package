/**
 * Created by summer on 2018/12/10.
 */
import React, { Component } from 'react';
import BarItem from '../../components/BarItem/BarItem';
import avatar from '../../assets/avatar.jpeg';
import './My.scss';

export default class My extends Component {

    handleCardLink = () => {
        window.location.href = '/card/card-package';
    };

    render() {
        return (
            <div className="my-wrapper">
                <div className="account">
                    <div className="account__info">
                        <img src={avatar} alt="头像"/>
                        <div className="account__info__name">
                            <h5>泡泡同学</h5>
                            <p>微信号：paopao123</p>
                        </div>
                    </div>
                    <div className="account__go">
                        <img src={require('../../assets/erweima.jpg')} alt="二维码"/>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="bar-wrap">
                    <BarItem
                        title={'账户'}
                        onLinkGo={this.handleCardLink}
                        iconPart={<img className="bar-wrap__icon" src={require('../../assets/icon/card_icon.jpg')} alt=""/>}
                        hasBottom={true}
                    />
                  <BarItem
                    title={'卡包'}
                    onLinkGo={this.handleCardLink}
                    iconPart={<img className="bar-wrap__icon" src={require('../../assets/icon/card_icon.jpg')} alt=""/>}
                  />
                </div>
            </div>
        )
    }
}
