/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    // methods cannot be declared using arrow functions
    console.log("this.volume in the method:", this.volume);
    this.volume = volume;
    console.log("this.volume after update:", this.volume);
    // (function () {
    //   // the function declaration results in this function being hoisted to the global scope where `this` refers to `window`
    //   console.log("this.volume in nested function:", this.volume);
    // })();
    (() => {
      // the arrow function declaration is scoped to the block in which it's declared
      console.log("this.volume in nested function:", this.volume);
    })();
  },
};

console.log(greenPack.newVolume(5));
