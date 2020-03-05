// indexes of previus and current step
let previousStep = null;
let currentStep = 0;

// buttons
let nextBtn = document.querySelector("#next-btn");
let submitBtn = document.querySelector("#submit-btn");

let stepDivs = document.querySelectorAll(".step");

// show curent step
showStep(previousStep, currentStep);


function showStep(prev, next) {
  
  // hide previus step
  if(prev || prev === 0){
    stepDivs[prev].classList.add("hidden");
  }
  
  // show current step
  stepDivs[next].classList.remove("hidden");

  // show/hide Next button
  if(next < stepDivs.length - 1) {
    nextBtn.classList.remove("hidden");
  } else {
    nextBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  }
  
}


function nextStep(arg) {
  
  // update indexes of previus and current step
  previousStep = currentStep;
  currentStep += arg;

  // show curent step
  showStep(previousStep, currentStep);
}
