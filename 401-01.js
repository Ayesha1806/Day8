// Get the input element and the output paragraph element
var inputElement = document.getElementById("myInput");
var outputElement = document.getElementById("output");

// Add event listener to the input element
inputElement.addEventListener("input", function() {
  // Update the text content of the output paragraph with the value of the input
  outputElement.textContent = inputElement.value;
});
