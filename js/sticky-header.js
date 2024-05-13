const documentReady = () => {
  const header = document.querySelector(".header");

  const documentScroll = () => {
    header.classList.toggle("header--scroll", window.scrollY > 0);
    header.classList.remove("active");
  };

  document.addEventListener("scroll", documentScroll);
};
document.addEventListener("DOMContentLoaded", documentReady);
