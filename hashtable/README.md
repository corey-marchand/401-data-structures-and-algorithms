# Hashtables
I created a hashtable with different methods that allow me to implement new values and recieve values
## Challenge
Implement a hashtable that has the following methods:
The add method takes in both a key and a value, hashes the key and adds the key and value pair to the table.  The get method takes in a key and returns a value.  The contains method in a key and returns a boolean indicating whether or not the value exists in the table already.  Finally the hash method which takes in a arbitrary

## Approach & Efficiency
These methods should be pretty efficient.  At most,  the Big O would be O(n^2).  THis is an efficient solution.  

## API
Methods: 
Add(): Takes in both a key and a value.  The method hashes the key, and adds the key and value pair to the tavle, handling collisions as well. 
get(): Takes in a key and returns a value from the table.
contains(): takes in the key and returns a boolean, indicating whether or not the value exists.  
hash(): takes in an arbitrary key and returns an index in the collection.  