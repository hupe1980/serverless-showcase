import React, { Component, Fragment } from 'react';

import OrderDialog from '../components/OrderDialog';
import ProductList from '../components/ProductList';

import wallbox from './wallbox.jpg';
import tesla from './tesla.jpg';

const products = [
  {
    id: 'wallbox',
    title: 'Wallbox',
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.`,
    image: wallbox,
    variants: ['premium', 'basic'],
  },
  {
    id: 'tesla',
    title: 'Tesla',
    description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
    clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
    amet.`,
    image: tesla,
    variants: ['Model 3', 'Model S'],
  },
];

class ProductsContainer extends Component {
  state = {
    open: false,
    currentProduct: null,
  };

  handleProductClick = product => {
    this.setState({ open: true, currentProduct: product });
  };

  handleDialogClose = () => {
    this.setState({ open: false, currentProduct: null });
  };

  render() {
    const { open, currentProduct } = this.state;
    return (
      <Fragment>
        <ProductList products={products} onClick={this.handleProductClick} />
        <OrderDialog
          open={open}
          currentProduct={currentProduct}
          onClose={this.handleDialogClose}
        />
      </Fragment>
    );
  }
}

export default ProductsContainer;
