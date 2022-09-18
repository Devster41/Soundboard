import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import shalomMP3 from './audio/Shalom.mp3'
import GymMP3 from './audio/Gym.mp3'
import HelloMP3 from './audio/Hello.mp3'
import HobbitMP3 from './audio/Hobbit.mp3'
import NoMP3 from './audio/No.mp3'
import PantsMP3 from './audio/Pants.mp3'
import RussianByeMP3 from './audio/RussianBye.mp3'
import YesMP3 from './audio/Yes.mp3'
import TenorsMP3 from './audio/Tenors.mp3'
import adderallMP3 from './audio/Forgot adderall.mp3'
import CheesemakersMP3 from './audio/Cheesemakers.mp3'
import PerhapsMP3 from './audio/Perhaps.mp3'
import skyrimMP3 from './audio/Skyrim.mp3'

function App() {
  const shalom = new Audio(shalomMP3)
  const gym = new Audio(GymMP3)
  const hello = new Audio(HelloMP3)
  const no = new Audio(NoMP3)
  const pants = new Audio(PantsMP3)
  const russian = new Audio(RussianByeMP3)
  const hobbit = new Audio(HobbitMP3)
  const yes = new Audio(YesMP3)
  const tenors = new Audio(TenorsMP3)
  const adderall = new Audio(adderallMP3)
  const cheese = new Audio(CheesemakersMP3)
  const perhaps = new Audio(PerhapsMP3)
  const skyrim = new Audio(skyrimMP3)
  

  const start = (param) => {
    param.play()
  }

  return (
    <div className="App">
      <header className="App-header">
      <Stack spacing={2} direction="row" style={{"padding": "15px"}}>
        
        <Button style={{"padding": "15px"}} crossOrigin="anonymous" onClick={event => start(shalom)} variant="contained">Shalom</Button>
        <Button crossOrigin="anonymous" onClick={event => start(gym)} variant="contained">Gym</Button>
        <Button crossOrigin="anonymous" onClick={event => start(hello)} variant="contained">Hello</Button>
        <Button crossOrigin="anonymous" onClick={event => start(no)} variant="contained">No</Button>
        <Button crossOrigin="anonymous" onClick={event => start(yes)} variant="contained">Yes</Button>
        <Button crossOrigin="anonymous" onClick={event => start(pants)} variant="contained">Green pants</Button>
        <Button crossOrigin="anonymous" onClick={event => start(russian)} variant="contained">до свидания</Button>
        </Stack>
        <Stack spacing={2} direction="row">
          <Button style={{"padding": "15px"}} crossOrigin="anonymous" onClick={event => start(hobbit)} variant="contained">Hobbit</Button>
          <Button crossOrigin="anonymous" onClick={event => start(tenors)} variant="contained">Tenor hate</Button>
          <Button crossOrigin="anonymous" onClick={event => start(adderall)} variant="contained">Forgot my adderall</Button>
          <Button crossOrigin="anonymous" onClick={event => start(cheese)} variant="contained">Cheesemakers</Button>
          <Button crossOrigin="anonymous" onClick={event => start(perhaps)} variant="contained">Perhaps</Button>
          <Button crossOrigin="anonymous" onClick={event => start(skyrim)} variant="contained">Skyrim Intro</Button>
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
