document.addEventListener("DOMContentLoaded", () => {
  
  const navigation = document.querySelector(".navigation");
  const hamburgerBtn = navigation.querySelector(".hamburger");
  const hamburgerSpan = hamburgerBtn.querySelector(".hamburger__bar");
  const menu = navigation.querySelector(".main-menu");

  hamburgerBtn.addEventListener("click", () => {
    hamburgerSpan.classList.toggle("hamburger--active");
  });
})