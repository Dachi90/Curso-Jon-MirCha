const d = document;

export default function speechVoice() {
  const $text = d.getElementById("text");
  const $voiceSelect = d.getElementById("voices");

  let voices = [];

  function populateVoices() {
    voices = speechSynthesis.getVoices();
    //console.log(voices);
    voices.forEach((el) => {
      let option = d.createElement("option");
      option.textContent = el.name + " (" + el.lang + " )";
      //console.log(option);
      option.setAttribute("data-lang", el.lang);
      option.setAttribute("data-name", el.name);
      $voiceSelect.appendChild(option);
    });
  }
  speechSynthesis.addEventListener("voiceschanged", populateVoices);

  d.addEventListener("click", (e) => {
    if (e.target.matches("#readBtn")) {
      e.preventDefault();
      let utterThis = new SpeechSynthesisUtterance($text.value);
      //console.log($text);
      let selectedOption = $voiceSelect.selectedOptions[0].getAttribute("data-name");
      //console.log("Voz seleccionada: " + selectedOption);
      voices.forEach((el) => {
        if (el.name === selectedOption) {
          utterThis.voice = el;
          //console.log(utterThis);
        }
      });

      window.speechSynthesis.speak(utterThis);
    }
  });
}
