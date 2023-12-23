// Array Methods;
const arr = [1, 2, 3, 4, 5, 6, 7];
const arr1 = [8, 9, 10];


/* // push -> adds element to array
arr.push(8);
console.log(arr);   */


/* // shift -> deletes the first element of the array
arr.shift();
console.log(arr); */


/* // slice -> returns selected elements in an array as A NEW ARRAY
const newArr = arr.slice(2,6);      // [ 3, 4, 5, 6 ]
console.log(newArr); */


/* // concat -> does the merging 
let newArr = arr.concat(arr1);
console.log(newArr);    // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] */


/* // spread -> ... 
arr.push(...arr1);
console.log(arr);        // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10  */


/* // entries -> returns values ​​with [key,value] pairs
let newArr = arr.entries();
for (let i of newArr) {
    console.log(i);     // [0,1] [1,2] [2,3] ... -> [key,value]
} */


/* // some -> it returns true if it finds even a single element in an array that meets the given condition.
let newArr = arr.some(number => number > 6);
console.log(newArr);        // true */







