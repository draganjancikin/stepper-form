// index of first step
let currentStep = 0;

// show curent step
showStep(currentStep);

function showStep(step) {
  console.log("Show step!");
  // show current step
  document.querySelectorAll(".step")[step].classList.remove("hidden");

  // show/hide Next button
  document.querySelector("#next-btn").classList.remove("hidden");

}