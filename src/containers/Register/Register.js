/**
 * Created by summer on 2018/12/16.
 */
import React, { Component } from 'react';
import api, { request } from '../../utils/request';
import PhoneIcon from '../../components/Icon/PhoneIcon';
import CodeIcon from '../../components/Icon/CodeIcon';

import './Register.scss';

export default class Register extends Component {
  state = {
    mobileNo: '',
    verifyCodeValue: '',
    maxWaiting: 60,
    verifyCodeId: ''
  };

  handleMobileNo = (e) => {
    e.preventDefault();
    const value = e.target.value;
    this.setState({
      mobileNo: value
    })
  };

  handleCodeValue = (e) => {
    e.preventDefault();
    const value = e.target.value;
    this.setState({
      verifyCodeValue: value
    })
  };

  sendVerifyCode = () => {
    if (this.state.maxWaiting == 60) {
      const params = {
        serviceName: 'sendVerifyCode',
        mobileNo: this.state.mobileNo,
        bizCode: 'REGISTRATION'
      };
      request
        .post(api.GW_INTERACT_API, params)
        .then(res => {
          if (res) {
            this.setState({
              verifyCodeId: res.verifyCodeId
            });
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
    this.waitingInterval = setInterval(() => {
      if (this.state.maxWaiting > 0) {
        this.setState({
          maxWaiting: --this.state.maxWaiting
        })
      } else {
        clearInterval(this.waitingInterval);
        this.setState({
          maxWaiting: 60
        })
      }
    }, 1000);
  };

  submitRegister = () => {
    const params = {
      serviceName: 'signup',
      identityValue: this.state.mobileNo,
      verifyCodeId: this.state.verifyCodeId,
      verifyCodeValue: this.state.verifyCodeValue
    };
    request
      .post(api.GW_INTERACT_API, params, {allData: 1})
      .then(res => {
        if (res.responseCode === '000') {
          alert('注册成功');
          window.location.href = '/card/my';
        } else if (res.responseCode === 'mbr00') {
          this.login();
        }
      })
      .catch(e => {
        if (e.responseCode === 'mbr00') {
          this.login();
        }
        console.log(e);
      });
  };

  login = () => {
    const params = {
      serviceName: 'login',
      identityValue: this.state.mobileNo,
      verifyCodeId: this.state.verifyCodeId,
      verifyCodeValue: this.state.verifyCodeValue
    };
    request
      .post(api.GW_INTERACT_API, params)
      .then(res => {
        if (res) {
          window.location.href = '/card/my';
        }
      })
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="mock-page-wrapper">
        <div className="welcome">
          <h3>您好</h3>
          <p>欢迎使用</p>
        </div>
        <div className="module">
          <PhoneIcon />
          <input type="number" placeholder="请输入手机号" value={this.state.mobileNo} onChange={this.handleMobileNo} />
        </div>
        <div className="code-wrap">
          <div className="code-wrap__input">
            <CodeIcon />
            <input type="number" placeholder="请输入验证码" value={this.state.verifyCodeValue} onChange={this.handleCodeValue} />
          </div>
          <div className="code-wrap__code">
            <span>|</span>
            {
              (this.state.maxWaiting > 0 && this.state.maxWaiting != 60) ?
                <span className="c-bbb">{this.state.maxWaiting}s</span>
                :
                <span onClick={e => {
                  e.preventDefault();
                  this.sendVerifyCode();
                }
                }>获取验证码</span>
            }
          </div>
        </div>
        <div className="register-wrap">
          <div className="bottom-btn" onClick={e => {
            e.preventDefault();
            this.submitRegister();
          }}>提交</div>
        </div>
      </div>
    )
  }
}
