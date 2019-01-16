
const expect = require('expect');

let { generateMessage } = require('./message');

describe('generateMessage', () => {

  it('should generate correct message object', () => {
    let from = 'Brandon';
    let text = 'Hello';

    let message = generateMessage(from, text);

    expect(message).toInclude({
      from,
      text
    });

    expect(message.createdAt).toBeA('number');
  });
});
