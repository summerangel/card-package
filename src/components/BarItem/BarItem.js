/**
 * Created by summer on 2018/12/10.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './BarItem.scss';

export default class BarItem extends Component {
    static propTypes = {
        title: PropTypes.string,
        iconPart: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.node
        ]),
        rightPart: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.node
        ]),
        customStyle: PropTypes.string,
        hasBottom: PropTypes.bool,
        onLinkGo: PropTypes.func
    };
    static defaultProps = {
        title: '卡包',
        iconPart: null,
        rightPart: null,
        hasBottom: false,
        onLinkGo: ()=>{}
    };
    render() {
        const { title, iconPart, hasBottom, rightPart, customStyle, onLinkGo } = this.props;
        return (
            <div className={classnames('bar-item', customStyle, {'border-bottom': hasBottom})} onClick={(e)=>{
                e.preventDefault();
                onLinkGo();
            }}>
                <div className="bar-item__left">
                    {iconPart}
                    <span>{title}</span>
                </div>
                <div className="bar-item__right">{rightPart}</div>
            </div>
        )
    }
}