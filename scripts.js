function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}


window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 750) {
        header.classList.add('header-colored');
    } else {
        header.classList.remove('header-colored');
    }
});

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

document.querySelector('.close-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default action
    // Code to close the sidebar
});

const container = document.querySelector('.container');
const items = document.querySelectorAll('.grid-item');
let currentIndex = 0;

// Function to get the slide width based on screen size
function getSlideWidth() {
    return window.innerWidth < 750 ? window.innerWidth : 25 * window.innerWidth / 100;
}

// Function to handle slide transitions
function slide(direction) {
    const maxIndex = window.innerWidth < 750 ? 12 : 9;  // 11 images when screen is small, 7 for larger screens
    currentIndex += direction;

    // Loop back to the 8th image (index 7) if moving backward and beyond the first image
    if (currentIndex < 0) {
        currentIndex = maxIndex;  // Go to the 8th image (index 7)
    } else if (currentIndex >= maxIndex) {
        currentIndex = 0;  // Go back to the first image (index 0)
    }

    const slideWidth = getSlideWidth(); // Get the dynamic slide width
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Move to the correct position
}

// Recalculate slide width on window resize
window.addEventListener('resize', () => {
    const slideWidth = getSlideWidth();
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

// Open the modal and populate it with content
function openModal(info) {
    const modal = document.getElementById('modal');
    const modalInfo = document.getElementById('modal-info');

    modalInfo.textContent = info; // Set the modal content
    modal.style.display = 'flex'; // Show the modal
}

// Close the modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Hide the modal
}

// Attach event listeners to all .btn-modal buttons
document.querySelectorAll('.btn-modal').forEach(button => {
    button.addEventListener('click', function () {
        const info = this.getAttribute('data-info'); // Get the data-info attribute
        openModal(info); // Open the modal with the info
    });
});

// Close modal when clicking the close button
document.getElementById('close-modal').addEventListener('click', closeModal);

// Close modal when clicking outside the modal content
window.addEventListener('click', function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});
