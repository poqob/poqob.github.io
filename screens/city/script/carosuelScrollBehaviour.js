// get carousel items
var components = document.getElementsByClassName('carousel-item');

// get sections in the page
var sections = document.getElementsByClassName('page-section');

// bind carousels with sections together
for (let index = 0; index < components.length; index++) {

    const element = components[index];
    const sctn = sections[index];
    element.addEventListener('click', function () {
        sctn.scrollIntoView({ behavior: "smooth" });
    });
}