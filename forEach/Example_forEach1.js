"use strict"
// RESET BUTTON:
const reloadPage = document.getElementById("reload");
reloadPage.addEventListener("click", () => location.reload());

// VARIANT 1
function runMethod() {

  var fruits = ["apple", "orange", "cherry"];

  fruits.forEach(myFunction);

  function myFunction(aFruit) {
    const txt = aFruit;
    const ol = document.getElementById("ul-tag");
    let li = document.createElement("li");
    li.textContent = txt;
    ol.appendChild(li)
  }

};
const runExample = document.getElementById("run-method-btn");
runExample.addEventListener("click", runMethod);