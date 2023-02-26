const container = document.querySelector(".container");
const container2 = document.querySelector(".container2")
const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
    container.style.display = "none";
    container2.style.display = "flex";
    console.log("Clicked!");
});
