/**
 * Created by summer on 2018/12/10.
 */
import React, { Component } from 'react';
import BarItem from '../../components/BarItem/BarItem';
import api, { request } from '../../utils/request';
import avatar from '../../assets/avatar.jpeg';
import './My.scss';

export default class My extends Component {
    state = {
      memberInfo: {}
    };

    componentDidMount() {
      this.fetchMemberOverview();
    }

    handleCardLink = (url) => {
        window.location.href = url;
    };

    fetchMemberOverview = () => {
      request.post(api.GW_INTERACT_API, {serviceName: 'memberOverview'})
        .then(res => {
          console.log(res);
          if (res) {
            this.setState({
              memberInfo: res
            })
          }
        })
        .catch(e => {
          console.log(e);
        })
    };

    logout = () => {
      request.post(api.GW_INTERACT_API, {serviceName: 'logout'}, {allData: 1})
        .then(res => {
          if (res) {
            alert('登出成功');
            window.location.href = '/card/register';
          }
        })
        .catch(e => {
          if (e.responseCode === '000') {
            alert('登出成功');
            window.location.href = '/card/register';
          }
          console.log(e);
        })
    };

    render() {
        return (
            <div className="my-wrapper">
                <div className="account">
                    <div className="account__info">
                        <img src={this.state.memberInfo.imgUrl} alt="头像"/>
                        <div className="account__info__name">
                            <h5>{this.state.memberInfo.nickName}</h5>
                            {/*<p>账号：paopao123</p>*/}
                            <p>此人很懒，啥都没留下</p>
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
                        onLinkGo={() => this.handleCardLink('/card/my-account')}
                        iconPart={<img className="bar-wrap__icon" src={require('../../assets/icon/card_icon.jpg')} alt=""/>}
                        hasBottom={true}
                    />
                  <BarItem
                    title={'卡包'}
                    onLinkGo={() => this.handleCardLink('/card/card-package')}
                    iconPart={<img className="bar-wrap__icon" src={require('../../assets/icon/card_icon.jpg')} alt=""/>}
                  />
                </div>
                <div className="btn-wrap">
                  <div className="bottom-btn" onClick={e => {
                    e.preventDefault();
                    this.logout();
                  }}>登出</div>
                </div>
            </div>
        )
    }
}
