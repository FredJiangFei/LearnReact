import React, { Component } from 'react';
import Counter from './counter';
import SummaryStore from '../flux/stores/SummaryStore';

class ControlPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sum: SummaryStore.getSummary()
    };
  }

  componentDidMount() {
    SummaryStore.addChangeListener(this.onUpdate);
  }

  componentWillUnmount() {
    SummaryStore.removeChangeListener(this.onUpdate);
  }

  onUpdate = () => {
    this.setState({
      sum: SummaryStore.getSummary()
    });
  };

  render() {
    console.log('enter ControlPanel render');
    return (
      <React.Fragment>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
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
