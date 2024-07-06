// burger-menu
document.querySelector(".open-menu-js").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.add("open");
  document.body.style.overflowX = "hidden";
});

document.querySelector(".mobileMenu-close").addEventListener("click", function() {
  var mobileMenuOverlay = document.querySelector(".mobileMenu-overlay");
  mobileMenuOverlay.classList.remove("open");
  document.body.style.overflowX = "auto";
});

// top bar slider
const topBarSwiper = new Swiper('.top-bar__swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 900,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false, 
  },
  navigation: {
    nextEl: '.topbar-arrow__next',
    prevEl: '.topbar-arrow__prev',
  },
});


// products slider
const productsSwiper = new Swiper('.products-swiper', {
  direction: 'horizontal',
  loop: false,
  speed: 800,
  navigation: {
      nextEl: '.product-arrow',
      prevEl: '.swiper-button-prev',
  },
  slidesPerView: 4,
  spaceBetween: 20,
});


//
var swiper = new Swiper('.special-offers__swiper', {
  speed:800,
  spaceBetween: 20,
  navigation: {
    nextEl: '.product-arrow',
  },
  pagination: {
      el: '.special-offers__pagination',
      clickable: true,
  },

}); 
