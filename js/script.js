const track = document.getElementById("sliderTrack");
const dots = document.querySelectorAll(".dot");
const cards = document.querySelectorAll(".card");
const track1 = document.getElementById("sliderTrack1");
const dots1 = document.querySelectorAll(".dot1");
const cards1 = document.querySelectorAll(".card1");
const track2 = document.getElementById("sliderTrack2");
const dots2 = document.querySelectorAll(".dot2");
const cards2 = document.querySelectorAll(".card2");
let currentIndex = 0;
let currentIndex1 = 0;
let currentIndex2 = 0;
function goToSlide(index) {
  if (!cards.length) return;
  currentIndex = index;
  const cardWidth = cards[0].offsetWidth;
  const gap = 20;
  const offset = (cardWidth + gap) * currentIndex;

  track.style.transform = `translateX(-${offset}px)`;

  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentIndex);
  });
}
dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const index = parseInt(e.target.dataset.index);
    goToSlide(index);
  });
});
function updateSlider(index) {
  if (!cards1.length) return;
  currentIndex1 = index;
  const cardWidth = cards1[0].offsetWidth;
  const gap = 24;
  const offset = (cardWidth + gap) * currentIndex1;
  track1.style.transform = `translateX(-${offset}px)`;
  dots1.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentIndex1);
  });
}
dots1.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const index = parseInt(e.target.dataset.index);
    updateSlider(index);
  });
});
function updateSlider1(index) {
  if (!cards2.length) return;
  currentIndex2 = index;
  const cardWidth = cards2[0].offsetWidth;
  const gap = 24;
  const offset = (cardWidth + gap) * currentIndex2;

  track2.style.transform = `translateX(-${offset}px)`;

  dots2.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentIndex2);
  });
}
dots2.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const index = parseInt(e.target.dataset.index);
    updateSlider1(index);
  });
});
window.addEventListener("resize", () => {
  goToSlide(currentIndex);
  updateSlider(currentIndex1);
  updateSlider1(currentIndex2);
});
function createMobileMenu() {
  const navbar = document.querySelector(".navbar");
  const links = document.querySelector(".links");
  const search = document.querySelector(".search");
  if (!navbar || !links || !search) return;
  const menuButton = document.createElement("button");
  menuButton.className = "mobile-menu-button";
  menuButton.setAttribute("aria-label", "Toggle navigation menu");
  menuButton.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
  `;
  navbar.appendChild(menuButton);
  menuButton.addEventListener("click", () => {
    links.classList.toggle("mobile-menu-open");
    search.classList.toggle("mobile-search-open");
    menuButton.classList.toggle("active");
  });
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("mobile-menu-open");
      search.classList.remove("mobile-search-open");
      menuButton.classList.remove("active");
    });
  });
}
window.addEventListener("load", () => {
  createMobileMenu();
  goToSlide(currentIndex);
  updateSlider(currentIndex1);
  updateSlider1(currentIndex2);
  const loader = document.getElementById("page-loader");
  if (loader) {
    loader.classList.add("hidden");
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});
