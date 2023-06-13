// const videoWrap = document.querySelector(".video-wrap");
// const video = document.querySelector(".video");
// const videoHeight = video.offsetHeight;
// const body = document.querySelector("body");
// // const do = document.
// console.log("body", body);

// window.addEventListener("scroll", (event) => {
//   console.log("Scrolling...");

//   const windowScrollTop = document.body.scrollHeight
//   const videoBottom = videoHeight;
//   console.log("videoBottom", videoBottom);

//   if (windowScrollTop > videoBottom) {
//     videoWrap.setAttribute("height", videoHeight);
//     video.addClass("stuck");
//   } else {
//     videoWrap.height("auto");
//     video.removeClass("stuck");
//   }
// });
let video = document.querySelector("video");

var $window = $(window);
var $videoWrap = $(".video-wrap");
var $video = $(".video");
var videoHeight = $video.outerHeight();

$window.on("scroll", function () {
  var windowScrollTop = $window.scrollTop();
  var videoBottom = videoHeight + $videoWrap.offset().top;

  if (windowScrollTop > videoBottom && !video.paused) {
    $videoWrap.height(videoHeight);
    $video.addClass("stuck");
  } else {
    $videoWrap.height("auto");
    $video.removeClass("stuck");
  }
});
