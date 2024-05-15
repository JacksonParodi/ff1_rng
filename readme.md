## Example usage of the Final Fantasy 1 RNG
In Final Fantasy 1, random numbers are generated using an incrementing index through a fixed table of 256 u8 numbers.
This implementation allows you to experience that same pseudocryptographic joy!

Without using `tsc`, simply import the `FF1Rng` Class from `/dist/index.js`

### Initialize the RNG object with a seed of 0
``` 
const rng = new FF1Rng();
```
 
### .nextNumber() will return a random integer between 0-255 inclusive
 ```
console.log(rng.nextNumber()); // 31
console.log(rng.nextNumber()); // 166
console.log(rng.nextNumber()); // 222
```

### Set the seed with a number to become the new index in the table
```
rng.set_seed(0);
console.log(rng.nextNumber()); // 31
rng.set_seed(100);
console.log(rng.nextNumber()); // 229
```