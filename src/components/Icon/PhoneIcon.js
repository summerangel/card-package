/**
 * Created by summer on 2018/12/16.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class PhoneIcon extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
  };
  static defaultProps = {
    color: '#BBBBBB',
    width: 24,
    height: 24,
    style: {},
    className: '',
  };

  render() {
    const { color, width, height, style, className } = this.props;
    return (
      <span className={className} style={style}>
        <svg
          width={`${width}px`}
          height={`${height}px`}
          viewBox={`0 0 ${width} ${height}`}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          style={{ verticalAlign: 'middle' }}
        >
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="登录页1-copy" transform="translate(-30.000000, -250.000000)">
                  <g id="手机icon" transform="translate(30.000000, 250.000000)">
                      <rect id="Rectangle-5" opacity="0.400000006" x="0" y="0" width="24" height="24"></rect>
                      <g id="Group-3" transform="translate(5.000000, 2.000000)">
                          <rect id="Rectangle-16" stroke="#BBBBBB" x="0.5" y="0.5" width="14" height="20" rx="2"></rect>
                          <path d="M0.5,14.5 L14.5,14.5" id="Line-6" stroke="#BBBBBB" strokeLinecap="square"></path>
                          <circle id="Oval-5" fill="#BBBBBB" cx="7.5" cy="17.5" r="1.5"></circle>
                      </g>
                  </g>
              </g>
          </g>
      </svg>
      </span>
    );
  }
}
