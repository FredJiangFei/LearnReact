import React, { Component } from 'react';

class Counter extends Component {
  styles = {
    fontSize: '14px'
  };

  // constructor() {
  //   super();
  //   this.increment = this.increment.bind(this);
  // }

  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()} style={this.styles}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
      // Ctrl + D
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';

    return classes + (this.props.counter.value === 0 ? 'warning' : 'primary');
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}

export default Counter;
