import React, { Component } from 'react';
import LexChat from '@wapps/react-lex';
import { Auth } from 'aws-amplify';
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

class ChatBot extends Component {
  state = {
    credentials: null,
  };

  componentDidMount() {
    Auth.currentCredentials().then(credentials => {
      this.setState({ credentials: Auth.essentialCredentials(credentials) });
    });
  }
  render() {
    const { credentials } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanel className={classes.panel}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>
              Chat with me or call +49 89 21093782
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {credentials ? (
              <LexChat
                botName="ShowcaseBot"
                component={Chat}
                identityPoolId="dummy"
                initialText="Hello, what can I help you with?"
                options={{
                  credentials,
                }}
              />
            ) : (
              <div>Loading...</div>
            )}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default withStyles(styles)(ChatBot);
