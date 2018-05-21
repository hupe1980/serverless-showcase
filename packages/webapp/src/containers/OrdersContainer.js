import React, { Component } from 'react';
import { API } from 'aws-amplify';

import Orders from '../components/Orders';

class OrdersContainer extends Component {
  state = {
    orders: [],
  };

  componentDidMount() {
    API.get('show-case-api', '/orders')
      .then(response => {
        this.setState({ orders: response.Items });
      })
      .catch(error => {
        console.log(error.response);
      });
  }

  render() {
    const { orders } = this.state;
    return <Orders orders={orders} />;
  }
}

export default OrdersContainer;
