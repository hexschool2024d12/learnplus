const swiper = new Swiper(".teacher-swiper", {
  grid: {
    rows: 1,
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  breakpoints: {
    767: {      
      grid: { 
        rows: 1,
      },
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {      
      grid: { 
        rows: 1,
      },
      slidesPerView: 3,
      spaceBetween: 40,
    }
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  }
});

const swiper1 = new Swiper(".course-swiper", {
  grid: {
    rows: 1,
  },
  slidesPerView: 'auto',
  spaceBetween: 16,
  breakpoints: {
    767: {      
      grid: {
        fill:"row",
        rows: 1,
      },
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    992: {   
      grid: {
        fill:"row",
        rows: 2,
      },   
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1200: {   
      grid: {
        fill:"row",
        rows: 2,
      },   
      slidesPerView: 3,
      spaceBetween: 24,
    }
  },
  navigation: {
    nextEl: ".swiper-next-btn",
  }
});