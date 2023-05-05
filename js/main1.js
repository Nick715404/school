var swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.querySelector('#show-popup').addEventListener('click', () => {
  document.querySelector('.modal').classList.add('active')
});

document.querySelector('.close-btn-icon').addEventListener('click', () => {
  document.querySelector('.modal').classList.remove('active')
});