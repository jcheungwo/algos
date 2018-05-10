// Implement methods to track the max, min, mean, and mode

class TempTracker {
  constructor() {
    this.readings = new Array(111).fill(0);
    this.total = 0;
    this.number = 0;
    this.mean = null;
    this.max = null;
    this.min = null;
    this.mode = null;
  }

  insert(temperature) {
    if (!this.min) {
      this.max = this.min = this.mode = this.mean = temperature;
    } else if (this.max < temperature) {
      this.max = temperature;
    } else if (this.min > temperature) {
      this.min = temperature;
    }
    this.number++;
    this.total += temperature;
    this.mean = this.total / this.number;
    this.readings[temperature]++;
    if (this.readings[this.mode] < this.readings[temperature]) {
      this.mode = temperature;
    }
  }

  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;
  }

  getMean() {
    return this.mean;
  }
  
  getMode() {
    return this.mode;
  }
}

// Tests

const t = new TempTracker();

// Step 1
t.insert(50);
assertEquals(t.getMax(), 50, 'step 1 - max');
assertEquals(t.getMin(), 50, 'step 1 - min');
assertEquals(t.getMean(), 50, 'step 1 - mean');
assertEquals(t.getMode(), 50, 'step 1 - mode');

// Step 2
t.insert(80);
assertEquals(t.getMax(), 80, 'step 2 - max');
assertEquals(t.getMin(), 50, 'step 2 - min');
assertEquals(t.getMean(), 65, 'step 2 - mean');
assertEquals(t.getMode() === 50 || t.getMode() === 80, true, 'step 2 - mode');

// Step 3
t.insert(80);
assertEquals(t.getMax(), 80, 'step 3 - max');
assertEquals(t.getMin(), 50, 'step 3 - min');
assertEquals(t.getMean(), 70, 'step 3 - mean');
assertEquals(t.getMode(), 80, 'step 3 - mode');

// Step 4
t.insert(30);
assertEquals(t.getMax(), 80, 'step 4 - max');
assertEquals(t.getMin(), 30, 'step 4 - min');
assertEquals(t.getMean(), 60, 'step 4 - mean');
assertEquals(t.getMode(), 80, 'step 4 - mode');

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}