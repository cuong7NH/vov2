const startClick = document.querySelector(".click-start");

startClick.addEventListener("click", () => {
  const loadingPage = document.querySelector("#loading-page");
  let audioIntro1 = document.querySelector("#audio-intro");
  const introPage = document.querySelector(".intro-page");
  loadingPage.remove();
  introPage.classList.remove("display-none");
  setTimeout(() => {
    audioIntro1.play();
  }, 200);
});

const chiMai1 = document.querySelector("#chi-mai");
const chiMaiHover = document.querySelector("#chi-mai-hover");

const ongQuy = document.querySelector("#ong-quy");
const ongQuyHover = document.querySelector("#ong-quy-hover");

const anhTung = document.querySelector("#anh-tung");
const anhTungHover = document.querySelector("#anh-tung-hover");

const hoverF = () => {
  console.log(123);
  setInterval(() => {
    console.log(111);
    chiMaiHover.classList.toggle("hidden-item");
    chiMai1.classList.toggle("hidden-item");
    ongQuyHover.classList.toggle("hidden-item");
    ongQuy.classList.toggle("hidden-item");
    anhTungHover.classList.toggle("hidden-item");
    anhTung.classList.toggle("hidden-item");
  }, 4000);
};
hoverF();
