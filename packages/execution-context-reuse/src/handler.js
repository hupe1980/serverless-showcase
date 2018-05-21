let executionContext = 0;

module.exports.hello = async event => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Counter: ${executionContext++}`,
    }),
  };
  return response;
};
