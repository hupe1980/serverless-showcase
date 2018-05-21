const AWS = require('aws-sdk');
const uuid = require('uuid');

const documentClient = new AWS.DynamoDB.DocumentClient();

module.exports.bot = async event => {
  const sessionAttributes = event.sessionAttributes;
  const { slots, name } = event.currentIntent;

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      type: name === 'OrderWallbox' ? 'WallBox' : 'Tesla',
      city: slots.City,
      date: slots.Date,
      variant:
        name === 'OrderWallbox' ? slots.WallboxVariant : slots.TeslaVariant,
      state: 'open',
    },
  };

  await documentClient.put(params).promise();

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
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
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
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(data),
  };

  return response;
};
