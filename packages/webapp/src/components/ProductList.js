import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Product from './Product';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: '15px',
  },
};

const ProductList = ({ classes, products, onClick }) => (
  <div className={classes.root}>
    {products.map(({ id, title, description, image, ...rest }) => (
      <Product
        key={id}
        title={title}
        description={description}
        image={image}
        onClick={() => onClick({ id, title, description, image, ...rest })}
      />
    ))}
  </div>
);

export default withStyles(styles)(ProductList);
