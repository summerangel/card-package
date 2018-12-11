/**
 * Created by summer on 2018/12/10.
 */
import React, { Component } from 'react';
import { Button } from 'react-weui';
import './Demo.scss';

export default class Demo extends Component {
    render() {
        return (
            <div className="demo-wrapper">
                <Button>Hello wechat</Button>
            </div>
        )
    }
}