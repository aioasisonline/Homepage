document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.carousel-container img');
  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
  }

  setInterval(showNextImage, 5000);
});

function toggleMenu() {
  var menu = document.querySelector('.mobile_menu');
  menu.classList.toggle('show');
}



