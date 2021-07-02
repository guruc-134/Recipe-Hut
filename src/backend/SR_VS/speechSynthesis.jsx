import React from 'react'

function SpeechSynthesis({gender = "female",textInput=""}) {
    var msg = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    msg.voiceURI = 'native';
    msg.volume = 1;
    msg.pitch = 1; 
    msg.lang = 'en-US';
    msg.text = "Welcome" + textInput;
    if(gender === 'male')
        {  msg.voice = voices[20]; 
        msg.rate = .7; 
        }
//  female
    if(gender === 'female')
        {msg.voice = voices[7]; 
        msg.rate = 1;  }
    speechSynthesis.speak(msg);
    return (
        <div>
            
        </div>
    )
}

export default SpeechSynthesis
