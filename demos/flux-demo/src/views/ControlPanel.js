import React, { Component } from 'react';
import Counter from './Counter.js';
import Summary from './Summary.js';

class ControlPanel extends Component {
  render() {
    return (
      <div>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <hr />
        <Summary />
      </div>
    );
  }
}

export default ControlPanel;
