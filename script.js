// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = 'Toggle Dark Mode';
darkModeToggle.className = 'fixed bottom-4 right-4 bg-indigo-500 text-white p-2 rounded';
darkModeToggle.onclick = toggleDarkMode;
document.body.appendChild(darkModeToggle);

// Fade-in animations on scroll
const fadeInElements = document.querySelectorAll('.fade-in-up');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, { threshold: 0.1 });

fadeInElements.forEach(el => observer.observe(el));
