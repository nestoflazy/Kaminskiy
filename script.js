const team_swiper = new Swiper(".team_swiper", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  loop: false,
  freeMode: true,

  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    360: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }
  
});

const services_swiper = new Swiper(".services_swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: false,

  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  breakpoints: {
    965: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  }
});

const reviews_swiper = new Swiper(".reviews_swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: false,

  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
  breakpoints: {
    965: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  }
});


function closeAccordion(button) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    let isOpen = e.target.closest(".faq__item");
    if (isOpen) {
      isOpen.open = !isOpen.open;
    }
  });
}

closeAccordion(document.querySelector(".faq__accordion"));
