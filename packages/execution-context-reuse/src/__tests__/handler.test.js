'use strict';

const handler = require('../handler');

test('handler', async () => {
  const event = 'event';
  const expected = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Counter: 0`
    }),
  };

  const value = await handler.hello(event);

  expect(value).toEqual(expected);
  expect(typeof value).toBe("object");
});
