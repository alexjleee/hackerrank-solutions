// Input & Output Sample --------------------
  // s = ifailuhkqq
  // returns 3
    // [i,i],[q,q],[ifa,fai]
  // s = kkkk
  // returns 10
    // [k,k],[k,k],[k,k],[k,k],[k,k],[k,k],[kk,kk],[kk,kk],[kk,kk],[kkk,kkk]

function sherlockAndAnagrams(s) {
  // 1. Create empty variables
  let count = 0
  const parts = []
  // 2. Push sorted parts of the string s to the parts array
  for (let i = 1, n = s.length; i < n; i++) {
    for (let j = 0, m = n - i; j <= m; j++) {
      parts.push(s.slice(j, j+i).split("").sort().join(""))
    }
  }
  // 3. Compare elements in the parts array and increment count variable when there's a duplicate
  for (let i = 0, n = parts.length - 1; i < n; i++) {
    for (let j = i + 1, m = parts.length; j < m; j++) {
      if (parts[i] === parts[j]) count++
    }
  }
  // 4. Return count variable   
  return count
}