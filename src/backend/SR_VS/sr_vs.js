import React  from 'react'

function SpeechRecognition({setQuestion}) {
    var recognizing;
    const sr = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new sr()
    recognition.continuous = true;
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives  = 1;
    recognition.onend = reset();
    reset();
    recognition.onresult = (e) =>
    {
        var transcript = e.results[e.results.length - 1][0].transcript.trim();
        console.log(transcript)
        setQuestion(transcript+"?")
    }
    function reset() {
        recognizing = false;
        var mic = document.querySelector(".mic")
        if(mic) mic.src="https://img.icons8.com/material/24/000000/microphone--v1.png"
    }
    function toggleStartStop() {
        document.querySelector(".speech-recognition").style.textDecoration="strikethrough"
        if (recognizing) {
            recognition.stop();
            reset();
        } else {
            recognition.start();
            recognizing = true;
            var mic = document.querySelector(".mic")
            if(mic) mic.src="https://img.icons8.com/material-sharp/24/000000/block-microphone.png"
        }
    }
    
return (
    <div className= 'speech-recognition' onClick={toggleStartStop}>
        <img className = "mic" src="https://img.icons8.com/material/24/000000/microphone--v1.png" alt = 'microphone' />
        <p className = 'speech-recognition-prompt'></p>
    </div>
)
}

export default SpeechRecognition


