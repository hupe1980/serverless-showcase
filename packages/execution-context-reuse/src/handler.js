'use strict';

let executionContext = 0;

exports.hello = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Counter: ${executionContext++}`
    }),
  };
  return response;
}
