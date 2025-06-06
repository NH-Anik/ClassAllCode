
// Disable right-click
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
//   alert("Right-click is disabled. Please do not copy our content.");
});

// Disable DevTools shortcuts (F12, Ctrl+Shift+I/J/C, Ctrl+U)
document.addEventListener('keydown', function (e) {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
    (e.ctrlKey && e.key === 'U') ||
    (e.ctrlKey && e.key === 'C') // Block Ctrl+C
  ) {
    e.preventDefault();
    // alert("Copying or inspecting is disabled.");
  }
});

// Disable text selection (optional)
document.addEventListener('selectstart', (e) => {
  e.preventDefault();
});

// Disable drag (another way users try to copy content)
document.addEventListener('dragstart', (e) => {
  e.preventDefault();
});


