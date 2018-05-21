import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const Orders = ({ classes, orders }) => {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Variant</TableCell>
            <TableCell>State</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(order => {
            const { id, type, city, date, variant, state } = order;
            return (
              <TableRow key={id}>
                <TableCell component="th" scope="row">
                  {type}
                </TableCell>
                <TableCell>{city}</TableCell>
                <TableCell>{date}</TableCell>
                <TableCell>{variant}</TableCell>
                <TableCell>{state}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(Orders);
