import { useSpeechSynthesis } from '@readpanda/react-speech-kit';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const TextSpech = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const { speak } = useSpeechSynthesis();

  return (
    <div className='text'>
      <div className='nav'>
        <Button className='nav-btn' onClick={()=>navigate('/')}>Dashboard</Button>
      </div>
      <div className='main'>
        <textarea className='area'
          value={value}
          placeholder='Write here.....'
          onChange={(event) => setValue(event.target.value)}
        />
        <Button onClick={() => speak({ text: value })}>Speak</Button>
      </div>
      
    </div>

  );
}

export default TextSpech;
