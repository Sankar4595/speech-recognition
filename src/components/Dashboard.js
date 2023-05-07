import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

  return (
    <div className='dash'>
        <h1>Spech Recognition</h1>
        <Button onClick={()=>navigate('/speech')}>Speech To Text</Button>
        <Button onClick={()=>navigate('/text')}>Text To Speech</Button>
    </div>
  );
}

export default Dashboard;
