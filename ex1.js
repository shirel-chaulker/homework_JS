let str = "a,b$c*";
let str2 = str.split("");
//console.log(str2);
let strLetters = [];
let strSigns = [];

for (let i = str2.length - 1; i >= 0; i--) {
  if (
    (str2[i] >= "A" && str2[i] <= "Z") ||
    (str2[i] >= "a" && str2[i] <= "z")
  ) {
    strLetters.push(str2[i]);
  } else {
    strSigns[i] = str2[i];
  }
}

//console.log(strLetters);
//console.log(strSigns);
let counter = 0;
for (let i = 0; i < strSigns.length - 1; i++) {
  if (strSigns[i] === undefined) {
    strSigns[i] = strLetters[counter];
    if (strLetters[i] !== strLetters.length);
    counter++;
  }
}
console.log(strSigns);
