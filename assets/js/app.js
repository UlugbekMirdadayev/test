const swiper = new Swiper(".swiper-custome", {
  // Optional parameters
  loop: false,
  direction: "horizontal",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev", // bularni o'zgartirish mumkin
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar", // buni o'zgartirish mumkin emas
  },
});
