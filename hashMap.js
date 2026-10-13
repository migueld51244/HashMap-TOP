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
    let bucket = this.buckets[index];

    if (bucket === undefined) {
      this.buckets[index] = [[key, value]];
      // Handle existing key
    } else if (bucket.length >= 1) {
      for (const pair of bucket) {
        if (pair[0] === key) {
          pair[1] = value;
          return;
        }
      }
      bucket.push([key, value]);
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (bucket === undefined) {
      return undefined;
    } else if (bucket.length >= 1) {
      for (const pair of bucket) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    }
    return undefined;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (bucket === undefined) {
      return false;
    } else if (bucket.length >= 1) {
      for (const pair of bucket) {
        if (pair[0] === key) {
          return true;
        }
      }
    }
    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    if (bucket === undefined) {
      return false;
    } else {
      for (const pair of bucket) {
        if (pair[0] === key) {
          bucket.splice(bucket.indexOf(pair), 1);
          return true;
        }
      }
    }
    return false;
  }

  length() {
    let length = 0;

    for (let i = 0; i < this.buckets.length; i++) {
      if (!this.buckets[i]) {
        continue;
      }
      const bucketLength = this.buckets[i].length;
      length += bucketLength;
    }
    return length;
  }
}

const a = new HashMap();

a.set("banana", "joe");
a.set("banana", "me");
a.set("Banana", "me");
a.set("carl", "cj");
a.set("random", "value");
console.log(a.has("carl"));
console.log(a.has("what"));
a.remove("banana");
