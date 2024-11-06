// ------------------------------------global elements variable----------------------------
// nav elements
const barsIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".bi-x");
const navbar = document.getElementById("navbar");
const mobileList = document.getElementById("navbarSupportedContent");
const navLinks = document.querySelectorAll("li.nav-item.link");
const mainMenuOtherSections = document.querySelectorAll("li.other-sections");
const openingMainDropdownMenuAnchor = document.querySelector(
  ".nav-item.dropdown a.dropdown-toggle "
);
const openingDropdownSubmenuAnchor = document.querySelector(
  "li.dropdown-submenu a "
);
const mainDropdownMenu = document.querySelector("ul.main");
const dropdownSubmenu = document.querySelector("ul.dropdown-submenu");
// sliders
const allSliders = document.querySelectorAll(".slider");
const sliderOneImages = document.querySelectorAll("#portfolioModal img");
const sliderTwoImages = document.querySelectorAll("#portfolioModal-2 img");
const sliderThreeImages = document.querySelectorAll("#portfolioModal-3 img");
const sliderFourImages = document.querySelectorAll("#portfolioModal-4 img");
const sliderFiveImages = document.querySelectorAll("#portfolioModal-5 img");
// nav and tabs images in portfolio
const generalTabImages = document.querySelectorAll("#pills-general img");
const appTabImages = document.querySelectorAll("#pills-app img");
const productTabImages = document.querySelectorAll("#pills-product img");
const brandingTabImages = document.querySelectorAll("#pills-branding img");
const booksTabImages = document.querySelectorAll("#pills-books img");

// ------------------------------------home typing animation----------------------------
(function typingAnimation() {
  let options = {
    strings: ["Designer", "Developer", "Freelancer", "Photographer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
  };
  new Typed(".typing", options);
})();

// ------------------------------------mobile nav effect----------------------------
// clicking bars icon effect
(function barsIconEffect() {
  barsIcon.addEventListener("click", () => {
    barsIcon.classList.add("close");
    closeIcon.classList.remove("close");
    closeIcon.classList.add("appear");
    navbar.classList.add("nav-bg");
  });
})();

// clicking close icon effect
(function closeIconEffect() {
  closeIcon.addEventListener("click", () => {
    barsIcon.classList.remove("close");
    closeIcon.classList.add("close");
    closeIcon.classList.remove("appear");
    navbar.classList.remove("nav-bg");
    if (
      openingMainDropdownMenuAnchor.classList.contains("show") &&
      openingDropdownSubmenuAnchor.classList.contains("show")
    ) {
      openingMainDropdownMenuAnchor.classList.remove("show");
      openingDropdownSubmenuAnchor.classList.remove("show");
      mainDropdownMenu.classList.remove("show");
      dropdownSubmenu.classList.remove("show");
    }
  });
})();

// nav link logic (clicking the link closes the menu and scroll)
function navLinkEffect(links) {
  links.forEach(callback);
  function callback(link) {
    link.addEventListener("click", () => {
      closeIcon.classList.remove("appear");
      closeIcon.classList.add("close");
      barsIcon.classList.remove("close");
      mobileList.classList.remove("show");
      navbar.classList.remove("nav-bg");
    });
  }
}
(function navLinksEffect() {
  navLinkEffect(navLinks);
  navLinkEffect(mainMenuOtherSections);
})();

// ------------------------------------portfolio sliders effect----------------------------
// general function of portfolio tabs images
function tabsImagesEffect(tabTypeImages, sliderImages) {
  tabTypeImages.forEach(tabTypeCallback);
  function tabTypeCallback(tabTypeImage) {
    sliderImages.forEach(sliderCallback);
    function sliderCallback(sliderImage) {
      tabTypeImage.addEventListener("click", () => {
        if (tabTypeImage.src === sliderImage.src) {
          sliderImage.parentElement.parentElement.classList.add("active");
        }
      });
    }
  }
}

// clicking portfolio image to show slider
(function portfolioImagesEffect() {
  tabsImagesEffect(generalTabImages, sliderOneImages);
  tabsImagesEffect(appTabImages, sliderTwoImages);
  tabsImagesEffect(productTabImages, sliderThreeImages);
  tabsImagesEffect(brandingTabImages, sliderFourImages);
  tabsImagesEffect(booksTabImages, sliderFiveImages);
})();

// remove active class when closing the slider
function removeActiveClass(sliderImages) {
  sliderImages.forEach((sliderImage) => {
    sliderImage.parentElement.parentElement.classList.remove("active");
  });
}

// closing slider effect
(function sliderCloseEffect() {
  allSliders.forEach(sliderCallback);
  function sliderCallback(slider) {
    slider.addEventListener("transitionend", () => {
      if (!slider.classList.contains("show")) {
        removeActiveClass(sliderOneImages);
        removeActiveClass(sliderTwoImages);
        removeActiveClass(sliderThreeImages);
        removeActiveClass(sliderFourImages);
        removeActiveClass(sliderFiveImages);
      }
    });
  }
})();

// ------------------------------------tooltip initialize----------------------------
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
