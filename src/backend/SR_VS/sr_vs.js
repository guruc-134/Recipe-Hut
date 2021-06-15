import React  from 'react'

function SpeechRecognition({setQuestion, shallStop}) {
    var recognizing;
    var mic ='https://img.icons8.com/material/24/000000/microphone--v1.png'
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
        mic =  "https://img.icons8.com/material/24/000000/microphone--v1.png"
    }
    
    if (shallStop)
    {
        recognition.stop()
        reset()
    }
    function toggleStartStop() {
        if (recognizing) {
            recognition.stop();
            reset();
        } else {
            recognition.start();
            recognizing = true;
            mic = "https://img.icons8.com/material-sharp/24/000000/block-microphone.png"
        }
    }
    
return (
    <div className= 'speech-recognition' onClick={toggleStartStop}>
        <p className = 'speech-recognition-prompt'>{ "click to speak"}</p>
        <img src={mic} alt = 'microphone' />
    </div>
)
}

export default SpeechRecognition


