// Select all buttons and the dining display container
const buttons = document.querySelectorAll('.dining-buttons button');
const display = document.querySelector('.dining-display');

// Add event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the image path from the data attribute of the clicked button
        const imagePath = button.getAttribute('data-image');
        
        // Create an image element and set its source
        const imageElement = document.createElement('img');
        imageElement.src = imagePath;
        imageElement.alt = button.textContent + " Image";
        imageElement.style.width = '100%'; // Make the image responsive

        // Clear the display container before showing new image
        display.innerHTML = '';
        
        // Append the image to the display container
        display.appendChild(imageElement);
    });
});
