/**
 * Challenge: Build and modify an array
 * x Build an array with 8 items
 * x Remove the last item
 * x Add the last item as the first item on the array
 * x Sort the items by alphabetical order
 * x Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const challenge = [
  "coffee",
  "ring",
  "water",
  "headphones",
  "book",
  "notebook",
  "sticker",
  "charger",
];

if (challenge.length < 8) {
  throw "less than 8!";
} else {
  console.log("challenge array length: ", challenge.length, challenge);
}

// remove the last item
const popped = challenge.pop();
console.log("removed last item: ", popped);

// add the last item as the first item on the array
console.log("last item: ", challenge[challenge.length - 1]);
console.log("first item: ", challenge[0]);

challenge.unshift(challenge.pop());

console.log("first item after update: ", challenge[0]);
console.log("second item after update: ", challenge[1]);

// sort the items by alphabetical order
console.log("before the sort: ", challenge);
challenge.sort();
console.log("after the sort: ", challenge);

// use the find() method to find a specific item in the array
console.log(challenge.find((e) => e === "book"));
console.log(
  "looking for something that starts with 'w': ",
  challenge.find((e) => e.startsWith("w"))
);
console.log(
  "looking for a cat",
  challenge.find((e) => e === "cat")
);

// remove the item you found using the find method from the array
console.log("before removal: ", challenge);
console.log("spliced out", challenge.splice(challenge.indexOf("book"), 1));
console.log("after removal: ", challenge);
