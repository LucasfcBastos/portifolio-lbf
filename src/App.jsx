import Fixed from './components/fixed/Fixed.jsx'

import BackgroundAnimation from './components/background_animation/BackgroundAnimation.jsx'

import TypingText from './components/typing_text/TypingText.jsx'
import ButtonUltraT from './components/button_ultra_t/ButtonUltraT.jsx'

import Hexagon from './components/hexagon/Hexagon.jsx'
import TextColor from './components/TextColor.jsx'
import ImgPixel from './components/img_pixel/ImgPixel.jsx'


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
      <div className='camp' id='about'>
        <Hexagon text="ABOUT ME"/>
        <p className='camp text'>
          <TextColor text="&lt;" color="#ffff00" /><TextColor text="H1 class" color="#00ff00" /><TextColor text="=" color="#ffff00" /><TextColor text="&quot;print&quot;" color="#00BBFF" /><TextColor text="&gt;" color="#ffff00" />Hello world!<TextColor text="&lt;/" color="#ffff00" /><TextColor text="H1" color="#00ff00" /><TextColor text="&gt;" color="#ffff00" /><br></br>
          <TextColor text="&lt;" color="#ffff00" /><TextColor text="p" color="#00ff00" /><TextColor text="&gt;" color="#ffff00" />My name is Lucas and I'm a Software Engineering student with a keen interest in technology and systems development. Although I don't have any professional experience yet, I'm looking for my first job to put into practice the knowledge I've acquired during my training. I am dedicated, curious and always willing to learn, constantly seeking to improve my technical and conceptual skills. I believe that the best way to grow professionally is through real-life experience and team collaboration, so I'm looking for opportunities that will allow me to contribute, develop my skills and evolve within the area. I'm excited to face new challenges and ready to give my best!<TextColor text="&lt;/" color="#ffff00" /><TextColor text="p" color="#00ff00" /><TextColor text="&gt;" color="#ffff00" />
        </p>
        <ImgPixel />
      </div>
    </>
  )
}

export default App