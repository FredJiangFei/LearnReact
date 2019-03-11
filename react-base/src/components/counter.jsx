import React, { Component } from 'react';

class Counter extends Component {
  styles = {
    fontSize: '14px'
  };

  // constructor() {
  //   super();
  //   this.increment = this.increment.bind(this);
  // }

  componentDidUpdate(preProps, preState) {
    // console.log(`preProps: `, preProps);
    // console.log(`preState: `, preState);

    if (preProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount');
  }

  render() {
    console.log('Counter - Render');
    return (
      <div className="row">
        <div className="col-sm-2">
          {this.props.children}
          <span className={this.getBadgeClasses()} style={this.styles}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </div>
      </div>
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
