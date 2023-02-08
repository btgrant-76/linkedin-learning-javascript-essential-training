/**
 * Practice: Play with event listeners
 * x read through the MDN Event reference guide; make note of any events that I want to test out
 * x Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * x Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * x Add an event listener to each grid cell to change its background color when it is clicked.
 * x Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const setUpOutlineListeners = (el) => {
  el.addEventListener("mouseenter", () => el.classList.add("grid-outline"));
  el.addEventListener("mouseleave", () => el.classList.remove("grid-outline"));
};

const setUpClickedListeners = (el) => {
  el.addEventListener("click", () => el.classList.toggle("highlighted"));
};

const gridContainer = document.querySelector(".grid");
setUpOutlineListeners(gridContainer);

document.querySelectorAll(".cell").forEach((c) => {
  // console.log(c);
  setUpOutlineListeners(c);
  setUpClickedListeners(c);
});

const container = document.querySelector("body");
container.addEventListener("keydown", (event) => {
  // console.log("pressed", event.key, event.code);
  if (event.code === "KeyD") {
    container.classList.toggle("dark");
  }
});
