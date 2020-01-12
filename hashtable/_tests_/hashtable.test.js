const HashTable = require('../hashtable.js');
const hashTable = new HashTable();

describe('Testing Hashtable from hashtable.js', () =>{
  beforeEach(() => {
    const hashTable = new HashTable(1000);
  });

  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    hashTable.add('sandwich', 1000);
    hashTable.add('sand', 200);
    // console.log(hashTable.data);
    expect(hashTable.data).toStrictEqual([ [ [ 'sandwich', 1000 ], [ 'sand', 200 ] ] ]);
  });

  it('Retrieving based on a key returns the value stored', () => {
    hashTable.add('sandwich', 1000);
    hashTable.add('sand', 200);
    expect(hashTable.get('sand')).toBe(200);
  });

  it('Successfully returns null for a key that does not exist in the hashtable', () => {
    hashTable.add('sandwich', 1000);
    hashTable.add('sand', 200);
    expect(hashTable.contains('tuna')).toBe(null);
  });
  it('Successfully handle a collision within the hashtable', () => {
    hashTable.add('sand', 'realTrill');
    hashTable.add('land', 'realKill');
    hashTable.add('pland', 'realFrail');
    expect(hashTable.get('land')).toEqual('realKill');
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    hashTable.add('sand', 'realTrill');
    hashTable.add('land', 'realKill');
    hashTable.add('pland', 'realFrail');
    expect(hashTable.get('land')).toEqual('realKill');
  });

  it('Successfully hash a key to an in-range value', () => {
    hashTable.add('hash', 'key');
    expect(hashTable.get('hash')).toEqual('key');
  });
});
