import Fixed from './components/fixed/Fixed.jsx'
import BackgroundAnimation from './components/background_animation/BackgroundAnimation.jsx'
import TypingText from './components/typing_text/TypingText.jsx'
import ButtonUltraT from './components/button_ultra_t/ButtonUltraT.jsx'

import Photo_Lucas from './components/img/photo.png'

import './App.css'

function App() {
  return (
    <>
      <div className="menu">
        <Fixed />
      </div>
      <BackgroundAnimation />
      <div className='camp' id='main'>
        <img src={Photo_Lucas} />
        <div className="info">
          <TypingText />
          <p id="cargo" className='jersey-text'>SOFTWARE ENGINEER</p>
          <ButtonUltraT text="DOWNLOAD MY CV HERE"/>
        </div>
      </div>
    </>
  )
}

export default App