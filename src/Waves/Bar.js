import React from 'react';
import './Bar.css';

export default class Bar extends React.Component {
  render() {
    return (
      <div
        className={'Bar distance-'+this.props.distanceToActiveBar}
        style={this.props.style}
        >
        <div
          className={'Bar-text distance-'+this.props.distanceToActiveBar}
          onMouseOver={() => this.props.setActiveBar(this.props.idx)}
          >
          {this.props.word}
          <span style={{fontSize: '10px', display: 'none'}}>
            {JSON.stringify(this.props.style)}
          </span>
        </div>
      </div>
    )
  }
}