let numbers = [2, 7, 11, 15];
let target = 9;
let array = [];

for (let i = 0; i <= numbers.length - 2; i++) {
  for (let j = 1; j <= numbers.length - 1; j++) {
    if (numbers[i] + numbers[j] === target) {
      array.push(i);
      array.push(j);
      console.log(array);
      return;
    }
  }
}
