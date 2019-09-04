import React from 'react';
import * as R from 'ramda';

// Import components
import Bar from './Bar.js';

// Import styles
import './Waves.css';

const mapIndexed = R.addIndex(R.map);

const words = [
  'What about my privacy',
  'Who should I vote for',
  'How to bake a cake',
  'Is the sky blue',
  'How to make slime',
  'Is water wet',
  'What day is it',
  'What about my privacy',
  'Who should I vote for',
  'How to bake a cake',
  'Is the sky blue',
  'How to make slime',
  'Is water wet',
  'What day is it'
]

/*
TODO: Make wave form react to audio
https://wiki.mozilla.org/Audio_Data_API
*/
class Waves extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeBar: -9999
    }

    this.setActiveBar = this.setActiveBar.bind(this)
    this.distanceToActiveBar = this.distanceToActiveBar.bind(this)
  }
  setActiveBar(bar) {
    this.setState({
      activeBar: bar
    })
  }
  distanceToActiveBar(idx, activeBar) {
    return Math.abs(activeBar - idx);
  }
  render() {
    return (
      <div className="Waves">
        <div className="Waves-bar-wrapper">
          {mapIndexed((word, idx) =>
            <Bar
              key={idx}
              idx={idx}
              word={word}
              setActiveBar={this.setActiveBar}
              distanceToActiveBar={this.distanceToActiveBar(idx, this.state.activeBar)}
              />
          , words)}
        </div>
      </div>
    )
  }
}

export default Waves;
