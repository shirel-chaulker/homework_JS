//targil 3 class2:

// const numbers = [1, 2, 3, 4];
// function except(array, exluded) {
//   const output = [];
//   for (let key of array) {
//     if (!exluded.includes(key)) {
//       output.push(key);
//     }
//   }
//   return output;
// }
// output = except(numbers, [2, 4]);
// console.log(output);

//targil 4 class 2:

// const numbers = [1, 2, 3, 4, 5, 4, , 4];
// let count = 0;
// function countOccurrences(array, searchElement) {
//   for (let key of array) {
//     if (key === searchElement) {
//       count++;
//     }
//   }
//   return count;
// }
// let sum = countOccurrences(numbers, 4);
// console.log(sum);

//targil 6 class 2:

// const numbers = [1, 2, 5, 3, 4];

// function getMax(array) {
//   let max = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }
//   return max;
// }

// const maxNumber = getMax(numbers);
// console.log(maxNumber);

//targil 7 class 2:

const movies = [
  { title: "the avengers", year: 2018, rating: 4.5 },
  {
    title: "she hulk",
    year: 2018,
    rating: 4.7,
  },
  {
    title: "spiderman",
    year: 2018,
    rating: 3,
  },
  {
    title: "ironMan",
    year: 2017,
    rating: 4.5,
  },
];

const titles = movies.filter((m) => m.year === 2018 && m.rating > 4);
//console.log(titles);
const ratingg = movies.sort((a, b) => b.rating - a.rating);
//console.log(ratingg);
const maping = movies.map((m) => m.title);
//console.log(maping);
const rev = movies.reverse();
console.log(rev);
