var isSubtree = function(s, t) {
  let currentS;
  let queue = [s];
  while (queue.length) {
    currentS = queue.shift()
    if (currentS.left) queue.push(currentS.left);
    if (currentS.right) queue.push(currentS.right);
    if(currentS.val === t.val) {
      if (sTCheck(currentS, t)) return true;
    }
  }
  return false;
};

var sTCheck = function (s, t) {
  if (!s && !t) return true
  else if (!t) return false
  else if (!s) return false
  else if (s.val === t.val) return sTCheck(s.left, t.left) && sTCheck(s.right, t.right)
  else if (s.val !== t.val) return false
};
