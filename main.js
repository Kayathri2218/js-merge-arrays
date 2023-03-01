//10. Design a method to merge two sorted array in the sorted form.

let first = [11, 22, 33, 44, 55, 66, 77, 88];
let second = [12, 23, 34, 56, 67, 78, 89, 90];
let asend = [];
for (let i = 0; i < first.length; i++) {
  asend.push(first[i],second[i]);
}
let asending = [];
for (let i = 0; i < asend.length; i++) {
  for (let j = 0; j < asend.length - i - 1; j++) {
    if (asend[j] > asend[j+1]) {
      asending = asend[j];
      asend[j] = asend[j+1];
      asend[j+1] = asending;
    }
  }
}
console.log(asend);