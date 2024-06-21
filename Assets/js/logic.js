const toggle = document.getElementById('toggle');
const toggleDot = document.querySelector('.toggle-dot');

toggle.addEventListener('change', function () {
    if (toggle.checked) {
        toggleDot.style.transform = 'translateX(100%)';
        toggleDot.style.backgroundColor = '#f6e05e'; // Change color for the dot when toggled
    } else {
        toggleDot.style.transform = 'translateX(0)';
        toggleDot.style.backgroundColor = 'gray'; // Reset color for the dot when untoggled
    }
});