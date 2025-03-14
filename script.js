// Select the container element
const items = document.querySelector('.items');

let isDragging = false; // To check if dragging is happening
let startX; // Store the starting X coordinate of the mouse
let scrollLeft; // Store the container's initial scroll position

// Mouse down event - When the user clicks on the container
items.addEventListener('mousedown', (e) => {
  isDragging = true; // Enable dragging mode
  items.classList.add('active'); // Add the active class (changes cursor style)

  // Get the initial mouse position
  startX = e.pageX - items.offsetLeft; 
  // Save the current scroll position of the container
  scrollLeft = items.scrollLeft;
});

// Mouse leave event - When the user moves the cursor out of the container
items.addEventListener('mouseleave', () => {
  isDragging = false; // Disable dragging mode
  items.classList.remove('active'); // Remove the active class
});

// Mouse up event - When the user releases the mouse button
items.addEventListener('mouseup', () => {
  isDragging = false; // Disable dragging mode
  items.classList.remove('active'); // Remove the active class
});

// Mouse move event - When the user moves the mouse
items.addEventListener('mousemove', (e) => {
  if (!isDragging) return; // If not dragging, stop the function here
  e.preventDefault(); // Prevent default behavior (like text selection)

  // Get the current mouse position
  const x = e.pageX - items.offsetLeft;

  // Calculate the distance moved by the mouse
  const distance = x - startX;

  // Scroll the container by the distance moved
  items.scrollLeft = scrollLeft - distance;
});
