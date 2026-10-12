class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity);
  }
}

const a = new HashMap();

console.log(a.buckets);
