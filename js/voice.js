var txtInput = document.querySelector('#txtInput').innerHTML;
var voiceList = document.querySelector('#voiceList');
var btnSpeak = document.querySelector('#btnSpeak');
var btnStop = document.querySelector('#btnStop');
var synth = window.speechSynthesis;
var voices = [];


btnStop.addEventListener('click', () => {
if (window.speechSynthesis.speaking) {
window.speechSynthesis.cancel();
}
})
PopulateVoices();

if (speechSynthesis !== undefined) {
    speechSynthesis.onvoiceschanged = PopulateVoices;
}

btnSpeak.addEventListener('click', () => {

    if ('speechSynthesis' in window) {
        // Web Speech API is supported
        alert("it's working");
      } else {
        alert("it's not working");
        // Web Speech API is not supported
      }
    // addEventListener('load', () => {
    // var toSpeak = new SpeechSynthesisUtterance(txtInput.value);
    var toSpeak = new SpeechSynthesisUtterance(txtInput);
    var selectedVoiceName = voiceList.selectedOptions[0].getAttribute('data-name');
    voices.forEach((voice) => {
        if (voice.name === selectedVoiceName) {
            toSpeak.voice = voice;
        }
    });
    synth.speak(toSpeak);
});




function PopulateVoices() {
    voices = synth.getVoices();
    var selectedIndex = voiceList.selectedIndex < 0 ? 0 : voiceList.selectedIndex;
    voiceList.innerHTML = '';
    voices.forEach((voice) => {
        var listItem = document.createElement('option');
        listItem.textContent = voice.name;
        listItem.setAttribute('data-lang', voice.lang);
        listItem.setAttribute('data-name', voice.name);
        voiceList.appendChild(listItem);
    });

    voiceList.selectedIndex = selectedIndex;

}