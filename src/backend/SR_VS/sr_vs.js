const btn = document.querySelector(".speech-recognition")

//  setting up recognizer
var recognizing;
const recognition = new webkitSpeechRecognition()
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives  = 1;
recognition.onend = reset();
reset();

btn.addEventListener('click', () =>
{
    toggleStartStop()
})
//  extracting the result
recognition.onresult = (e) =>
{
    var transcript = e.results[e.results.length - 1][0].transcript.trim();
    console.log(transcript)
}
function reset() {
    recognizing = false;
    btn.innerHTML = "Click to Speak";
}
    
function toggleStartStop() {
    if (recognizing) {
        recognition.stop();
        reset();
    } else {
        recognition.start();
        recognizing = true;
        btn.innerHTML = "Click to Stop";
    }
}




//  voice synthesis

