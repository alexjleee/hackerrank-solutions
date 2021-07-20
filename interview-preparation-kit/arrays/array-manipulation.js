// Input & Output Sample --------------------
  // n = 10
  // queries = [[1,5,3],[4,8,7],[6,9,1]]
  // returns 10

// Brute Force Approach : O(N^2) --------------------

// index       : 1  2  3  4  5  6  7  8  9 10
// array       : 0  0  0  0  0  0  0  0  0  0
// iteration 1 : 3  3  3  3  3  0  0  0  0  0
// iteration 2 : 3  3  3 10 10  7  7  7  0  0
// iteration 3 : 3  3  3 10 10  8  8  8  1  0

function arrayManipulation(n, queries) {
  // 1. Create an array, size of n, filled with 0
  let array = new Array(n).fill(0);

  // 2. Loop through queries and add k between the indices a - 1 and b
  queries.forEach(query => {
    let a = query[0];
    let b = query[1];
    let k = query[2];

    for (let i = a - 1; i < b; i++) {
      array[i] += k;
    }
  })

  // 3. Find the maximum value in the array
  let max = Math.max(...array);

  // 4. Return the maximum value
  return max;
}

// Optimization - Prefix Sum : O(n) --------------------

  // Prefix sum is a sequence of the sums of prefixes (running totals) of the input sequence
    // input sequence : 1  2  3  4  5  6 ...
    // prefix sum     : 1  3  6 10 15 21 ...

  // index       :  1  2  3  4  5  6  7  8  9 10
  // array       :  0  0  0  0  0  0  0  0  0  0
  // iteration 1 : +3 +3 +3 +3 +3  0  0  0  0  0
  // iteration 2 :  0  0  0 +7 +7 +7 +7 +7  0  0
  // iteration 3 :  0  0  0  0  0 +1 +1 +1 +1  0
  // sequence    : +3  -  - +7  - -3  -  - -7 -1  0
  //                              +1  
  // prefix sum  :  3  3  3 10 10  8  8  8  1  0  0
  // maximum     :  3  3  3 10 10 10 10 10 10 10 10

function arrayManipulation(n, queries) {
  // 1. Create an array, size of n, filled with 0
  let array = new Array(n+1).fill(0);

  // 2. Loop through queries and add k at a - 1 and subtract k at b
  queries.forEach(query => {
    let a = query[0];
    let b = query[1];
    let k = query[2];

    array[a - 1] += k;
    array[b] -= k;
  })

  // 3. Calculate prefix sum & find the maximum value
  let temp_sum = 0;
  let max = 0;
  array.forEach(num => {
    temp_sum += num;
    max = Math.max(max, temp_sum);
  })

  // 4. Return the maximum value
  return max;
}

console.log(arrayManipulation(10, [[1,5,3],[4,8,7],[6,9,1]]));