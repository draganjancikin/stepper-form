// indexes of previus and current step
let previousStep = null;
let currentStep = 0;

// buttons
let nextBtn = document.querySelector("#next-btn");
let submitBtn = document.querySelector("#submit-btn");
let backBtn = document.querySelector("#back-btn");

let stepDivs = document.querySelectorAll(".step");

// show curent step
showStep(previousStep, currentStep);


function showStep(previous, current) {
  
  // hide previus step
  if(previous || previous === 0){
    stepDivs[previous].classList.add("hidden");
  }
  
  // show current step
  stepDivs[current].classList.remove("hidden");

  // show/hide Next and Submit buttons
  if(current < stepDivs.length - 1) {
    nextBtn.classList.remove("hidden");
    submitBtn.classList.add("hidden");
  } else {
    nextBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  }

  // show/hide Back button
  if(previous === null || current === 0 ) {
    backBtn.classList.add("hidden");
  } else {
    backBtn.classList.remove("hidden");
  }
  
}


function nextStep(arg) {

  // update indexes of previus and current step
  if(arg === -1 && currentStep === 0 ) {
    return;
  }
  previousStep = currentStep;
  currentStep += arg;

  // show curent step
  showStep(previousStep, currentStep);

}
