let str = ["flower", "flow", "flight"];
// let array2 = [...str[0]];
// console.log(array2);
// let temp = [];
let fun1 = (array) => {
  let array2 = [...array[0]];
  console.log(array2);
  let temp = [];

  for (let j = 1; j < array.length; j++) {
    for (let i = 0; i < array2.length; i++) {
      if (array2.includes(array[j].charAt(i))) {
        temp.push(array[j].charAt(i));
        //console.log(temp);
      }
    }
    array2 = [];
    array2 = [...temp];
    temp = [];
    console.log(array2);
  }
  return array2;
};

console.log(fun1(str));
