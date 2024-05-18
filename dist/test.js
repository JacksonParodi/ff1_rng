import FF1Rng from './index.js';
const rng = new FF1Rng();
// Each call to nextNumber returns a different number
const num1 = rng.nextNumber();
const num2 = rng.nextNumber();
console.assert(num1 != num2);
// Setting the seed to the same value will return the same number, and setSeed can accept numbers or strings
rng.setSeed(50);
const num4 = rng.nextNumber();
rng.setSeed("50");
const num3 = rng.nextNumber();
console.assert(num3 === num4);
// setSeed can also take no arguments, and will set the seed to 0
rng.setSeed();
const num5 = rng.nextNumber();
rng.setSeed(0);
const num6 = rng.nextNumber();
console.assert(num5 === num6);
// setSeed can take negative numbers, and will wrap around the table
rng.setSeed(-1);
const num7 = rng.nextNumber();
rng.setSeed(255);
const num8 = rng.nextNumber();
console.assert(num7 === num8);
// even a large negative valuie will wrap around the table
rng.setSeed(-257);
const num9 = rng.nextNumber();
rng.setSeed(255);
const num10 = rng.nextNumber();
console.assert(num9 === num10);
// setSeed can also take floats, and will round down to the nearest integer
rng.setSeed(0.5);
const num11 = rng.nextNumber();
rng.setSeed(0.9);
const num12 = rng.nextNumber();
console.assert(num11 === num12);
