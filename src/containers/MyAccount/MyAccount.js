/**
 * Created by summer on 2018/12/13.
 */
import React, { Component } from 'react';
import classnames from 'classnames';
import './MyAccount.scss';

export default class MyAccount extends Component {
  state = {
    currIndex: 0
  };

  handleIndexChange = (index) => {
    this.setState({
      currIndex: index
    })
  };

  render() {
    const { currIndex } = this.state;
    return (
      <div className="my-account">
        <div className="account">
          <div className={classnames('account__each', {active: currIndex === 0})} onClick={(e) => {
            e.preventDefault();
            this.handleIndexChange(0);
          }}>
            <p>金额</p>
            <p className="account__each__num">10</p>
          </div>
          <div className={classnames('account__each', {active: currIndex === 1})} onClick={(e) => {
            e.preventDefault();
            this.handleIndexChange(1);
          }}>
            <p>积分</p>
            <p className="account__each__num">100</p>
          </div>
        </div>
      </div>
    )
  }
}
