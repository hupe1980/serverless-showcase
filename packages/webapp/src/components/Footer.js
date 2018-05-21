import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
};

const Footer = ({ classes }) => (
  <div className={classes.root}>
    <Typography>ShowCase Serverless 2018</Typography>
  </div>
);

export default withStyles(styles)(Footer);
