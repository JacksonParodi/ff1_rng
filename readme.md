## Example usage of the Final Fantasy 1 RNG

### Initialize the RNG object
 
`const rng = new FF1Rng();`
 
### Tick to get the next number
 
`console.log(rng.tick()); // 31
console.log(rng.tick()); // 166
console.log(rng.tick()); // 222`
 
### Set the seed
 
`rng.set_seed(0);
console.log(rng.tick()); // 31
rng.set_seed(100);
console.log(rng.tick()); // 229`