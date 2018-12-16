/**
 * Created by summer on 2018/12/13.
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import { isEmpty } from 'lodash';
import api, { request } from '../../utils/request';
import './MyAccount.scss';

export default class MyAccount extends Component {
  state = {
    currIndex: 0,
    myAccount: []
  };

  componentDidMount() {
    this.fetchMyAccount();
  }

  handleIndexChange = (index) => {
    this.setState({
      currIndex: index
    })
  };

  fetchMyAccount = () => {
    request.post(api.GW_INTERACT_API, {serviceName: 'accountOverview'})
      .then(res => {
        console.log(res);
        this.setState({
          myAccount: res
        })
      })
      .catch(e => {
        console.log(e);
      })
  };

  render() {
    const { currIndex, myAccount } = this.state;
    return (
      <div className="my-account">
        <div className="account">
          {
            !isEmpty(myAccount) && myAccount.map((account, index) => {
              return (
                <div key={index} className={classnames('account__each', {active: currIndex === index})} onClick={(e) => {
                  e.preventDefault();
                  this.handleIndexChange(index);
                }}>
                  <p>{account.accountName}</p>
                  <p className="account__each__num">{account.balance}</p>
                </div>
              )
            })
          }
          {/*<div className={classnames('account__each', {active: currIndex === 0})} onClick={(e) => {*/}
            {/*e.preventDefault();*/}
            {/*this.handleIndexChange(0);*/}
          {/*}}>*/}
            {/*<p>金额</p>*/}
            {/*<p className="account__each__num">10</p>*/}
          {/*</div>*/}
          {/*<div className={classnames('account__each', {active: currIndex === 1})} onClick={(e) => {*/}
            {/*e.preventDefault();*/}
            {/*this.handleIndexChange(1);*/}
          {/*}}>*/}
            {/*<p>积分</p>*/}
            {/*<p className="account__each__num">100</p>*/}
          {/*</div>*/}
        </div>
      </div>
    )
  }
}
