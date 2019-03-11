import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    console.log('Counters - Render');
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;

    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={onReset}>
          Reset
        </button>
        {counters.length === 0 && <p>No records.</p>}
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          >
            <span>Counter #{counter.id}</span>
          </Counter>
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
