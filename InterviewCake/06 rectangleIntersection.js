function findRectangularOverlap(rect1, rect2) {
  // Calculate the overlap between the two rectangles
  let left, right, bottom, top, leftX, bottomY, width, height;
  // set left and right rectangle
  if(rect1.leftX < rect2.leftX) {
    [left, right] = [rect1, rect2];
  }else{
    [left, right] = [rect2, rect1];
  }
  if(rect1.bottomY < rect2.bottomY) {
    [bottom, top] = [rect1, rect2];
  }else{
    [bottom, top] = [rect2, rect1];
  }
  // check for same rectangle
  if(
      left.leftX === right.leftX &&
      left.bottomY === right.bottomY &&
      left.width === right.width &&
      left.height === right.height
    ){
    return left;
  };
  // width and height can't be greater than width of right most triangle and height of top triangle
  width = Math.min(left.leftX + left.width - right.leftX, right.width);
  height = Math.min(bottom.bottomY + bottom.height - top.bottomY, top.height);
  // check for no overlap
  if(width <= 0 || height <= 0){
    return {leftX: 0, bottomY: 0, width: 0, height: 0};
  };
  leftX = right.leftX;
  bottomY = top.bottomY;
  return {leftX, bottomY, width, height};
}

// Tests

let desc = 'overlap along both axes';
let rect1 = {leftX: 1, bottomY: 1, width: 6, height: 3};
let rect2 = {leftX: 5, bottomY: 2, width: 3, height: 6};        
let actual = findRectangularOverlap(rect1, rect2);
let expected = {leftX: 5, bottomY: 2, width: 2, height: 2};
assertObjectEquals(actual, expected, desc);

desc = 'one rectangle inside another';
rect1 = {leftX: 1, bottomY: 1, width: 6, height: 6};
rect2 = {leftX: 3, bottomY: 3, width: 2, height: 2};
actual = findRectangularOverlap(rect1, rect2);
expected = {leftX: 3, bottomY: 3, width: 2, height: 2};
assertObjectEquals(actual, expected, desc);

desc = 'both rectangles the same';
rect1 = {leftX: 2, bottomY: 2, width: 4, height: 4};
rect2 = {leftX: 2, bottomY: 2, width: 4, height: 4};
actual = findRectangularOverlap(rect1, rect2);
expected = {leftX: 2, bottomY: 2, width: 4, height: 4};
assertObjectEquals(actual, expected, desc);

desc = 'touch on horizontal edge';
rect1 = {leftX: 1, bottomY: 2, width: 3, height: 4};
rect2 = {leftX: 2, bottomY: 6, width: 2, height: 2};
actual = findRectangularOverlap(rect1, rect2);
expected = {leftX: 0, bottomY: 0, width: 0, height: 0};
assertObjectEquals(actual, expected, desc);

desc = 'touch on vertical edge';
rect1 = {leftX: 1, bottomY: 2, width: 3, height: 4};
rect2 = {leftX: 4, bottomY: 3, width: 2, height: 2};
actual = findRectangularOverlap(rect1, rect2);
expected = {leftX: 0, bottomY: 0, width: 0, height: 0};
assertObjectEquals(actual, expected, desc);

desc = 'touch at a corner';
rect1 = {leftX: 1, bottomY: 1, width: 2, height: 2};
rect2 = {leftX: 3, bottomY: 3, width: 2, height: 2};
actual = findRectangularOverlap(rect1, rect2);
expected = {leftX: 0, bottomY: 0, width: 0, height: 0};
assertObjectEquals(actual, expected, desc);

desc = 'no overlap';
rect1 = {leftX: 1, bottomY: 1, width: 2, height: 2};
rect2 = {leftX: 4, bottomY: 6, width: 3, height: 6};
actual = findRectangularOverlap(rect1, rect2);
expected = {leftX: 0, bottomY: 0, width: 0, height: 0};
assertObjectEquals(actual, expected, desc);

function assertObjectEquals(a, b, desc) {
  const objectA = JSON.stringify(a);
  const objectB = JSON.stringify(b);
  if (objectA !== objectB) {
      console.log(`${desc} ... FAIL: ${objectA} != ${objectB}`)
  } else {
    console.log(`${desc} ... PASS`);
  }
}