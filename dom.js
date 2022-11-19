// Selection by tag name
let elms = document.getElementsByTagName("main");

// by classes
elms = document.getElementsByClassName("p-2");

// by id
let el = document.getElementById("container");

// create element
const p = document.createElement("p");
p.innerText = "paragraphe creacted in js";
let nodes = el.children;

// get elements properties
const cl = el.classList;

// add class
el.classList.add("wrapper");

//
el = document.querySelector(".wrapper");
el.style.color = "blue";
el.style.fontFamily = "sans-serif";

// Events
// 1. click
el.addEventListener("click", (e) => {
  el.style.color = "black";
  document.querySelector(".p-2").style.display = "none";
  console.log(e);
});
