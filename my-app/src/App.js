import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import sound from './Shalom.mp3'


function App() {
  const audio = new Audio(sound)

  const start = () => {
    audio.play()
  }

  return (
    <div className="App">
      <header className="App-header">
      <Stack spacing={2} direction="row">
        <Button crossOrigin="anonymous" onClick={start} variant="contained">Shalom</Button>
      </Stack>
      </header>
    </div>
  );
}


export function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

export default App;
