// Feel free to write and use any additional functions, variables, objects, etc. as you wish
let obj = {
  A: ['B', 'E', 'D', 'F', 'H'],
  B: ['C', 'A', 'F', 'E', 'D', 'I', 'G'],
  C: ['B', 'F', 'E', 'D', 'H'],
  D: ['A', 'B', 'C', 'E', 'G', 'H', 'I'],
  E: ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I'],
  F: ['A', 'B', 'C', 'E', 'G', 'H', 'I'],
  G: ['B', 'D', 'E', 'F', 'H'],
  H: ['C', 'A', 'D', 'E', 'F', 'G', 'I'],
  I: ['B', 'F', 'E', 'D', 'H'],
};
function countPatternsFrom(firstPoint, length) {
  let counter = 0;
  if (length <= 0) return 0;
  if (length > 9) return 0;
  counter += test(firstPoint, { [firstPoint]: true }, --length);
  return counter;
}

function test(key, obj2, length2) {
  let obj3 = { ...obj2 };
  let count = 0;
  console.log(obj[key], key, obj3, length2);
  length2--;
  for (let i = 0; i < obj[key].length && length2 > -1; i++) {
    let key2 = obj[key][i];
    if (obj3[key2]) continue;
    count++;
    obj3[key2] = true;
    count += test(key2, obj3, length2);
    delete obj3[key2];
  }
  return count;
}
console.log(countPatternsFrom('D', 3), 37);
// console.log(countPatternsFrom('C', 2), 5);
// console.log(countPatternsFrom('A', 0), 0);
// console.log(countPatternsFrom('A', 10), 0);
// console.log(countPatternsFrom('B', 1), 1);

// console.log(countPatternsFrom('E', 4), 256);
// console.log(countPatternsFrom('E', 8), 23280);
