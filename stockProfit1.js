let maxProfit = function(prices) {
  let max = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    prices[i] = prices[i + 1] - prices[i];
  }
  for (let i = 1; i < prices.length - 1; i++) {
    if (prices[i - 1] > 0) prices[i] += prices[i - 1];
  }
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] > max) max = prices[i];
  }
  return max;
};
