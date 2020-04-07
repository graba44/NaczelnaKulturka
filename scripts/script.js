document.addEventListener("DOMContentLoaded", () => {

   const navigation = document.querySelector(".navigation");
   const hamburgerBtn = navigation.querySelector(".hamburger");
   const hamburgerSpan = hamburgerBtn.querySelector(".hamburger__bar");
   const menu = navigation.querySelectorAll(".menu");

   hamburgerBtn.addEventListener("click", () => {
     hamburgerSpan.classList.toggle("hamburger--active");
     menu[0].classList.toggle("menu--active")
   });

   const menuVerticalLinks = menu[0].querySelectorAll(".menu__link");
   for (let link of menuVerticalLinks) {
      link.addEventListener("click", () => {
         hamburgerSpan.classList.remove("hamburger--active");
         menu[0].classList.remove("menu--active");
         
         smoothScroll(link.getAttribute("href"), 1000)
      });
   }

   const menuHorizontalLinks = menu[1].querySelectorAll(".menu__link");
   for (let link of menuHorizontalLinks) {
      link.addEventListener("click", () => {
         smoothScroll(link.getAttribute("href"), 1000);
      });
   }

   const logoLink = navigation.querySelector(".navigation__link");
   logoLink.addEventListener("click", () => {
      smoothScroll(logoLink.getAttribute("href"), 1000);
   });

   const headerLink = document.querySelector(".header__link");
   headerLink.addEventListener("click", () => {
      smoothScroll(headerLink.getAttribute("href"), 1000);
   });

   function smoothScroll(target, duration){
      var target = document.querySelector(target);
      var targetPosition = target.getBoundingClientRect().top - 110;
      let startPosition = window.pageYOffset;
      let distance = targetPosition - startPosition;
      let startTime = null;

      function animation(currentTime){
         if(startTime == null) startTime = currentTime;
         let timeElapsed = currentTime - startTime;
         let run = ease(timeElapsed, startPosition, targetPosition, duration);
         window.scrollTo(0, run);
         if(timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t, b, c, d){
         t /= d / 2;
         if(t < 1) return c / 2 * t * t + b;
         t--;
         return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation)
   }

   window.addEventListener("hashchange", () => {
      let scrollV, scrollH, loc = window.location;

      if ("pushState" in history) {
         history.pushState("", document.title, loc.pathname + loc.search);
      } else {
      // Prevent scrolling by storing the page's current scroll offset
      scrollV = document.body.scrollTop;
      scrollH = document.body.scrollLeft;

      loc.hash = "";

      // Restore the scroll offset, should be flicker free
      document.body.scrollTop = scrollV;
      document.body.scrollLeft = scrollH;
      }  
   });
});