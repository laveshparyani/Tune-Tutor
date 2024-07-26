document.addEventListener('DOMContentLoaded', function() {
    const trinityToggle = document.querySelector('.trinity-toggle');
    const trinityDropdown = document.querySelector('.trinity-dropdown');
    const rockschoolToggle = document.querySelector('.rockschool-toggle');
    const rockschoolDropdown = document.querySelector('.rockschool-dropdown');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    trinityToggle.addEventListener('click', function(e) {
        e.preventDefault();
        if (trinityDropdown.classList.contains('hidden')) {
            trinityDropdown.classList.remove('hidden');
            trinityDropdown.classList.add('block');
        } else {
            trinityDropdown.classList.add('hidden');
            trinityDropdown.classList.remove('block');
        }
    });

    rockschoolToggle.addEventListener('click', function(e) {
        e.preventDefault();
        if (rockschoolDropdown.classList.contains('hidden')) {
            rockschoolDropdown.classList.remove('hidden');
            rockschoolDropdown.classList.add('block');
        } else {
            rockschoolDropdown.classList.add('hidden');
            rockschoolDropdown.classList.remove('block');
        }
    });

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
