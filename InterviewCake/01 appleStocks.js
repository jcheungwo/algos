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
