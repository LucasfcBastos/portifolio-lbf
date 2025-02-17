import Fixed from './components/fixed/Fixed.jsx'
import TypingText from './components/typing_text/TypingText.jsx'
import ButtonUltraT from './components/button_ultra_t/ButtonUltraT.jsx'
import Foto_Lucas from './components/img/photo.png'
import './App.css'

function App() {
  return (
    <>
      <div className="menu">
        <Fixed />
      </div>
      <div className="main">
        <img src={Foto_Lucas} alt="photo" />
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