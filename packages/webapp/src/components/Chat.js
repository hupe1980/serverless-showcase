import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = {
  root: {
    width: '100%',
  },
  bot: {
    backgroundColor: '#e5e5ea',
    margin: '5px',
    padding: '5px 10px 5px 10px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  human: {
    backgroundColor: '#ff4081',
    margin: '5px',
    padding: '5px 10px 5px 10px',
    borderRadius: '5px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
};

const Chat = ({ classes, inputText, messages, onChange, onSubmit }) => (
  <div className={classes.root}>
    <div>
      {messages.map(({ message, type }, index) => (
        <div key={index} className={classes[type]}>
          <Typography>{message}</Typography>
        </div>
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
