fetch('navbar.html')
.then(response => response.text())
.then(data => {
    document.getElementById('navbar-placeholder').innerHTML = data;
})
.catch(error => console.error('Error loading navbar:', error));

fetch('footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
})
.catch(error => console.error('Error loading navbar:', error));

document.addEventListener('DOMContentLoaded', function() {
    const slideTrack = document.querySelector('.slide-track');
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth;
    const cloneSlides = Array.from(slides).map(slide => slide.cloneNode(true));
    cloneSlides.forEach(clone => slideTrack.appendChild(clone));
    
    // Function to restart the animation
    slideTrack.addEventListener('animationiteration', () => {
        slideTrack.style.animation = 'none';
        slideTrack.offsetHeight; /* trigger reflow */
        slideTrack.style.animation = null; 
    });

    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                this.querySelector('i').classList.remove('fa-chevron-up');
                this.querySelector('i').classList.add('fa-chevron-down');
            } else {
                answer.style.display = 'block';
                this.querySelector('i').classList.remove('fa-chevron-down');
                this.querySelector('i').classList.add('fa-chevron-up');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.card2-right .stat h3');

    const updateCount = (counter) => {
        const target = +counter.getAttribute('data-target');
        let count = 0; // Start from 0

        const increment = Math.ceil(target / 100); // Increment value
        const duration = 2500; // Duration of animation
        const stepTime = Math.abs(Math.floor(duration / target)); // Time per step

        const animate = () => {
            if (count < target) {
                count += increment;
                counter.innerText = count > target ? target : count; // Ensure it doesn't exceed target
                setTimeout(animate, stepTime);
            } else {
                counter.innerText = target; // Final value
            }
        };

        animate();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start counting animation
                updateCount(entry.target);
                // Stop observing after animation starts
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Adjust the threshold as needed

    counters.forEach(counter => {
        counter.setAttribute('data-target', counter.innerText); // Set target value
        counter.innerText = '0'; // Initial value
        observer.observe(counter); // Start observing
    });
});