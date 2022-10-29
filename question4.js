let nums = [-1, 0, 0, 1, 1, 1, 2, 2, 9, 3, 3, 4, 5, 5];
let expectedNums = [];
let countLength = 0;

let removeDuplicates = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] === array[i + 1]) {
      delete array[i];
    }
  }

  array.sort();

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== undefined) {
      expectedNums.push(array[i]);
      countLength++;
    } else {
      expectedNums.push("_");
    }
  }

  return expectedNums;
};

let k = removeDuplicates(nums);
console.log(k);

console.log(countLength);
