function loadPageFunction() {}
//////////////////////////////////////////////////////////

/**
 * Audio player controls 1111111111111111
 */
(() => {
  var progressBar1 = document.querySelector(".progress1");

  for (i = 0; i < 100; i++) {
    let span = document.createElement("span");
    span.style.setProperty("--i", i);
    progressBar1.append(span);
  }
})();
(() => {
  var progressBar2 = document.querySelector(".progress2");

  for (i = 0; i < 100; i++) {
    let span = document.createElement("span");
    span.style.setProperty("--i", i);
    progressBar2.append(span);
  }
})();
(() => {
  var progressBar3 = document.querySelector(".progress3");

  for (i = 0; i < 100; i++) {
    let span = document.createElement("span");
    span.style.setProperty("--i", i);
    progressBar3.append(span);
  }
})();

// Audio 1
let audio1 = document.querySelector("#audio1");
let pauseBtn1 = document.querySelector(".play_pause1");
let playBtn1 = document.querySelector(".play_play1");
let listSpan1 = document.querySelectorAll(".progress1 span");
// Audio 2
let audio2 = document.querySelector("#audio2");
let pauseBtn2 = document.querySelector(".play_pause2");
let playBtn2 = document.querySelector(".play_play2");
let listSpan2 = document.querySelectorAll(".progress2 span");
// Audio 3
let audio3 = document.querySelector("#audio3");
let pauseBtn3 = document.querySelector(".play_pause3");
let playBtn3 = document.querySelector(".play_play3");
let listSpan3 = document.querySelectorAll(".progress3 span");

const handleResetAudio = (audioNumber) => {
  if (audioNumber === 0) {
    audioIntro2.currentTime = 0;
    audioIntro2.pause();
  }
  if (audioNumber === 1) {
    audio1.currentTime = 0;
    audio1.pause();
    playBtn1.classList.remove("hidden-item");
    pauseBtn1.classList.add("hidden-item");
    listSpan1.forEach((e) => {
      e.classList.remove("active");
    });
  }
  if (audioNumber === 2) {
    audio2.currentTime = 0;
    audio2.pause();
    playBtn2.classList.remove("hidden-item");
    pauseBtn2.classList.add("hidden-item");
    listSpan2.forEach((e) => {
      e.classList.remove("active");
    });
  }
  if (audioNumber === 3) {
    audio3.currentTime = 0;
    audio3.pause();
    playBtn3.classList.remove("hidden-item");
    pauseBtn3.classList.add("hidden-item");
    listSpan3.forEach((e) => {
      e.classList.remove("active");
    });
  }
};

pauseBtn1.addEventListener("click", () => {
  console.log("click play");
  if (audio1.paused) {
    audio1.play();
    playBtn1.classList.add("hidden-item");
    pauseBtn1.classList.remove("hidden-item");
    //
    handleResetAudio(0);
    handleResetAudio(2);
    handleResetAudio(3);
  } else {
    audio1.pause();
    playBtn1.classList.remove("hidden-item");
    pauseBtn1.classList.add("hidden-item");
  }
});

audio1.addEventListener("timeupdate", () => {
  time_current = audio1.currentTime;
  time_duration = audio1.duration;
  console.log("time_duration", time_duration, time_current);
  let position = Math.floor((time_current * 100) / time_duration);
  // current.textContent = timeFormat(time_current);
  for (k = 0; k <= position; k++) {
    listSpan1[k].classList.add("active");
  }
  if (time_duration - time_current <= 1) {
    handleResetAudio(1);
    audio2.play();
    playBtn2.classList.add("hidden-item");
    pauseBtn2.classList.remove("hidden-item");
  }
});

listSpan1.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    //remove active classes
    listSpan1.forEach((e) => {
      e.classList.remove("active");
    });

    //add active class to selected range
    for (k = 0; k <= index; k++) {
      listSpan1[k].classList.add("active");
    }
    //set current time
    let time_go = (index * audio1.duration) / 100;
    audio1.currentTime = time_go;
  });
});

// END AUDIO

/**
 * Audio player controls 222222222222222222222
 */

pauseBtn2.addEventListener("click", () => {
  if (audio2.paused) {
    audio2.play();
    playBtn2.classList.add("hidden-item");
    pauseBtn2.classList.remove("hidden-item");
    //
    handleResetAudio(0);
    handleResetAudio(1);
    handleResetAudio(3);
  } else {
    audio2.pause();
    playBtn2.classList.remove("hidden-item");
    pauseBtn2.classList.add("hidden-item");
  }
});

audio2.addEventListener("timeupdate", () => {
  time_current = audio2.currentTime;
  time_duration = audio2.duration;
  let position = Math.floor((time_current * 100) / time_duration);
  for (k = 0; k <= position; k++) {
    listSpan2[k].classList.add("active");
  }
  if (time_duration - time_current <= 1) {
    handleResetAudio(2);
    audio3.play();
    playBtn3.classList.add("hidden-item");
    pauseBtn3.classList.remove("hidden-item");
  }
});

listSpan2.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    //remove active classes
    listSpan2.forEach((e) => {
      e.classList.remove("active");
    });

    //add active class to selected range
    for (k = 0; k <= index; k++) {
      listSpan2[k].classList.add("active");
    }
    //set current time
    let time_go = (index * audio2.duration) / 100;
    audio2.currentTime = time_go;
  });
});

// END AUDIO

/**
 * Audio player controls 33333333333333333333
 */

pauseBtn3.addEventListener("click", () => {
  console.log("click play");

  if (audio3.paused) {
    audio3.play();
    playBtn3.classList.add("hidden-item");
    pauseBtn3.classList.remove("hidden-item");

    //
    handleResetAudio(0);
    handleResetAudio(1);
    handleResetAudio(2);
  } else {
    audio3.pause();
    playBtn3.classList.remove("hidden-item");
    pauseBtn3.classList.add("hidden-item");
  }
});

audio3.addEventListener("timeupdate", () => {
  time_current = audio3.currentTime;
  time_duration = audio3.duration;
  let position = Math.floor((time_current * 100) / time_duration);
  for (k = 0; k <= position; k++) {
    listSpan3[k].classList.add("active");
  }
  if (time_duration - time_current <= 1) {
    handleResetAudio(3);
  }
});

listSpan3.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    //remove active classes
    list_span3.forEach((e) => {
      e.classList.remove("active");
    });

    //add active class to selected range
    for (k = 0; k <= index; k++) {
      listSpan3[k].classList.add("active");
    }

    //set current time
    let time_go = (index * audio3.duration) / 100;
    audio3.currentTime = time_go;
  });
});
//////////////////////////////////////////////////////////

const startClick = document.querySelector(".click-start");
const loadingPage = document.querySelector("#loading-page");
const introPage = document.querySelector(".intro-page");
const nktPage = document.querySelector(".audio-box");
let audioIntro1 = document.querySelector("#audio-intro");
let audioIntro2 = document.querySelector("#audio-intro2");

let isInNKTPage = false;

startClick.addEventListener("click", () => {
  loadingPage.classList.add("display-none");
  introPage.classList.remove("display-none");
  setTimeout(() => {
    audioIntro1.play();
  }, 200);
});

const modauBoxLeft = document.querySelector(".modau-box-left");

const handleOpenNKTpage = () => {
  loadingPage.classList.add("display-none");
  introPage.classList.add("display-none");
  nktPage.classList.remove("display-none");
  isInNKTPage = true;
  setTimeout(() => {
    audioIntro2.play();
    audioIntro1.pause();
    audioIntro1.currentTime = 0;
  }, 200);
};

modauBoxLeft.addEventListener("click", () => {
  handleOpenNKTpage();
});

window.addEventListener("keydown", (event) => {
  console.log("event.key", event.key);
  if (event.key === "ArrowDown") {
    if (!isInNKTPage) {
      // Nếu bạn muốn trải nghiệm giao diện cho người khiếm thị, mời bấm mũi tên xuống.
      handleOpenNKTpage();
    } else {
      // Bấm mũi tên xuống để nghe lại hướng dẫn.
      audioIntro2.currentTime = 0;
      audioIntro2.play();
      // reset audio 1
      handleResetAudio(1);
      handleResetAudio(2);
      handleResetAudio(3);
    }
  }
  // Bấm mũi tên trái để nghe câu chuyện 1: Chuyện của Mai: “Nữ hoàng” vận động viên
  if (event.key === "ArrowLeft") {
    if (isInNKTPage) {
      audio1.currentTime = 0;
      audio1.play();
      playBtn1.classList.add("hidden-item");
      pauseBtn1.classList.remove("hidden-item");
      listSpan1.forEach((e) => {
        e.classList.remove("active");
      });
      // reset 2
      audio2.pause();
      playBtn2.classList.remove("hidden-item");
      pauseBtn2.classList.add("hidden-item");
      listSpan2.forEach((e) => {
        e.classList.remove("active");
      });
      audio2.currentTime = 0;
      // reset 3
      audio3.pause();
      playBtn3.classList.remove("hidden-item");
      pauseBtn3.classList.add("hidden-item");
      listSpan3.forEach((e) => {
        e.classList.remove("active");
      });
      audio3.currentTime = 0;
      // reset 0
      audioIntro2.pause();
      audioIntro2.currentTime = 0;
    }
  }
  // Bấm mũi tên lên để nghe câu chuyện 2: Chuyện của ông Quý: Những bước chân không mỏi
  if (event.key === "ArrowUp") {
    if (isInNKTPage) {
      audio2.currentTime = 0;
      audio2.play();
      playBtn2.classList.add("hidden-item");
      pauseBtn2.classList.remove("hidden-item");
      listSpan2.forEach((e) => {
        e.classList.remove("active");
      });
      //
      handleResetAudio(0);
      handleResetAudio(1);
      handleResetAudio(3);
    }
  }
  // Bấm mũi tên phải để nghe câu chuyện 3: Chuyện của Tùng: Người góp phần mở những lối đi hạnh phúc
  if (event.key === "ArrowRight") {
    if (isInNKTPage) {
      audio3.currentTime = 0;
      audio3.play();
      playBtn3.classList.add("hidden-item");
      pauseBtn3.classList.remove("hidden-item");
      listSpan3.forEach((e) => {
        e.classList.remove("active");
      });
      // reset       //
      handleResetAudio(0);
      handleResetAudio(1);
      handleResetAudio(2);
    }
  }
});
