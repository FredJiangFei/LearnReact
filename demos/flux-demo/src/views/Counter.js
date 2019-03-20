import React, { Component } from 'react';
import * as Actions from '../Actions.js';
import CounterStore from '../stores/CounterStore.js';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: CounterStore.getCounterValues()[props.caption]
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.caption !== this.props.caption ||
      nextState.count !== this.state.count
    );
  }

  componentDidMount() {
    CounterStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    const newCount = CounterStore.getCounterValues()[this.props.caption];
    this.setState({ count: newCount });
  };

  increment = () => {
    Actions.increment(this.props.caption);
  };

  decrement = () => {
    Actions.decrement(this.props.caption);
  };

  render() {
    const { caption } = this.props;
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <span>
          {caption} count: {this.state.count}
        </span>
      </div>
    );
  }
}

export default Counter;
