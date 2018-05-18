function cakeThief(capacity, cakeTypes) {
  //fill an array of possible capacities (up to input capacity) with 0
  let maxProfitCapacity = new Array(capacity + 1).fill(0);
  let maxProfit = 0;
  let returnMax = 0;
  //find maximum profit per capacity
  for (let i = 1; i < maxProfitCapacity.length; i++, maxProfit = 0) {
    for (let j = 0; j < cakeTypes.length; j++) {
      let difference = i  - cakeTypes[j].weight;
      if (difference >= 0) {
        let profit = cakeTypes[j].value + maxProfitCapacity[difference];
        if (profit > maxProfit) maxProfit = profit;
      }
    }
    maxProfitCapacity[i] = maxProfit;
    if (maxProfit > returnMax) returnMax = maxProfit;
  }
  return returnMax;
}

let cakeTypes = [
  {weight: 7, value: 160},
  {weight: 3, value: 90},
  {weight: 2, value: 15},
];

console.log('answer', cakeThief(20, cakeTypes))