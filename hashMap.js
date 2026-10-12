class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = new Array(this.capacity);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    // Get the index of the key
    const index = this.hash(key);

    if (this.buckets[index] === undefined) {
      this.buckets[index] = [[key, value]];
      // Handle existing key
    } else if (this.buckets[index].length >= 1) {
      for (const pair of this.buckets[index]) {
        if (pair[0] === key) {
          pair[1] = value;
          return;
        }
      }
      this.buckets[index].push([key, value]);
    }
  }
}

const a = new HashMap();

a.set("banana", "joe");
a.set("banana", "me");
a.set("Banana", "me");
a.set("carl", "cj");
console.log(a.buckets);
