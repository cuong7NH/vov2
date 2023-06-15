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

let audio1 = document.querySelector("#audio1");
let play_pause1 = document.querySelector(".play_pause1");
let list_span1 = document.querySelectorAll(".progress1 span");

play_pause1.addEventListener("click", () => {
  console.log("click play");
  let playBtn = document.querySelector(".play_play1");
  let pauseBtn = document.querySelector(".play_pause1");

  if (audio1.paused) {
    audio1.play();
    playBtn.classList.add("hidden-item");
    pauseBtn.classList.remove("hidden-item");
  } else {
    audio1.pause();
    playBtn.classList.remove("hidden-item");
    pauseBtn.classList.add("hidden-item");
  }
});

audio1.addEventListener("timeupdate", () => {
  time_current = audio1.currentTime;
  time_duration = audio1.duration;

  let position = Math.floor((time_current * 100) / time_duration);

  // current.textContent = timeFormat(time_current);
  for (k = 0; k <= position; k++) {
    list_span1[k].classList.add("active");
  }
});

list_span1.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    //remove active classes
    list_span1.forEach((e) => {
      e.classList.remove("active");
    });

    //add active class to selected range
    for (k = 0; k <= index; k++) {
      list_span1[k].classList.add("active");
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

(() => {
  var progressBar2 = document.querySelector(".progress2");

  for (i = 0; i < 100; i++) {
    let span = document.createElement("span");
    span.style.setProperty("--i", i);
    progressBar2.append(span);
  }
})();

let audio2 = document.querySelector("#audio2");
let play_pause2 = document.querySelector(".play_pause2");
let list_span2 = document.querySelectorAll(".progress2 span");

play_pause2.addEventListener("click", () => {
  console.log("click play");
  let playBtn = document.querySelector(".play_play2");
  let pauseBtn = document.querySelector(".play_pause2");

  if (audio2.paused) {
    audio2.play();
    playBtn.classList.add("hidden-item");
    pauseBtn.classList.remove("hidden-item");
  } else {
    audio2.pause();
    playBtn.classList.remove("hidden-item");
    pauseBtn.classList.add("hidden-item");
  }
});

audio2.addEventListener("timeupdate", () => {
  time_current = audio2.currentTime;
  time_duration = audio2.duration;

  let position = Math.floor((time_current * 100) / time_duration);

  // current.textContent = timeFormat(time_current);
  for (k = 0; k <= position; k++) {
    list_span2[k].classList.add("active");
  }
});

list_span2.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    //remove active classes
    list_span2.forEach((e) => {
      e.classList.remove("active");
    });

    //add active class to selected range
    for (k = 0; k <= index; k++) {
      list_span2[k].classList.add("active");
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

(() => {
  var progressBar3 = document.querySelector(".progress3");

  for (i = 0; i < 100; i++) {
    let span = document.createElement("span");
    span.style.setProperty("--i", i);
    progressBar3.append(span);
  }
})();
let audio3 = document.querySelector("#audio3");
let play_pause3 = document.querySelector(".play_pause3");
let list_span3 = document.querySelectorAll(".progress3 span");

play_pause3.addEventListener("click", () => {
  console.log("click play");
  let playBtn = document.querySelector(".play_play3");
  let pauseBtn = document.querySelector(".play_pause3");

  if (audio3.paused) {
    audio3.play();
    playBtn.classList.add("hidden-item");
    pauseBtn.classList.remove("hidden-item");
  } else {
    audio3.pause();
    playBtn.classList.remove("hidden-item");
    pauseBtn.classList.add("hidden-item");
  }
});

audio3.addEventListener("timeupdate", () => {
  time_current = audio3.currentTime;
  time_duration = audio3.duration;
  let position = Math.floor((time_current * 100) / time_duration);
  // current.textContent = timeFormat(time_current);
  for (k = 0; k <= position; k++) {
    list_span3[k].classList.add("active");
  }
});

list_span3.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    //remove active classes
    list_span3.forEach((e) => {
      e.classList.remove("active");
    });

    //add active class to selected range
    for (k = 0; k <= index; k++) {
      list_span3[k].classList.add("active");
    }

    //set current time
    let time_go = (index * audio3.duration) / 100;
    audio3.currentTime = time_go;
  });
});

// END AUDIO

// Bấm mũi tên trái để nghe câu chuyện 1: Chuyện của Mai: “Nữ hoàng” vận động viên
// Bấm mũi tên lên để nghe câu chuyện 2: Chuyện của ông Quý: Những bước chân không mỏi
// Bấm mũi tên phải để nghe câu chuyện 3: Chuyện của Tùng: Người góp phần mở những lối đi hạnh phúc
// Bấm mũi tên xuống để nghe lại hướng dẫn.

window.addEventListener(
  "keydown",
  (event) => {
    console.log("event", event.key);
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }
    let playBtn1 = document.querySelector(".play_play1");
    let pauseBtn1 = document.querySelector(".play_pause1");
    let playBtn2 = document.querySelector(".play_play2");
    let pauseBtn2 = document.querySelector(".play_pause2");
    let playBtn3 = document.querySelector(".play_play3");
    let pauseBtn3 = document.querySelector(".play_pause3");
    let audio1 = document.querySelector("#audio1");
    let audio2 = document.querySelector("#audio2");
    let audio3 = document.querySelector("#audio3");

    switch (event.key) {
      case "ArrowDown":
        break;
      case "ArrowUp":
        // ấm mũi tên lên để nghe câu chuyện 2
        audio2.play();
        playBtn2.classList.add("hidden-item");
        pauseBtn2.classList.remove("hidden-item");
        // reset audio 1
        audio1.pause();
        playBtn1.classList.remove("hidden-item");
        pauseBtn1.classList.add("hidden-item");
        list_span1.forEach((e) => {
          e.classList.remove("active");
        });
        audio1.currentTime = 0;
        // reset audio 3
        audio3.pause();
        playBtn3.classList.remove("hidden-item");
        pauseBtn3.classList.add("hidden-item");
        list_span3.forEach((e) => {
          e.classList.remove("active");
        });
        audio3.currentTime = 0;

        break;
      case "ArrowLeft":
        // Bấm mũi tên trái để nghe câu chuyện 1:
        audio1.play();
        playBtn1.classList.add("hidden-item");
        pauseBtn1.classList.remove("hidden-item");
        // reset
        audio2.pause();
        playBtn2.classList.remove("hidden-item");
        pauseBtn2.classList.add("hidden-item");
        list_span2.forEach((e) => {
          e.classList.remove("active");
        });
        audio2.currentTime = 0;
        // reset
        audio3.pause();
        playBtn3.classList.remove("hidden-item");
        pauseBtn3.classList.add("hidden-item");
        list_span3.forEach((e) => {
          e.classList.remove("active");
        });
        audio3.currentTime = 0;
        break;
      case "ArrowRight":
        // Bấm mũi tên phải để nghe câu chuyện 3:
        audio3.play();
        playBtn3.classList.add("hidden-item");
        pauseBtn3.classList.remove("hidden-item");
        // reset
        audio2.pause();
        playBtn2.classList.remove("hidden-item");
        pauseBtn2.classList.add("hidden-item");
        list_span2.forEach((e) => {
          e.classList.remove("active");
        });
        audio2.currentTime = 0;
        // reset
        audio1.pause();
        playBtn1.classList.remove("hidden-item");
        pauseBtn1.classList.add("hidden-item");
        list_span1.forEach((e) => {
          e.classList.remove("active");
        });
        audio1.currentTime = 0;

        break;
      case "Enter":
        // Do something for "enter" or "return" key press.
        break;
      case " ":
        // Do something for "esc" key press.

        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true
);
