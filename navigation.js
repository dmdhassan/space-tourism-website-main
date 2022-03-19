const mobileNav = document.querySelector(".primary-navigation");
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");

let visibility;

mobileNavToggle.addEventListener("click", () => {
     visibility = mobileNav.getAttribute("data-visible");

     if(visibility == "false") {
          mobileNav.setAttribute("data-visible", "true");
          mobileNavToggle.setAttribute("aria-expanded", "true")
     } else {
          mobileNav.setAttribute("data-visible", "false");
          mobileNavToggle.setAttribute("aria-expanded", "false");
     }

})