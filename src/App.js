import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './components/Dashboard';
import SpeechText from './components/speech';
import TextSpech from './components/TextSpeech';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/speech' element={<SpeechText/>}/>
        <Route path='/text' element={<TextSpech/>}/>
      </Routes>
    </div>
  );
}

export default App;
