
// Select the footer element
const footer = document.querySelector('.footer');

// Set the display style to grid
if (footer) {
  footer.style.display = 'grid';
  footer.style.gridTemplateColumns = 'repeat(2, 1fr)';
  footer.style.gap = '20px'; // Adjust the gap as needed
}


// Select all button containers
const buttonContainers = footer.querySelectorAll('.button-container a');

// Replace each link's inner HTML with the corresponding Font Awesome icon
buttonContainers.forEach(link => {
  switch (link.title) {
    case 'Facebook':
      link.innerHTML = '<i class="fab fa-facebook"></i>'; // Facebook icon
      break;
    case 'Twitter':
      link.innerHTML = '<i class="fab fa-twitter"></i>'; // Twitter icon
      break;
    case 'Instagram':
      link.innerHTML = '<i class="fab fa-instagram"></i>'; // Instagram icon
      break;
  }
});

// Select the footer elemen

if (footer) {
  // Select all link elements in the footer
  const links = footer.querySelectorAll('a');

  // Loop through the links and assign classes
  links.forEach(link => {
    // Check the title of the link to assign appropriate class
    if (link.title === 'Facebook' || link.title === 'Twitter' || link.title === 'Instagram') {
      link.classList.add('social-media'); // Add social media class
    }
  });
}

