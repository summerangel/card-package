/**
 * Created by summer on 2018/12/16.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class CodeIcon extends React.PureComponent {
  static propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    style: PropTypes.object,
  };
  static defaultProps = {
    color: '#D8D8D8',
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
            <g id="登录页1-copy" transform="translate(-30.000000, -316.000000)">
            <g id="Group-4" transform="translate(30.000000, 316.000000)">
                <rect id="Rectangle-56" fill={color} opacity="0" x="0" y="0" width={`${width}px`} height={`${height}px`}></rect>
                <g id="Group-3" transform="translate(5.000000, 2.000000)">
                    <g id="Group" stroke="#BBBBBB">
                        <rect id="Rectangle-55" x="0.5" y="7.5" width="14" height="12" rx="2"></rect>
                        <path d="M11.5,7.5 L11.5,4.5 C11.5,2.290861 9.709139,0.5 7.5,0.5 C5.290861,0.5 3.5,2.290861 3.5,4.5 L3.5,7.5 L11.5,7.5 Z" id="Combined-Shape"></path>
                    </g>
                    <g id="Group-2" transform="translate(6.000000, 10.000000)" fill="#BBBBBB">
                        <circle id="Oval-22" cx="1.5" cy="1.5" r="1.5"></circle>
                        <rect id="Rectangle-3" x="1" y="1" width="1" height="6" rx="0.5"></rect>
                    </g>
                </g>
            </g>
        </g>
          </g>
        </svg>
      </span>
    );
  }
}
