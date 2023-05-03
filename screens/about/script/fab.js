// get texts from json and appyly them into html elements.
var greet = document.getElementById("greeting");
var FAB = document.getElementById("floating-action-button");
FAB.addEventListener('click', function () {
    greet.scrollIntoView({ behavior: "smooth" });
});