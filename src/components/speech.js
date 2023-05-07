import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechText = () => {
    const navigate = useNavigate();
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
  return (
    <div className='speech'>
        <div className='nav'>
            <Button className='nav-btn' onClick={()=>navigate('/')}>Dashboard</Button>
        </div>
        <div className='main'>
            <h1>Microphone: {listening ? 'on' : 'off'}</h1>
            <div className='btn-grp'>
                <Button onClick={SpeechRecognition.startListening}>Start</Button>
                <Button onClick={SpeechRecognition.stopListening}>Stop</Button>
                <Button onClick={resetTranscript}>Reset</Button>
            </div>
            <p className='result'>{transcript}</p>
      </div>
    </div>
  );
}

export default SpeechText;
