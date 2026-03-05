import { TiltButton } from 'react-tilt-button';
import confetti from 'canvas-confetti';
import './App.css';
import reactLogo from './assets/react.svg';

function playAchievementSound() {
  const audioCtx = new AudioContext();

  // Play two notes back to back for an "achievement" feel
  const notes = [392, 523, 659]; // C5 and E5 in Hz
  notes.forEach((freq, i) => {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.15);

    gainNode.gain.setValueAtTime(0.4, audioCtx.currentTime + i * 0.15);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.15 + 0.9);

    oscillator.start(audioCtx.currentTime + i * 0.15);
    oscillator.stop(audioCtx.currentTime + i * 0.15 + 0.9);
  });
}

function handleClick() {
  playAchievementSound();
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
  });
}

function App() {
  return (
    <div className='page'>
      <img src={reactLogo} alt="React Logo" className='logo' />
      <h1>My First React App</h1>
      <TiltButton
        onClick={handleClick}
        variant="solid"
        width={300}
        height={83}
        elevation={20}
        pressInset={16}
        tilt={0.8}
        radius={15}
        motion={198}
        surfaceColor="#3b82f6"
        sideColor="#1d4ed8"
        textColor="#ffffff"
        borderColor="transparent"
        borderWidth={0}
        glareColor="#ffffff"
        glareOpacity={0.075}
        glareWidth={40}
      >Click me!</TiltButton>

    </div >

  )
}

export default App