const headerWrapper = document.querySelector('.header-wrapper');
const header = document.querySelector('.header');

// Create the upper header div
const upperHeader = document.createElement('div');
upperHeader.className = 'upper-header';
upperHeader.textContent = 'SIGN IN  EN-US'; // Set the text content

// Insert the upper header before the existing header
headerWrapper.parentNode.insertBefore(upperHeader, headerWrapper);

const logo = document.createElement('div');
logo.className = 'logo';
logo.textContent = 'WKND';
header.prepend(logo); // Add logo to the left side

const hamburger = document.createElement('div');
hamburger.className = 'hamburger';
hamburger.innerHTML = '<div></div><div></div><div></div>';
header.appendChild(hamburger);

const nav = document.createElement('nav');
nav.className = 'nav';
nav.innerHTML = `
    <a href="https://wknd.site/us/en/magazine.html">MAGAZINE</a>
    <a href="https://wknd.site/us/en/adventures.html">ADVENTURES</a>
    <a href="https://wknd.site/us/en/faqs.html">FAQS</a>
    <a href="https://wknd.site/us/en/about-us.html">ABOUT US</a>
`;
header.appendChild(nav);

const searchContainer = document.createElement('div');
searchContainer.className = 'search-container';
const searchInput = document.createElement('input');
searchInput.type = 'text';
searchInput.className = 'search-input';
searchInput.placeholder = 'Search';
const searchIcon = document.createElement('div');
searchIcon.className = 'search-icon';
searchIcon.innerHTML = '<i class="fas fa-search"></i>'; // Font Awesome search icon
searchContainer.appendChild(searchInput);
searchContainer.appendChild(searchIcon);
header.appendChild(searchContainer);

// Toggle navigation on hamburger click
hamburger.addEventListener('click', function () {
    nav.classList.toggle('active');
});

// Toggle search input visibility and icon
searchIcon.addEventListener('click', function () {
    searchInput.value = ''; // Clear input on cross click
    searchIcon.innerHTML = '<i class="fas fa-search"></i>'; // Change to search icon
});

// Scroll behavior
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        headerWrapper.classList.add('fixed');
    } else {
        headerWrapper.classList.remove('fixed');
    }
});
