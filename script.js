// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button click animation for the portfolio button
document.querySelector('.hero-section button').addEventListener('click', function () {
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
});

// Add hover effect to skills progress bars
document.querySelectorAll('.skills-category ul li').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.backgroundColor = '#2e4053';
        skill.style.color = 'white';
    });
    skill.addEventListener('mouseout', () => {
        skill.style.backgroundColor = '#e6e6e6';
        skill.style.color = 'black';
    });
});

// Social icons animation
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'rotate(10deg) scale(1.2)';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'rotate(0deg) scale(1)';
    });
});

// Contact form submission simulation
const contactSection = document.querySelector('#contact');
if (contactSection) {
    contactSection.addEventListener('click', () => {
        alert('Thank you for reaching out! I will get back to you soon.');
    });
}
