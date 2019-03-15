import React, { Component } from 'react';
import { getAll, add, remove } from '../services/customerService';

class Customers extends Component {
  state = {
    customers: []
  };

  async componentDidMount() {
    this.loadCustomers();
  }

  loadCustomers = async () => {
    const { data: customers } = await getAll();
    this.setState({
      customers
    });
  };

  addCustomer = async name => {
    await add(name);
    this.loadCustomers();
  };

  removeCustomer = async id => {
    await remove(id);
    this.loadCustomers();
  };

  render() {
    return (
      <React.Fragment>
        <h1>Customers</h1>
        <input type="text" ref={input => (this.textInput = input)} />
        <button onClick={() => this.addCustomer(this.textInput.value)}>
          Add
        </button>

        <ul>
          {this.state.customers.map(c => (
            <li key={c._id}>
              {c.name}
              <button onClick={() => this.removeCustomer(c._id)}>Remove</button>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Customers;
