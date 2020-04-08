let getAudio = function(audioKey) {
  return document.querySelector(`audio[data-key="${audioKey}"]`);
};
let getAudioElement = function(audioKey) {
  return document.querySelector(`div[data-key="${audioKey}"]`);
};
let playAudio = function(audio, element) {
  element.classList.toggle("playing");
  audio.play();
};
let playAudioOnElementClick = function(evt) {
  let divElement = evt.target;
  if (evt.target.tagName != "DIV") {
    divElement = evt.target.parentElement;
  }
  let keySound = divElement.dataset.key;
  let audio = getAudio(keySound);
  if (audio) playAudio(audio, divElement);
};
let playAudioOnKeyPress = function(keyCode) {
  let audio = getAudio(keyCode);
  let divElement = getAudioElement(keyCode);
  if (audio) playAudio(audio, divElement);
};
window.onload = function() {
  let keys = document.querySelectorAll(".key");
  for (const key of keys) {
    key.addEventListener("click", playAudioOnElementClick);
    key.addEventListener("transitionend", function(evt) {
      evt.target.classList.remove("playing");
    });
  }
};
window.onkeydown = function(event) {
  var char = event.keyCode;
  playAudioOnKeyPress(char);
};
