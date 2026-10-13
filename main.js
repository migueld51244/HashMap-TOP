import { HashMap } from "./hashMap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set("lion", "orange");
test.set("ice cream", "colorful");

test.set("moon", "silver");

test.clear();
test.set("car", "red");
test.set("orange", "orange");
test.set("apple", "green");
test.has("orange");
test.remove("orange");

console.log(test.capacity);
console.log(test.length());
