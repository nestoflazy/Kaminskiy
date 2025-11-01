const team_swiper = new Swiper(".team_swiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  loop: false,

  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
});

const services_swiper = new Swiper(".services_swiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  loop: false,

  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
});

const reviews_swiper = new Swiper(".reviews_swiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  loop: false,

  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
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
