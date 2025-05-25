// Particle Effect
const particlesContainer = document.createElement('div');
particlesContainer.className = 'particles';
document.body.appendChild(particlesContainer);

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    // Random size variation
    const size = 2 + Math.random() * 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random position
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    
    // Random delay
    const delay = Math.random() * 10;
    particle.style.animationDelay = `${delay}s`;
    
    particlesContainer.appendChild(particle);
}

// Create multiple particles
for (let i = 0; i < 50; i++) {
    createParticle();
}

// Handle window resize
window.addEventListener('resize', () => {
    particlesContainer.innerHTML = '';
    for (let i = 0; i < 50; i++) {
        createParticle();
    }
});
