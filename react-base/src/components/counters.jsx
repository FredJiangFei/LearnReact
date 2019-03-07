import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  counters = [
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ];

  state = {
    counters: this.counters,
    imageUrl: 'https://picsum.photos/200'
  };

  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({
      counters
    });
  };

  handleReset = () => {
    const counters = this.counters;
    this.setState({
      counters
    });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters
    });
  };

  render() {
    return (
      <React.Fragment>
        <img
          alt="img"
          src={this.state.imageUrl}
          style={{ border: '1px solid red', display: 'block' }}
        />
        <button className="btn btn-primary" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counters.length === 0 && <p>No records.</p>}
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
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
