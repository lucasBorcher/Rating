const container = document.querySelector(".container");
const container2 = document.querySelector(".container2")
const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
    container.style.display = "none";
    container2.style.display = "flex";
    console.log("Clicked!");
});

// Get all the div elements with class "myDiv"
const divs = document.querySelectorAll(".rating-number");

// Loop through each div element and add a click event listener to it
divs.forEach(function(div) {
  div.addEventListener("click", function() {
    // Remove the "active" class from all div elements
    divs.forEach(function(div) {
      div.classList.remove("active");
    });

    // Add the "active" class to the clicked div element
    this.classList.add("active");
    const value = this.getAttribute("data-value");
    result.textContent = 'You selected ' +value +' out of 5';

  });
});