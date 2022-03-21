// Calculate Sq footage
let length = document.querySelector("#length-input");
let width = document.querySelector("#width-input");
let output = document.querySelector("#displayResult");
let calcBtn1 = document.querySelector("#calcBtn1");

calcBtn1.addEventListener("click", () => {
  let result = length.value * width.value;
  output.innerHTML = result + " Square Feet";
});

// Calculate Estimate
let totalSQFT = document.querySelector("#totalSQFT");
let estimateResult = document.querySelector("#displayResult2");
let calcBtn2 = document.querySelector("#calcBtn2");

calcBtn2.addEventListener("click", () => {
  let result2 = totalSQFT.value * 23;
  estimateResult.innerHTML = "$" + result2 + " to complete your project!";
});
