
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
  let audioBtn1 = document.querySelector("#audio1-all");
  let pauseBtn1 = document.querySelector(".play_pause1");
  let playBtn1 = document.querySelector(".play_play1");
  let listSpan1 = document.querySelectorAll(".progress1 span");
  // Audio 2
  let audio2 = document.querySelector("#audio2");
  let audioBtn2 = document.querySelector("#audio2-all");
  let pauseBtn2 = document.querySelector(".play_pause2");
  let playBtn2 = document.querySelector(".play_play2");
  let listSpan2 = document.querySelectorAll(".progress2 span");
  // Audio 3
  let audio3 = document.querySelector("#audio3");
  let audioBtn3 = document.querySelector("#audio3-all");
  let pauseBtn3 = document.querySelector(".play_pause3");
  let playBtn3 = document.querySelector(".play_play3");
  let listSpan3 = document.querySelectorAll(".progress3 span");
  
  const handleResetAudio = (audioNumber) => {
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
  
  audioBtn1.addEventListener("click", () => {
    if (audio1.paused) {
      audio1.play();
      playBtn1.classList.add("hidden-item");
      pauseBtn1.classList.remove("hidden-item");
      //
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
  
  audioBtn2.addEventListener("click", () => {
    if (audio2.paused) {
      audio2.play();
      playBtn2.classList.add("hidden-item");
      pauseBtn2.classList.remove("hidden-item");
      //
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
  
  audioBtn3.addEventListener("click", () => {
    if (audio3.paused) {
      audio3.play();
      playBtn3.classList.add("hidden-item");
      pauseBtn3.classList.remove("hidden-item");
  
      //
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
      listSpan3.forEach((e) => {
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
  