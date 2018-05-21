const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = async event => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
  };
};

module.exports.list = async event => {
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
  };
};
