import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Variants from './Variants';

const OrderDialog = ({ open, onClose, currentProduct }) => (
  <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Order now</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To complete the order, please complete the following fields...
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="name"
        label="Point of delivery"
        type="text"
        fullWidth
      />
      <TextField
        id="date"
        label="Desired delivery date"
        type="date"
        defaultValue="2020-12-31"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <DialogContentText>Choose a variant</DialogContentText>
      {currentProduct && <Variants variants={currentProduct.variants} />}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Cancel
      </Button>
      <Button onClick={onClose} color="primary">
        Order
      </Button>
    </DialogActions>
  </Dialog>
);

export default OrderDialog;
