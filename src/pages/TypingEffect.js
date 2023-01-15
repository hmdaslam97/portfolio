import React from 'react';
import Typewriter from "typewriter-effect";
import '../styles/TypingEffect.css';
import fire from '../assets/fire.gif'
import resume from '../assets/resume.pdf'

function TypingEffect() {
    const downloadResume = () => {
        fetch(resume).then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'React updated resume.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className="myName">
            <Typewriter onInit={(typewriter) => { 
            typewriter
                .typeString(`<span id="start">Hello - I'm <span id='name'> Mohammed Aslam </span></span>`).pauseFor(1000)
                .typeString(`<br><span id="start">I am a React Developer with passion for creating React based websites!</span>`)
                .stop().start()
        }} />
            <a id='resume' onClick={downloadResume}><img src={fire} />Download My Resume<img src={fire} /></a>
        </div>
    );
}

export default TypingEffect;