/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

/* 1. Find an element & add two different classes */
const headerDivs = document.querySelectorAll("header div");
const addTwoClasses = headerDivs[1];
addTwoClasses.classList.add('borange', 'goth');

/* 2. Remove only one of the two, new classes */
addTwoClasses.classList.remove('goth');

/* 3. Add a new attribute to a new element */
const firstPack = document.getElementById('pack01');
firstPack.setAttribute("data-foo", "bar");

/* 4. Request the value of the attribute */
const firstPackDataFoo = firstPack.getAttribute('data-foo');
console.log(firstPackDataFoo); // 'bar'

/* 5. Change the value of the attribute that was added */
firstPack.setAttribute('data-foo', 'baz');
console.log(firstPack.getAttribute('data-foo')); // 'baz'

/* 6. Add some inline CSS to an element by specifying the style property and setting its value */
const packTwoHeader = document.getElementById('pack02').querySelector('h1');
// packTwoHeader.style.cssText = 'background-color: darkorange; color: darkblue';
packTwoHeader.style.backgroundColor = 'darkorange';
packTwoHeader.style.color = 'darkblue';

/* 7. Query the style property of an element in the console to get a list of all the style properties available */
console.log(packTwoHeader.style.cssText);
