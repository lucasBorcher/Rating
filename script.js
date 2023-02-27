const container = document.querySelector(".container");
const container2 = document.querySelector(".container2")
const submit = document.getElementById("submit");
const divs = document.querySelectorAll(".rating-number");
const result = document.getElementById("result");
const fejl = document.getElementById("fejl");
let selectedDiv = false;
submit.addEventListener("click", function () {
  if (selectedDiv) {
    container.style.display = "none";
    container2.style.display = "flex";
    console.log("Clicked!");
  } else {
    fejl.textContent = 'You need to select a rating before submitting'
    console.log("fejl");
  }
});


divs.forEach(function(div) {
  div.addEventListener("click", function() {

    divs.forEach(function(div) {
      div.classList.remove("active");
    });

  
    this.classList.add("active");
    const value = this.getAttribute("data-value");
    result.textContent = 'You selected ' +value +' out of 5';
    selectedDiv = true;

  });
});
