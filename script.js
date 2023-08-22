// script.js
const textArea = document.getElementById("textArea");
const calculateButton = document.getElementById("calculateButton");
const counter = document.getElementById("counter");

calculateButton.addEventListener("click", () => {
  const text = textArea.value;
  const words = text.split(/\s+/).filter(word => word !== "").length;
  const sentences = text.split(/[.!?]+/).filter(sentence => sentence !== "").length;
  const characters = text.length;

  counter.textContent = `Words: ${words} | Sentences: ${sentences} | Characters: ${characters}`;
});
const boat = document.getElementById("boat");

boat.addEventListener("click", () => {
  boat.classList.toggle("clicked");
});

