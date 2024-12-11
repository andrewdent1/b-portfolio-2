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

// Function to determine the slide width based on screen size
function getSlideWidth() {
    return window.innerWidth < 750 ? window.innerWidth : items[0].offsetWidth;
}

// Update slide function to use dynamic width
function slide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    } else if (currentIndex >= items.length) {
        currentIndex = 0;
    }
    const slideWidth = getSlideWidth(); // Calculate slide width
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Modal event listeners
document.querySelectorAll('.btn-modal').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('modal-info').textContent = button.getAttribute('data-info');
        document.getElementById('modal').style.display = 'flex';
    });
});

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Recalculate slide width on window resize
window.addEventListener('resize', () => {
    const slideWidth = getSlideWidth();
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});
