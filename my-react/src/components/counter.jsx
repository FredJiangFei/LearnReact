import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CounterStore from '../flux/stores/CounterStore';
import * as Actions from '../flux/Actions';

class Counter extends Component {
  constructor(props) {
    console.log('enter constructor: ' + props.caption);
    super(props);
    this.state = {
      count: CounterStore.getCounterValues()[props.caption]
    };
  }

  // life cycle
  componentWillReceiveProps(nextProps) {
    console.log('enter componentWillReceiveProps ' + this.props.caption);
  }

  componentWillMount() {
    CounterStore.removeChangeListener(this.onChange);
    console.log('enter componentWillMount ' + this.props.caption);
  }

  componentDidMount() {
    CounterStore.addChangeListener(this.onChange);
    console.log('enter componentDidMount ' + this.props.caption);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.caption !== this.props.caption ||
      nextState.count !== this.state.count
    );
  }
  // life cycle

  onChange = () => {
    const newCount = CounterStore.getCounterValues()[this.props.caption];
    this.setState({ count: newCount });
  };

  increment = () => {
    Actions.increment(this.props.caption);
    // const previousValue = this.state.count;
    // const count = previousValue + 1;
    // this.setState({ count });
    // this.props.onUpdate(count, previousValue);
  };

  decrement = () => {
    Actions.decrement(this.props.caption);
    // const previousValue = this.state.count;
    // const count = previousValue - 1;
    // this.setState({ count });
    // this.props.onUpdate(count, previousValue);
  };

  render() {
    console.log('enter render ' + this.props.caption);
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

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number
};

Counter.defaultProps = {
  initValue: 0
};

export default Counter;
