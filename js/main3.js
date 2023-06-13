function loadPageFunction() {
  // const loadingPage = document.getElementById("loading-page");
  // console.log("loadingPage");
  // const contentPage = document.getElementById("page-content");
  // loadingPage.classList.add("display-none");
  // contentPage.classList.remove("display-none");
}







/**
 * Audio player controls 11111111111111111111111
 */

(() => {
  var progressBar1= document.querySelector(".progress1");

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
  current.textContent = timeFormat(time_current);

  list_span1[position].classList.add("active");
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
 * Audio player controls 2222222222222222222
 */

(() => {
  var progressBar2= document.querySelector(".progress2");

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
  current.textContent = timeFormat(time_current);

  list_span2[position].classList.add("active");
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
 * Audio player controls 333333333333333
 */

(() => {
  var progressBar3= document.querySelector(".progress3");

  for (i = 0; i < 100; i++) {
    let span = document.createElement("span");
    span.style.setProperty("--i", i);
    progressBar3.append(span);
  }
})();

let audio3 = document.querySelector("#audio3");
let play_pause3 = document.querySelector(".play_pause3")
let list_span3 = document.querySelectorAll(".progress3 span");

play_pause3.addEventListener("click", () => {
  console.log("click play");
  let playBtn = document.querySelector(".play_play2");
  let pauseBtn = document.querySelector(".play_pause2");

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
  current.textContent = timeFormat(time_current);

  list_span3[position].classList.add("active");
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



/**
 * Audio player controls 444444444444444444
 */

(() => {
  var progressBar4= document.querySelector(".progress4");
  for (i = 0; i < 100; i++) {
    let span = document.createElement("span");
    span.style.setProperty("--i", i);
    progressBar4.append(span);
  }
})();

let audio4 = document.querySelector("#audio4");
let play_pause4 = document.querySelector(".play_pause4")
let list_span4 = document.querySelectorAll(".progress4 span");

play_pause4.addEventListener("click", () => {
  console.log("click play");
  let playBtn = document.querySelector(".play_play4");
  let pauseBtn = document.querySelector(".play_pause4");

  if (audio4.paused) {
    audio4.play();
    playBtn.classList.add("hidden-item");
    pauseBtn.classList.remove("hidden-item");
  } else {
    audio4.pause();
    playBtn.classList.remove("hidden-item");
    pauseBtn.classList.add("hidden-item");
  }
});

audio4.addEventListener("timeupdate", () => {
  time_current = audio4.currentTime;
  time_duration = audio4.duration;

  let position = Math.floor((time_current * 100) / time_duration);
  current.textContent = timeFormat(time_current);

  list_span4[position].classList.add("active");
});

list_span4.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    //remove active classes
    list_span4.forEach((e) => {
      e.classList.remove("active");
    });

    //add active class to selected range
    for (k = 0; k <= index; k++) {
      list_span4[k].classList.add("active");
    }

    //set current time
    let time_go = (index * audio4.duration) / 100;
    audio4.currentTime = time_go;
  });
});

// END AUDIO



/**
 * Audio player controls 5555555555555555
 */

(() => {
  var progressBar5= document.querySelector(".progress5");

  for (i = 0; i < 100; i++) {
    let span = document.createElement("span");
    span.style.setProperty("--i", i);
    progressBar5.append(span);
  }
})();

let audio5 = document.querySelector("#audio5");
let play_pause5 = document.querySelector(".play_pause5");
let list_span5 = document.querySelectorAll(".progress5 span");

play_pause5.addEventListener("click", () => {
  console.log("click play");
  let playBtn = document.querySelector(".play_play5");
  let pauseBtn = document.querySelector(".play_pause5");

  if (audio5.paused) {
    audio5.play();
    playBtn.classList.add("hidden-item");
    pauseBtn.classList.remove("hidden-item");
  } else {
    audio5.pause();
    playBtn.classList.remove("hidden-item");
    pauseBtn.classList.add("hidden-item");
  }
});

audio5.addEventListener("timeupdate", () => {
  time_current = audio5.currentTime;
  time_duration = audio5.duration;

  let position = Math.floor((time_current * 100) / time_duration);

  current.textContent = timeFormat(time_current);

  list_span5[position].classList.add("active");
});

list_span5.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    //remove active classes
    list_span5.forEach((e) => {
      e.classList.remove("active");
    });

    //add active class to selected range
    for (k = 0; k <= index; k++) {
      list_span5[k].classList.add("active");
    }

    //set current time
    let time_go = (index * audio5.duration) / 100;
    audio5.currentTime = time_go;
  });
});

// END AUDIO
