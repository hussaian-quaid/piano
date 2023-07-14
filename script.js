const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".key-checkbox input");

let allKeys = [],
audio = new Audio("a.wav");

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; //passing audio src based on the key pressed
    audio.play(); //playing audio

    const clickedKey = document.querySelector(`[data-keys=${key}]`); //getting clicked key element
    clickedKey.classList.add("active"); //adding active class to the clicked key element
    setTimeout(() => { //removing active class after 150ms from the clicked key element
        clickedKey.classList.remove("active");
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
}

const showHideKeys = (e) => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {

    if(allKeys.includes(e.key))playTune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);