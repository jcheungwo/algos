let maxProfit = function(prices) {
  let max = 0;
  if (prices.length < 2) return max;
  for (let i = 1, min = prices[0]; i < prices.length; i++) {
    let current = prices[i];
    max = Math.max(max, current - min);
    min = Math.min(min, current);
  }
  return max;
};

/* **Initial Solution** 
O(n) Time, O(1) Space

let maxProfit = function(prices) {
  for (let i = 0; i < prices.length - 1; i++) {
    prices[i] = prices[i + 1] - prices[i];
  }
  for (let i = 1; i < prices.length - 1; i++) {
    if (prices[i - 1] > 0) prices[i] += prices[i - 1];
    max = Math.max(max, prices[i]);
  }
}

*/