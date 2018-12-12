/**
 * Created by summer on 2018/12/11.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './CardItem.scss';

export default class CardItem extends Component {
    static propTypes = {
        bgStyle: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.element,
            PropTypes.object
        ]),
        logoIcon: PropTypes.oneOfType([
            PropTypes.node,
            PropTypes.object,
            PropTypes.string
        ]),
        name: PropTypes.string,
        describe: PropTypes.string,
        onClickGo: PropTypes.func
    };

    static defaultProps = {
        bgStyle: {
            backgroundImage: `url(${require('../../assets/gap.jpeg')})`
        },
        logoIcon: require('../../assets/gapLogo.jpeg'),
        name: '',
        describe: '',
        onClickGo: ()=>{}
    };

    render() {
        const { bgStyle, logoIcon, name, describe, onClickGo } = this.props;
        return (
            <div className="card-item" style={bgStyle} onClick={(e)=>{
                e.preventDefault();
                onClickGo();
            }}>
                <img src={logoIcon} alt=""/>
                <div className="card-item__shop">
                    <h4>{name}</h4>
                    <p>{describe}</p>
                </div>
            </div>
        )
    }
}