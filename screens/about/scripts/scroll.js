//  scroll pilot
var components = document.getElementsByClassName('container-custom');

var currentComponentIndex = 0;
// Determine scroll direction
window.addEventListener('wheel', function (event) {
    var scrollDirection = event.deltaY > 0 ? 'down' : 'up';
    if (currentComponentIndex != components.length - 1)
        event.preventDefault(); // Prevent default scroll behavior
    else {
        if (scrollDirection == 'up')
            event.preventDefault();
    }



    // Update current component index based on scroll direction
    if (scrollDirection === 'down') {
        currentComponentIndex++;
        if (currentComponentIndex >= components.length) {
            currentComponentIndex = components.length - 1;
        }
    } else {
        currentComponentIndex--;
        if (currentComponentIndex < 0) {
            currentComponentIndex = 0;
        }
    }

    // Scroll to the selected component
    components[currentComponentIndex].scrollIntoView({ behavior: 'smooth' });
}, { passive: false }); // Set passive option to false

