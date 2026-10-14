# HashMap-TOP

A small JavaScript implementation of a hash map built as part of The Odin Project.

This project creates a custom `HashMap` class with common dictionary-style methods such as `set`, `get`, `has`, `remove`, `clear`, `keys`, `values`, and `entries`.

It also includes basic resizing based on a load factor so the map can grow when it starts to get full.

## Example

```js
import { HashMap } from './hashMap.js';

const map = new HashMap();
map.set('apple', 'red');
map.set('banana', 'yellow');

console.log(map.get('apple')); // red
console.log(map.has('banana')); // true
```

## Run the demo

```bash
node main.js
```
