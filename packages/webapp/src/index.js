import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';

import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-1:47971f6d-1ecd-4794-84c1-edbcd18b504e',
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-1',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-1_bFJYBpkRz',
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: 'niilr24du1bipkvm9kv69vpd3',
    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    //mandatorySignIn: true,
  },
  API: {
    endpoints: [
      {
        name: 'show-case-api',
        endpoint: 'https://c56qsm49dl.execute-api.us-east-1.amazonaws.com/dev',
      },
    ],
  },
});

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
