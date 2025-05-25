// Navigation handling
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = e.target.getAttribute('href');
        window.location.href = targetPage;
    });
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');

// Star dragging functionality
let draggedStar = null;

// Initialize star positions and animations
const stars = document.querySelectorAll('.star');
stars.forEach((star, index) => {
    const colors = ['#FFD700', '#FF69B4', '#4169E1', '#FF4500', '#9400D3', '#00FF7F', '#FF1493', '#00BFFF'];
    const color = colors[index % colors.length];
    star.style.backgroundColor = color;
    
    // Random initial position
    const container = star.closest('.stars-container');
    const rect = container.getBoundingClientRect();
    star.style.left = `${Math.random() * rect.width - 30}px`;
    star.style.top = `${Math.random() * rect.height - 30}px`;
    
    // Add random animation properties
    const randomDelay = Math.random() * 5;
    const randomDuration = 5 + Math.random() * 3;
    const randomRotation = Math.random() * 360;
    
    // Add random horizontal and vertical offsets
    const randomXOffset = Math.random() * 50 - 25; // -25 to 25 pixels
    const randomYOffset = Math.random() * 50 - 25; // -25 to 25 pixels
    
    star.style.animation = `float ${randomDuration}s linear ${randomDelay}s infinite`;
    star.style.transform = `translate(${randomXOffset}px, ${randomYOffset}px) rotate(${randomRotation}deg)`;
});

// Handle star dragging
document.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('draggable')) {
        draggedStar = e.target;
        draggedStar.style.cursor = 'grabbing';
        
        // Prevent text selection
        e.preventDefault();
    }
});

document.addEventListener('mousemove', (e) => {
    if (draggedStar) {
        const container = draggedStar.closest('.stars-container');
        const rect = container.getBoundingClientRect();
        
        // Calculate position relative to container
        const x = e.clientX - rect.left - draggedStar.offsetWidth / 2;
        const y = e.clientY - rect.top - draggedStar.offsetHeight / 2;
        
        // Keep star within container bounds
        const maxX = rect.width - draggedStar.offsetWidth;
        const maxY = rect.height - draggedStar.offsetHeight;
        
        draggedStar.style.left = `${Math.max(0, Math.min(maxX, x))}px`;
        draggedStar.style.top = `${Math.max(0, Math.min(maxY, y))}px`;
    }
});

document.addEventListener('mouseup', () => {
    if (draggedStar) {
        draggedStar.style.cursor = 'grab';
        draggedStar = null;
    }
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
window.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navLinks.classList.remove('active');
        }
    });
});
