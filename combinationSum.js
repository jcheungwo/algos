var combinationSum = function(candidates, target) {
  let possibilities = new Array(target + 1).fill(0);
  let hashPoss = {};
  possibilities[0] = 1;
  for (let i = 1; i <= candidates.length; i++) {
    for (let candidate of candidates) {
      if (i >= candidate) {
        let value = possibilities[i - candidate]
        possibilities[i] += value;
        if (value > 0) {
          if (hashPoss[i]) hashPoss[i].push([Math.min(candidate, i - candidate), Math.max(candidate,i - candidate)])
        }
      }
    }
  }
};