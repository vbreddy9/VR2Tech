document.addEventListener('DOMContentLoaded', () => {
  // Create the cursor circle element
  const cursorCircle = document.createElement('div');
  cursorCircle.classList.add('cursor-circle');
  document.body.appendChild(cursorCircle);

  // Function to update the position of the cursor circle
  const updateCursor = (e) => {
    cursorCircle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  };

  // Add the mousemove event listener to update the cursor position
  document.addEventListener('mousemove', updateCursor);
});
