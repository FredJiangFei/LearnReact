import React, { Component } from 'react';
import Counter from './counter';

class ControlPanel extends Component {
  constructor(props) {
    super(props);

    this.initValues = [0, 10, 20];
    this.state = {
      sum: this.initValues.reduce((a, b) => a + b, 0)
    };
  }

  onCounterUpdate = (newValue, previousValue) => {
    const valueChange = newValue - previousValue;
    this.setState({
      sum: this.state.sum + valueChange
    });
  };

  render() {
    console.log('enter ControlPanel render');
    return (
      <React.Fragment>
        <Counter onUpdate={this.onCounterUpdate} caption="First" />
        <Counter
          onUpdate={this.onCounterUpdate}
          caption="Second"
          initValue={10}
        />
        <Counter
          onUpdate={this.onCounterUpdate}
          caption="Third"
          initValue={20}
        />
        <button onClick={() => this.forceUpdate()}>
          Click me to re-render!
        </button>
        <hr />
        <div>Total Count: {this.state.sum}</div>
      </React.Fragment>
    );
  }
}

export default ControlPanel;
