document.addEventListener("DOMContentLoaded", () => {
  
  const navigation = document.querySelector(".navigation");
  const hamburgerBtn = navigation.querySelector(".hamburger");
  const hamburgerSpan = hamburgerBtn.querySelector(".hamburger__bar");
  const menu = navigation.querySelector(".menu");

  hamburgerBtn.addEventListener("click", () => {
     hamburgerSpan.classList.toggle("hamburger--active");
     menu.classList.toggle("menu--active")
  });

  const menuLinks = menu.querySelectorAll(".menu__link");

  for (let menuLink of menuLinks) {
     menuLink.addEventListener("click", () => {
        hamburgerSpan.classList.remove("hamburger--active");
        menu.classList.remove("menu--active");
     });
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