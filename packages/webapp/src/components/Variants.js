import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  variant: {
    border: '1px solid #ccc',
    padding: '5px',
    marginTop: '5px',
  },
};

const Variants = ({ classes, variants }) => (
  <div className={classes.root}>
    {variants.map(variant => (
      <div key={variant} className={classes.variant}>
        <Typography component="span">{variant}</Typography>
      </div>
    ))}
  </div>
);

export default withStyles(styles)(Variants);
