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

const chiMaiFake = document.querySelector("#chi-mai-fake");
const ongQuyFake = document.querySelector("#ong-quy-fake");
const anhTungFake = document.querySelector("#anh-tung-fake");
let timerChiMai;
let timerOngQuy;
let timerAnhTung;


const showHover = () => {
  setTimeout(() => {
    chiMaiHover.classList.remove("hidden-item");
    ongQuyHover.classList.remove("hidden-item");
    anhTungHover.classList.remove("hidden-item");
  }, 5000)
}

showHover()

// chiMaiFake.addEventListener("mouseover", () => {
//   clearTimeout(timerChiMai);
//   chiMaiHover.classList.remove("hidden-item");
// });

// chiMaiFake.addEventListener("mouseleave", () => {
//   timerChiMai = setTimeout(() => {
//     chiMaiHover.classList.add("hidden-item");
//   }, 6000);
// });

// ongQuyFake.addEventListener("mouseover", () => {
//   clearTimeout(timerOngQuy);
//   ongQuyHover.classList.remove("hidden-item");
// });

// ongQuyFake.addEventListener("mouseleave", () => {
//   timerOngQuy = setTimeout(() => {
//     ongQuyHover.classList.add("hidden-item");
//   }, 6000);
// });

// anhTungFake.addEventListener("mouseover", () => {
//   clearTimeout(timerAnhTung);
//   anhTungHover.classList.remove("hidden-item");
// });

// anhTungFake.addEventListener("mouseleave", () => {
//   timerAnhTung = setTimeout(() => {
//     anhTungHover.classList.add("hidden-item");
//   }, 6000);
// });
