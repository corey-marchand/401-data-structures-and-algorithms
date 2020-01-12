const PseudoQueue = require('../queue-with-stacks.js');
let pseudoQueue = new PseudoQueue();

describe('Testing queue-with-stacks', () => {
  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });
  it('Should properly enqueue values', () => {
    pseudoQueue.enqueue('ant');
    pseudoQueue.enqueue('blant');
    expect(pseudoQueue.stack1).toEqual(['ant', 'blant']);
  });
  it('should properly dequeue values', () => {
    pseudoQueue.enqueue('ant');
    pseudoQueue.enqueue('blant');
    pseudoQueue.dequeue();
    expect(pseudoQueue.stack1).toEqual(['blant']);
  });
  it('Epected failure for dequeue method', () => {
    pseudoQueue.enqueue('ant');
    pseudoQueue.enqueue('blant');
    pseudoQueue.dequeue();
    expect(pseudoQueue.stack1).toEqual(['ant']);
  });
  it('Epected failure for Enqueue method', () => {
    pseudoQueue.enqueue('ant');
    pseudoQueue.enqueue('blant');
    pseudoQueue.enqueue('cant');
    expect(pseudoQueue.stack1).toEqual(['fant']);
  });
});
