/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Keyboard from "./Keyboard.js";
import Key from "./Key.js";

const a = new Key("a");
const b = new Key("b");
const c = new Key("c");
const d = new Key("d");

const corne = new Keyboard([a, b, c, d], []);

console.log("The Corne keyboard has key count:  ", corne.getKeyCount());
console.log("The Corne keyboard has encoder count:  ", corne.getEncoderCount());
// console.log(`The Corne keyboard has {corne.getEncoderCount()} encoder(s)`);

for (const k of corne.keys) {
  k.press();
}
