let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

btn1.addEventListener("keypress", (event) => {
  if (event.key === "s") {
    let audio = new Audio("sounds/boom.wav");

    btn1.innerHTML = audio.play(audio);
    btn1.innerHTML = "boom";
    setTimeout(() => {
      btn1.innerHTML = "Press s";
    }, 2000);
  }

  console.log(event.key);
});

btn2.addEventListener("keypress", (event) => {
  if (event.key === "c") {
    let audio = new Audio("sounds/clap.wav");

    btn2.innerHTML = audio.play(audio);
    btn2.innerHTML = "clap";
    setTimeout(() => {
      btn2.innerHTML = "Press c";
    }, 2000);
  }
  console.log(event.key)
});

btn3.addEventListener("keypress", (event) => {
  if (event.key === "v") {
    let audio = new Audio("sounds/hihat.wav");

    btn3.innerHTML = audio.play(audio);
    btn3.innerHTML = "hithat";
    setTimeout(() => {
      btn3.innerHTML = "Press v";
    }, 2000);
  }
  console.log(event.key)
});

btn4.addEventListener("keypress", (event) => {
  if (event.key === "b") {
    let audio = new Audio("sounds/kick.wav");

    btn4.innerHTML = audio.play(audio);
    btn4.innerHTML = "kick";
    setTimeout(() => {
      btn4.innerHTML = "Press b";
    }, 2000);
  }
  console.log(event.key)
});

btn5.addEventListener("keypress", (event) => {
  if (event.key === "n") {
    let audio = new Audio("sounds/openhat.wav");

    btn5.innerHTML = audio.play(audio);
    btn5.innerHTML = "openhat";
    setTimeout(() => {
      btn5.innerHTML = "Press n";
    }, 2000);
  }
  console.log(event.key)
});

btn6.addEventListener("keypress", (event) => {
  if (event.key === "m") {
    let audio = new Audio("sounds/ride.wav");

    btn6.innerHTML = audio.play(audio);
    btn6.innerHTML = "ride";
    setTimeout(() => {
      btn6.innerHTML = "Press m";
    }, 2000);
  }
  console.log(event.key)
});

btn7.addEventListener("keypress", (event) => {
  if (event.key === "l") {
    let audio = new Audio("sounds/snare.wav");

    btn7.innerHTML = audio.play(audio);
    btn7.innerHTML = "snare";
    setTimeout(() => {
      btn7.innerHTML = "Press l";
    }, 2000);
  }
  console.log(event.key)
});

btn8.addEventListener("keypress", (event) => {
  if (event.key === "p") {
    let audio = new Audio("sounds/tink.wav");

    btn8.innerHTML = audio.play(audio);
    btn8.innerHTML = "tink";
    setTimeout(() => {
      btn8.innerHTML = "Press p";
    }, 2000);
  }
  console.log(event.key)
});

btn9.addEventListener("keypress", (event) => {
  if (event.key === "o") {
    let audio = new Audio("sounds/tom.wav");

    btn9.innerHTML = audio.play(audio);
    btn9.innerHTML = "tom";
    setTimeout(() => {
      btn9.innerHTML = "Press o";
    }, 2000);
  }
  console.log(event.key)
});
