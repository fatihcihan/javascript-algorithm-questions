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

const solution = (arr) => {
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

console.log(solution([[4, 3, 2, -1], [3, -2, -1, 6], [5, -4, 0, -1]]));