const audioFiles = {
    s: "sounds/boom.wav",
    c: "sounds/clap.wav",
    v: "sounds/hihat.wav",
    b: "sounds/kick.wav",
    n: "sounds/openhat.wav",
    m: "sounds/ride.wav",
    l: "sounds/snare.wav",
    p: "sounds/tink.wav",
    o: "sounds/tom.wav"
  };
  
  document.addEventListener("keypress", (event) => {
    const key = event.key.toLowerCase(); 
  
    if (audioFiles.hasOwnProperty(key)) {
      const audio = new Audio(audioFiles[key]);
      audio.play();
    }
  });