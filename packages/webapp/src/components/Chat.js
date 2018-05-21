import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = {
  root: {
    backgroundColor: 'white',
    width: '100%',
  },
};

const Chat = ({ classes, inputText, messages, onChange, onSubmit }) => (
  <div className={classes.root}>
    <div>
      {messages.map(({ message }, index) => (
        <Typography key={index}>{message}</Typography>
      ))}
    </div>
    <form onSubmit={onSubmit}>
      <TextField
        autoFocus
        value={inputText}
        onChange={onChange}
        margin="dense"
        type="text"
        fullWidth
      />
    </form>
  </div>
);

export default withStyles(styles)(Chat);
