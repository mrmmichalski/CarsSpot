const btn = document.getElementById("menu-hamburger");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});

// --------------------------------------------------------

const images = document.querySelectorAll(".gallery-img");
const dots = document.querySelectorAll(".dot");
const gallery = document.getElementById("gallery");

document.addEventListener("DOMContentLoaded", () => {
  let currentIndex = 0;
  let interval;

  function updateGallery(index) {
    currentIndex = index;
    const offset = -index * (images[0].clientWidth + 65);
    gallery.style.transform = `translateX(${offset}px)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function startAutoSlide() {
    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % images.length;
      updateGallery(nextIndex);
    }, 3000);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateGallery(index);
      startAutoSlide();
    });
  });

  updateGallery(0);
  startAutoSlide();
});
