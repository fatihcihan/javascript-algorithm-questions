// 1) [8,4,6,2,3] => output => [4,2,4,2,3] ---> the method of progress by subtracting from each other

/* const solution = (arr) => {
    return arr.map((_, i) => {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                arr[i] = arr[i] - arr[j];
                break;
            }
        }
        return arr[i];
    })
}

console.log(solution([8, 4, 6, 2, 3])); */


// 2) input [[4,3,2,-1], [3,-2,-1,6], [5,-3,0,-1]]   ---> how many negative values (5)

/* const solution = (arr) => {
    // return arr.map(row => row.filter(r => r < 0).length).reduce((a, b) => a + b, 0);
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < 0) {
                newArr.push(arr[i][j])
            }
        }
    }
    return newArr.length;
}

console.log(solution([[4, 3, 2, -1], [3, -2, -1, 6], [5, -4, 0, -1]])); */

// 3) [555, 901, 899, 1276, 12] ---> how many double-digit numbers are there? (2)

/* const solution = (arr) => {
    return arr.filter(r => r.toString().length % 2 == 0).length;
}

console.log(solution([555, 901, 899, 1276, 12])); */

// 4) input n = 5 --> make an array of n elements but let their sum be 0

/* const solution = (num) => {
    let newArr = [];
    if (num % 2 == 1) {
        newArr.push(0)
    }
    for (let i = 1; i < num / 2; i++) {
        newArr.push(i);
        newArr.unshift(-i);
    }
    return newArr;
}

console.log(solution(5)); */

// 5) n=434 ---> 4*3*4=48,   4+3+4=11  result = 48 - 11 = 37

/* const solution = (num) => {
    let reviseNum = num.toString().split('').map(Number);    // map(Number) --> converts each element in an array to a number
    return reviseNum.reduce((a, b) => a * b, 1) - reviseNum.reduce((a, b) => a + b, 0)
}

console.log(solution(434)); */

// 6) nums = [1,2,3,4,4,3,2,1], n = 4   output -> [1,4,2,3,3,2,4,1] ---> put the value of nums four units behind

/* const solution = (arr, num) => {
    let newArr = [];
    for (let i = 0; i < num; i++) {
        newArr.push(arr[i])
        newArr.push(arr[i + num])
    }
    return newArr;
}

console.log(solution([1, 2, 3, 4, 4, 3, 2, 1], 4)); */

// 7) input -> [-2,1,-3,4,-1,2,1,-5,4] output -->  -4 [-2,1,-3,4,-1,2,-5] total -4 (delete duplicates)

/* const solution = (arr) => {
    let newArr = [...new Set(arr)]              // --> deleted repeating numbers (simple and useful)
    return newArr.reduce((a, b) => a + b, 0)
}

console.log(solution([-2, 1, -3, 4, -1, 2, 1, -5, 4])); */

/* 8)
    input --> x=123
    output --> 321
    input --> x=-123
    output --> -321
    input ---> x=120
    output ---> 21 
 */

const solution = (num) => {
    return num < 0
        ? -1 * Number(num.toString().split('').filter(r => r != '-').reverse().join(''))
        : Number(num.toString().split('').reverse().join(''));
}
console.log(solution(120));
