const toggle = document.getElementById('toggle');
const toggleDot = document.querySelector('.toggle-dot');

toggle.addEventListener('change', function() {
  if (toggle.checked) {
    document.body.classList.add('dark-mode');
    toggleDot.style.transform = 'translateX(100%)';
    toggleDot.style.backgroundColor = '#f6e05e';
  } else {
    document.body.classList.remove('dark-mode');
    toggleDot.style.transform = 'translateX(0)';
    toggleDot.style.backgroundColor = '#cccccc';
  }
});
