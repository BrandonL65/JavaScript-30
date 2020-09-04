class Main {
  keys = document.querySelectorAll(".key");

  run = () => {
    this.playAudioOnKeyDown();
    this.addPlayEffectToLetter();
  };

  playAudioOnKeyDown = () => {
    document.addEventListener("keydown", (e) => {
      let audioFile = document.querySelector(`audio[data-key="${e.keyCode}"]`);
      if (audioFile) {
        audioFile.currentTime = 0; //rewinds audio for playing many times in a row
        audioFile.play();
      }
    });
  };

  addPlayEffectToLetter = () => {
    document.addEventListener("keydown", (e) => {
      let validKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if (validKey) {
        validKey.classList.add("playing");
      }
    });

    this.keys.forEach((key) =>
      key.addEventListener("transitionend", () => {
        key.classList.remove("playing");
      })
    );
  };
}

const main = new Main();

main.run();
