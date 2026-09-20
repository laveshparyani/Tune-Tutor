// Initializes navbar interactivity. Must be called AFTER navbar.html has been
// injected into the page (scripts inside innerHTML-injected markup never run,
// and the elements don't exist until injection completes).
function initNavbar() {
    const trinityToggle = document.querySelector('.trinity-toggle');
    const trinityDropdown = document.querySelector('.trinity-dropdown');
    const rockschoolToggle = document.querySelector('.rockschool-toggle');
    const rockschoolDropdown = document.querySelector('.rockschool-dropdown');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (trinityToggle && trinityDropdown) {
        trinityToggle.addEventListener('click', function (e) {
            e.preventDefault();
            trinityDropdown.classList.toggle('hidden');
            trinityDropdown.classList.toggle('block');
        });
    }

    if (rockschoolToggle && rockschoolDropdown) {
        rockschoolToggle.addEventListener('click', function (e) {
            e.preventDefault();
            rockschoolDropdown.classList.toggle('hidden');
            rockschoolDropdown.classList.toggle('block');
        });
    }

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }
}

// Expose globally so page/loader scripts can call it after injecting the navbar.
window.initNavbar = initNavbar;
