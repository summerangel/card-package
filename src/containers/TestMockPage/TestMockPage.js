/**
 * Created by summer on 2018/12/19.
 */
import React, { Component } from 'react';

import './TestMockPage.scss';

export default class TestMockPage extends Component {
  state = {
    privateKey: 'pqbe211ctqfbqo8ks3p3o7b82p01dygd679xd6iwwi0kajcgvlwzyk3mgcm69w82',
    partner: '100000',
    requestBody: {
      "serviceName": "holdCoupon",
      "traceNo":"1544947488977",
      "openId":"523502690530099200",
      "scence":"DEPOSITE_DISCOUNT_CARD",
      "scenario":"INTERESTS_CARD_DISCOUNT",
      "amount": 40
    },
    version: 'v1.0',
  };

  render() {
    const { privateKey, partner, requestBody, version } = this.state;
    return (
      <div className="test-mock-page-wrapper">
        <div className="module">
          <label htmlFor="">SHA256签名</label>
          <input type="number" value={privateKey} onChange={this.handleMobileNo} />
        </div>
        <div className="module">
          <label htmlFor="">合伙人</label>
          <input type="number" value={partner} onChange={this.handleMobileNo} />
        </div>
        <div className="module">
          <label htmlFor="">请求体信息</label>
          <input type="number" value={requestBody} onChange={this.handleMobileNo} />
        </div>
        <div className="module">
          <label htmlFor="">版本</label>
          <input type="number" value={version} onChange={this.handleMobileNo} />
        </div>
      </div>
    )
  }
}
