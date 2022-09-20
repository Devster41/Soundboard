import './App.css';
import {isMobile} from 'react-device-detect';
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
import AstrologyMP3 from './audio/Astrology.mp3'
import CrapMP3 from './audio/Crap.mp3'
import CSMajorMP3 from './audio/CSMajor.mp3'
import ComputerMP3 from './audio/Computer.mp3'
import JesusMP3 from './audio/Jesus.mp3'
import QueenMP3 from './audio/Queen.mp3'
import LoathingMP3 from './audio/Loathing.mp3'
import SorryMP3 from './audio/Sorry.mp3'
import StupidMP3 from './audio/Stupid.mp3'
import WhatMP3 from './audio/What.mp3'
import WrongMP3 from './audio/Wrong.mp3'
import MayhapsMP3 from './audio/Mayhaps.mp3'
import HeightMP3 from './audio/Height.mp3'

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
  const Stupid = new Audio(StupidMP3)
  const Mayhaps = new Audio(MayhapsMP3)
  const Crap = new Audio(CrapMP3)
  const CSMajor = new Audio(CSMajorMP3)
  const Computer = new Audio(ComputerMP3)
  const Jesus = new Audio(JesusMP3)
  const Queen = new Audio(QueenMP3)
  const Loathing = new Audio(LoathingMP3)
  const Astrology = new Audio(AstrologyMP3)
  const Sorry = new Audio(SorryMP3)
  const What = new Audio(WhatMP3)
  const Wrong = new Audio(WrongMP3)
  const Height = new Audio(HeightMP3)
  

  const start = (param) => {
    param.play()
  }

  if (isMobile) {
  return (
    <div className="App">
      <header className="App-header">
        <Stack spacing={2} direction="row" style={{"padding": "15px"}}>
        
          <Button crossOrigin="anonymous" onClick={event => start(shalom)} variant="contained">Shalom</Button>
          <Button crossOrigin="anonymous" onClick={event => start(gym)} variant="contained">Gym</Button>
          <Button crossOrigin="anonymous" onClick={event => start(hello)} variant="contained">Hello</Button>
          <Button crossOrigin="anonymous" onClick={event => start(no)} variant="contained">No</Button>
        </Stack>
        <Stack spacing={2} direction="row" style={{"padding": "15px"}}>
          <Button crossOrigin="anonymous" onClick={event => start(yes)} variant="contained">Yes</Button>
          <Button crossOrigin="anonymous" onClick={event => start(pants)} variant="contained">Green pants</Button>
          <Button crossOrigin="anonymous" onClick={event => start(russian)} variant="contained">до свидания</Button>
          <Button crossOrigin="anonymous" onClick={event => start(hobbit)} variant="contained">Hobbit</Button>
        </Stack>
        <Stack spacing={2} direction="row" style={{"padding": "15px"}}>
          <Button crossOrigin="anonymous" onClick={event => start(tenors)} variant="contained">Tenor hate</Button>
          <Button crossOrigin="anonymous" onClick={event => start(adderall)} variant="contained">Forgot my adderall</Button>
          <Button crossOrigin="anonymous" onClick={event => start(cheese)} variant="contained">Cheesemakers</Button>
        </Stack>
        <Stack spacing={2} direction="row" style={{"padding": "15px"}}>
          <Button crossOrigin="anonymous" onClick={event => start(perhaps)} variant="contained">Perhaps</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Stupid)} variant="contained">That's Stupid</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Mayhaps)} variant="contained">Mayhaps</Button>
        </Stack>
        <Stack spacing={2} direction="row" style={{"padding": "15px"}}>
          <Button crossOrigin="anonymous" onClick={event => start(CSMajor)} variant="contained">CS Major Arms</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Astrology)} variant="contained">Astrology sign</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Sorry)} variant="contained">Sorry</Button>
        </Stack>
        <Stack spacing={2} direction="row" style={{"padding": "15px"}}>
          <Button crossOrigin="anonymous" onClick={event => start(What)} variant="contained">What?</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Wrong)} variant="contained">Wrong</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Height)} variant="contained">I'm 6'1</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Loathing)} variant="contained">Self loathing male</Button>
        </Stack>
        <Stack spacing={2} direction="row" style={{"padding": "15px"}}>
          <Button crossOrigin="anonymous" onClick={event => start(Crap)} variant="contained">Crap</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Queen)} variant="contained">Honoring the Queen</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Jesus)} variant="contained">Jesus Christ</Button>
        </Stack>
        <Stack spacing={2} direction="row" style={{"padding": "15px"}}>
          <Button crossOrigin="anonymous" onClick={event => start(Computer)} variant="contained">Computer is my child</Button>
          <Button crossOrigin="anonymous" onClick={event => start(skyrim)} variant="contained">Skyrim Intro</Button>
        </Stack>
      </header>
    </div>
    
  );
  } else {
    return (
    <div className="App">
      <header className="App-header">
      
      <Stack spacing={2} direction="row" style={{"padding": "15px"}}>
        <Button crossOrigin="anonymous" onClick={event => start(shalom)} variant="contained">Shalom</Button>
        <Button crossOrigin="anonymous" onClick={event => start(gym)} variant="contained">Gym</Button>
        <Button crossOrigin="anonymous" onClick={event => start(hello)} variant="contained">Hello</Button>
        <Button crossOrigin="anonymous" onClick={event => start(no)} variant="contained">No</Button>
        <Button crossOrigin="anonymous" onClick={event => start(yes)} variant="contained">Yes</Button>
        <Button crossOrigin="anonymous" onClick={event => start(pants)} variant="contained">Green pants</Button>
        <Button crossOrigin="anonymous" onClick={event => start(russian)} variant="contained">до свидания</Button>
      </Stack>
        <Stack spacing={2} direction="row" style={{"padding": "15px"}}>
          <Button crossOrigin="anonymous" onClick={event => start(hobbit)} variant="contained">Hobbit</Button>
          <Button crossOrigin="anonymous" onClick={event => start(tenors)} variant="contained">Tenor hate</Button>
          <Button crossOrigin="anonymous" onClick={event => start(adderall)} variant="contained">Forgot my adderall</Button>
          <Button crossOrigin="anonymous" onClick={event => start(cheese)} variant="contained">Cheesemakers</Button>
          <Button crossOrigin="anonymous" onClick={event => start(perhaps)} variant="contained">Perhaps</Button>
          <Button crossOrigin="anonymous" onClick={event => start(skyrim)} variant="contained">Skyrim Intro</Button>
        </Stack>

        <Stack spacing={2} direction="row" style={{"padding": "15px"}}>
        <Button crossOrigin="anonymous" onClick={event => start(Crap)} variant="contained">Crap</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Queen)} variant="contained">Honoring the Queen</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Jesus)} variant="contained">Jesus Christ</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Computer)} variant="contained">Computer is my child</Button>
          <Button crossOrigin="anonymous" onClick={event => start(CSMajor)} variant="contained">CS Major Arms</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Astrology)} variant="contained">Astrology sign</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Sorry)} variant="contained">Sorry</Button>
        </Stack>

        <Stack spacing={2} direction="row" style={{"padding": "15px"}}>
          <Button crossOrigin="anonymous" onClick={event => start(Loathing)} variant="contained">Self-loathing</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Stupid)} variant="contained">No that's stupid</Button>
          <Button crossOrigin="anonymous" onClick={event => start(What)} variant="contained">What</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Wrong)} variant="contained">What is wrong with you?</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Height)} variant="contained">I'm 6'1</Button>
          <Button crossOrigin="anonymous" onClick={event => start(Mayhaps)} variant="contained">Mayhaps</Button>
        </Stack>
      </header>
    </div>
    );
  }
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
