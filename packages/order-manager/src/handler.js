const AWS = require('aws-sdk');
const uuid = require('uuid');

const documentClient = new AWS.DynamoDB.DocumentClient();

module.exports.bot = async event => {
  const sessionAttributes = event.sessionAttributes;
  const slots = event.currentIntent.slots;

  console.log(event);

  // const params = {
  //   TableName: process.env.DYNAMODB_TABLE,
  //   Item: {
  //     id: uuid.v1(),
  //     type: event.body.type,
  //     city: event.body.city,
  //     data: event.body.date,
  //     variant: event.body.variant,
  //     state: 'open',
  //   },
  // };
  //
  // const data = await documentClient.put(params).promise();

  return {
    sessionAttributes,
    dialogAction: {
      type: 'Close',
      fulfillmentState: 'Fulfilled',
      message: { contentType: 'PlainText', content: 'Thx for your order' },
    },
  };
};

module.exports.create = async event => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      type: event.body.type,
      city: event.body.city,
      data: event.body.date,
      variant: event.body.variant,
      state: 'open',
    },
  };

  const data = await documentClient.put(params).promise();

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  };

  return response;
};

module.exports.list = async event => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
  };

  const data = await documentClient.scan(params).promise();

  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  };

  return response;
};
