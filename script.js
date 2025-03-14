// Step 1: Get the container element
const container = document.querySelector('.items');

// Step 2: Create variables to track the drag
let isDragging = false; // To check if dragging is happening
let startX; // To store where the mouse started
let scrollStart; // To store the container's scroll position

// Step 3: When the mouse is pressed down
container.addEventListener('mousedown', (event) => {
  isDragging = true; // Start dragging
  container.classList.add('active'); // Add a class to change appearance (optional)

  // Save the starting position
  startX = event.pageX - container.offsetLeft; // Correct offset for container's position
  scrollStart = container.scrollLeft; // Initial scroll position

  // Prevent text selection while dragging
  event.preventDefault();
});

// Step 4: When the mouse moves
container.addEventListener('mousemove', (event) => {
  if (!isDragging) return; // If not dragging, do nothing

  // Calculate how far the mouse moved
  const movedX = event.pageX - container.offsetLeft - startX;

  // Scroll the container by that distance
  container.scrollLeft = scrollStart - movedX;
});

// Step 5: When the mouse button is released
document.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false; // Stop dragging
    container.classList.remove('active'); // Remove the active class
  }
});

// Step 6: When the mouse leaves the container
container.addEventListener('mouseleave', () => {
  if (isDragging) {
    isDragging = false; // Stop dragging
    container.classList.remove('active'); // Remove the active class
  }
});
