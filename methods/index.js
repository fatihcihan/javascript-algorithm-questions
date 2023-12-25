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


/* // every -> checks whether all elements in an array satisfy the condition
// let newArr = arr.every(a => a > 0);     // true 
let newArr = arr.every(a => a > 1);     // false 
console.log(newArr);     */


/* // findIndex -> returns the index of the first element that matches the rule
let newArr = arr.findIndex(a => a > 1);
console.log(newArr);    // 2 */


/* // fill -> fills specified elements in an array with a value
let newArr = arr.fill(1);
console.log(newArr);    // [ 1, 1, 1, 1, 1, 1, 1 ] */


// ----- 4 most used methods -----

/* // 1) filter -> for filtering operations
let newArr = arr.filter(val => val > 2);
console.log(newArr);    // [ 3, 4, 5, 6, 7 ] */


/* // 2) find -> to find value in an array
let newArr = arr.find(val => val > 2);
console.log(newArr);    // 3 */


/* // 3) map -> creates a NEW ARRAY by calling a function for each array element
let newArr = arr.map(val => val * 2);
console.log(newArr);     // [ 2, 4, 6, 8, 10, 12, 14 ]  */


/* // 3) forEach -> calls a new function for each element in an array
let newArr = arr.forEach(val => {
    if (val > 3) {
        console.log(val);   // [ 4, 5, 6, 7 ]
    }
}) */


/* // join -> returns an array as a string
let newArr = arr.join();
console.log(newArr);    // 1,2,3,4,5,6,7 */


/* // length -> number of data in the array
console.log(arr.length);    // 7 */


/* // includes -> checks if the specified value exists in the array
console.log(arr.includes(1));       // true
console.log(arr.includes(0));       // false */


/* // reverse -> reverses the array
let newArr = arr.reverse();
console.log(newArr);    // [ 7, 6, 5, 4, 3, 2, 1 ] */


