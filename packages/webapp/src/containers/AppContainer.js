import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ProductsContainer from './ProductsContainer';
import OrdersContainer from './OrdersContainer';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class AppContainer extends Component {
  state = {
    value: 'one',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab value="one" label="Products" />
            <Tab value="two" label="Orders" />
          </Tabs>
        </AppBar>
        {value === 'one' && <ProductsContainer />}
        {value === 'two' && <OrdersContainer />}
      </div>
    );
  }
}

export default withStyles(styles)(AppContainer);
