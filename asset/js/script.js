const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    // () => membuat function, () adalah parameter
    navMenu.classList.add("show-menu"); //menambahkan class baru ke class yang diikuti
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction)); // element dari masing masing navLink akan disimpan di parameter n

const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50 //this mengacu pada context tempat fungsi atau objek sedang dijalankan. Nilai this dapat berubah tergantung pada bagaimana fungsi dipanggil.
  
    ? header.classList.add("shadow_header") //jika true
    : header.classList.remove("shadow_header"); //jika false
};

window.addEventListener("scroll", shadowHeader);

const swiperPopular = new Swiper('.popular_swiper', {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlide: "auto",
});