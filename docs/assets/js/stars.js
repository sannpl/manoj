document.addEventListener('DOMContentLoaded', function() {
    // Create containers
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);

    const bubblesContainer = document.createElement('div');
    bubblesContainer.className = 'bubbles';
    document.body.appendChild(bubblesContainer);

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Star Variables
    const starCount = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--star-count'));
    const starSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--star-size'));
    
    // Bubble Variables
    const bubbleCount = 30; // Number of bubbles
    const bubbleSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bubble-size'));

    // Create stars
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Randomize star properties
        star.style.left = Math.random() * viewportWidth + 'px';
        star.style.top = Math.random() * viewportHeight + 'px';
        
        // Set star size
        star.style.width = starSize + 'px';
        star.style.height = starSize + 'px';
        
        // Random color
        const colorIndex = Math.floor(Math.random() * 10) + 1;
        star.style.color = getComputedStyle(document.documentElement).getPropertyValue(`--star-color-${colorIndex}`);
        
        // Random animation duration
        star.style.animationDuration = Math.random() * 2 + 3 + 's';
        star.style.animationDelay = -Math.random() * 5 + 's';
        
        // Add hover effect
        star.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.opacity = '1';
            this.style.boxShadow = '0 0 40px rgba(255, 255, 255, 0.8)';
        });
        
        star.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.opacity = '0.8';
            this.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.5)';
        });
        
        starsContainer.appendChild(star);
    }

    // Create bubbles
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Randomize bubble properties
        bubble.style.left = Math.random() * viewportWidth + 'px';
        bubble.style.bottom = Math.random() * viewportHeight + 'px';
        
        // Set bubble size
        bubble.style.width = bubbleSize + 'px';
        bubble.style.height = bubbleSize + 'px';
        
        // Random movement direction
        const direction = Math.floor(Math.random() * 4); // 0: up, 1: down, 2: left, 3: right
        
        // Add direction class
        switch(direction) {
            case 0:
                bubble.classList.add('up');
                break;
            case 1:
                bubble.classList.add('down');
                break;
            case 2:
                bubble.classList.add('left');
                break;
            case 3:
                bubble.classList.add('right');
                break;
        }
        
        // Random speed
        const speed = Math.random() * 2 + 1; // 1-3 seconds
        bubble.style.animationDuration = speed + 's';
        
        // Random delay
        bubble.style.animationDelay = -Math.random() * 10 + 's';
        
        bubblesContainer.appendChild(bubble);
    }

    // Update positions on window resize
    window.addEventListener('resize', function() {
        const newViewportWidth = window.innerWidth;
        const newViewportHeight = window.innerHeight;
        
        // Update stars
        starsContainer.querySelectorAll('.star').forEach(star => {
            star.style.left = Math.random() * newViewportWidth + 'px';
            star.style.top = Math.random() * newViewportHeight + 'px';
        });

        // Update bubbles
        bubblesContainer.querySelectorAll('.bubble').forEach(bubble => {
            bubble.style.left = Math.random() * newViewportWidth + 'px';
            bubble.style.bottom = Math.random() * newViewportHeight + 'px';
        });
    });
});
