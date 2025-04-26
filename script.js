// Get the checkbox (toggle switch) element and body element
const toggleButton = document.getElementById('toggle-button');
const body = document.body;

// Check if the theme was saved previously in localStorage
if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.checked = true;
}

// Add event listener to the checkbox
toggleButton.addEventListener('change', () => {
    // Toggle the dark mode on the body based on checkbox state
    if (toggleButton.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('mode', 'light');
    }
});
