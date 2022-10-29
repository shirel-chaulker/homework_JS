ex2:
let palindrome = 121;
let check = palindrome.toString();
console.log(check);
let arr = check.split("");
console.log(arr);

let rev = arr.reverse();
console.log(rev);

let final = rev.join("");

if (final == palindrome) {
  console.log(true);
} else {
  console.log(false);
}
