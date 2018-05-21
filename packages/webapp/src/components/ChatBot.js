import React from 'react';
import LexChat from '@wapps/react-lex';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Chat from './Chat';

const styles = theme => ({
  root: {
    bottom: 0,
    right: 0,
    position: 'fixed',
    width: '50%',
    maxHeight: '50%',
    overflow: 'scroll',
    border: '1px solid #ccc',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

const pool = 'us-east-1:47971f6d-1ecd-4794-84c1-edbcd18b504e';
//"us-east-1:cd6d5eb0-3f3a-4a9e-9348-d97c2ed72db1"

const ChatBot = ({ classes }) => (
  <div className={classes.root}>
    <ExpansionPanel className={classes.panel}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>
          Chat with me or call 012345
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <LexChat
          botName="ShowcaseBot"
          component={Chat}
          identityPoolId={pool}
          initialText="Hello, what can I help you with?"
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </div>
);

export default withStyles(styles)(ChatBot);
