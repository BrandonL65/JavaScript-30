class Main {
  secondHand = document.querySelector(".second-hand");
  minuteHand = document.querySelector(".min-hand");
  hourHand = document.querySelector(".hour-hand");
  seconds;
  minutes;
  hours;

  run = () => {
    setInterval(() => {
      this.updateTimeEachSecond();
      this.updateHands();
    }, 1000);
  };

  updateTimeEachSecond = () => {
    let now = new Date();
    this.seconds = now.getSeconds();
    this.minutes = now.getMinutes();
    this.hours = now.getHours();
  };

  updateHands = () => {
    let degreesOfRotationSeconds = (this.seconds / 60) * 360;
    this.secondHand.style.transform = `rotate(${degreesOfRotationSeconds}deg)`;

    let degreesOfRotationMins =
      (this.minutes / 60) * 360 + degreesOfRotationSeconds / 60;
    this.minuteHand.style.transform = `rotate(${degreesOfRotationMins}deg)`;

    let degreesOfRotationHours =
      (this.hours / 12) * 360 + degreesOfRotationMins / 60;
    this.hourHand.style.transform = `rotate(${degreesOfRotationHours}deg)`;
  };
}

let main = new Main();
main.run();
