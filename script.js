const sections = document.querySelectorAll('.map-section');
const navLinks = document.querySelectorAll('nav ul li a');

const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 150) {
            section.classList.add('visible');
        }
    });
};

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
        });
        target.classList.add('highlight');
        setTimeout(() => target.classList.remove('highlight'), 2000);
    });
});

window.addEventListener('scroll', revealSection);
revealSection();
