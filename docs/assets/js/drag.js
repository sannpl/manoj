// Drag functionality for stars and bubbles
let isDragging = false;
let currentDragElement = null;
let initialMouseX = 0;
let initialMouseY = 0;
let initialElementX = 0;
let initialElementY = 0;

// Add event listeners for both stars and bubbles
document.addEventListener('mousedown', (e) => {
    const target = e.target;
    if (target.classList.contains('star') || target.classList.contains('bubble')) {
        isDragging = true;
        currentDragElement = target;
        
        // Store initial positions
        initialMouseX = e.clientX;
        initialMouseY = e.clientY;
        initialElementX = parseFloat(target.style.left) || 0;
        initialElementY = parseFloat(target.style.top) || 0;
        
        // Add dragging class
        target.classList.add('dragging');
        
        // Prevent text selection
        e.preventDefault();
    }
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging || !currentDragElement) return;
    
    // Calculate new position
    const deltaX = e.clientX - initialMouseX;
    const deltaY = e.clientY - initialMouseY;
    
    // Update element position
    currentDragElement.style.left = `${initialElementX + deltaX}px`;
    currentDragElement.style.top = `${initialElementY + deltaY}px`;
});

document.addEventListener('mouseup', () => {
    if (isDragging && currentDragElement) {
        // Remove dragging class
        currentDragElement.classList.remove('dragging');
    }
    
    // Reset drag state
    isDragging = false;
    currentDragElement = null;
});

// Handle touch events for mobile devices
document.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    const target = touch.target;
    if (target.classList.contains('star') || target.classList.contains('bubble')) {
        isDragging = true;
        currentDragElement = target;
        
        // Store initial positions
        initialMouseX = touch.clientX;
        initialMouseY = touch.clientY;
        initialElementX = parseFloat(target.style.left) || 0;
        initialElementY = parseFloat(target.style.top) || 0;
        
        // Add dragging class
        target.classList.add('dragging');
        
        // Prevent scrolling
        e.preventDefault();
    }
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging || !currentDragElement) return;
    
    const touch = e.touches[0];
    
    // Calculate new position
    const deltaX = touch.clientX - initialMouseX;
    const deltaY = touch.clientY - initialMouseY;
    
    // Update element position
    currentDragElement.style.left = `${initialElementX + deltaX}px`;
    currentDragElement.style.top = `${initialElementY + deltaY}px`;
    
    // Prevent scrolling
    e.preventDefault();
});

document.addEventListener('touchend', () => {
    if (isDragging && currentDragElement) {
        // Remove dragging class
        currentDragElement.classList.remove('dragging');
    }
    
    // Reset drag state
    isDragging = false;
    currentDragElement = null;
});
