import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
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

  constructor(props) {
    super(props);
    console.log('App - Constructor', this.props);
  }

  componentDidMount() {
    // Ajax call
    // this.setState({});
    console.log('App - Mounted');
  }

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

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({
      counters
    });
  };

  render() {
    console.log('App - Render');
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(x => x.value !== 0).length}
        />
        <img
          alt="img"
          src={this.state.imageUrl}
          style={{ border: '1px solid red', display: 'block' }}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
