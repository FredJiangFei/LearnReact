import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/200',
    tags: ['t1', 't2', 't3']
  };

  styles = {
    fontSize: '14px'
  };

  // constructor() {
  //   super();
  //   this.increment = this.increment.bind(this);
  // }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <React.Fragment>
        <img
          src={this.state.imageUrl}
          style={{ border: '1px solid red', display: 'block' }}
        />
        <span className={this.getBadgeClasses()} style={this.styles}>
          {this.formatCount()}
        </span>
        <button onClick={this.increment} className="btn btn-secondary btn-sm">
          Increment
        </button>
        {this.state.tags.length === 0 && <p>No records.</p>}
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
      // Ctrl + D
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';

    return classes + (this.state.count === 0 ? 'warning' : 'primary');
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
