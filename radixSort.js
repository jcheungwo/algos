function radixSort(arr) {
  let buckets = new Array(10).fill([])
  let largestNum = arr[0]
  for (let num of arr) {
    if (num > largestNum) largestNum = num
  }
  largestNum = largestNum.toString().length
  for(let i = 0, divisor = 1; i < largestNum; i++, divisor *= 10) {
    while(arr.length) {
      let number = arr.shift()
      let temp = Math.floor(number % (divisor * 10) / divisor)
      buckets[temp].push(number)
    }
    for (let j = 0; j < buckets.length; j++) {
      while (buckets[j].length) {
        arr.push(buckets[j].shift())
      }
    }
  }
  return arr
}

var arr1 = [6, 7, 3, 1, 9, 12, 1]
var arr2 = [5, 1, 2, 6, 11, 0]
var arr3 = [10, 22, 23, 25, 14, 701, 16]

console.log('expect ', radixSort(arr1), ' to equal ', arr1.sort((a,b) => a - b))
console.log('expect ', radixSort(arr2), ' to equal ', arr2.sort((a,b) => a - b))
console.log('expect ', radixSort(arr3), ' to equal ', arr3.sort((a,b) => a - b))
