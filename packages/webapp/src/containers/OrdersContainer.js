import React, { Component } from 'react';

import Orders from '../components/Orders';

const orders = {};

class OrdersContainer extends Component {
  render() {
    return <Orders orders={orders} />;
  }
}

export default OrdersContainer;
