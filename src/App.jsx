import Fixed from './components/fixed/Fixed.jsx'
import BackgroundAnimation from './components/background_animation/BackgroundAnimation.jsx'
import TypingText from './components/typing_text/TypingText.jsx'
import ButtonUltraT from './components/button_ultra_t/ButtonUltraT.jsx'
import Hexagon from './components/hexagon/Hexagon.jsx'
import TextColor from './components/TextColor.jsx'
import ImgPixel from './components/img_pixel/ImgPixel.jsx'
import PrintDisplay from './components/print_display/PrintDisplay.jsx'
import Evaluation from './components/evaluation/Evaluation.jsx'
import Certificates from './components/certificates_/Certificates.jsx'
import SouthAnimation from './components/south_animation/SouthAnimation.jsx'
import InstButton from './components/inst_button/InstButton.jsx'

import Photo_Lucas from './components/img/photo.png'
import ByteOdonto from './components/img/Perfil - BD.png'
import Rota_Verde from './components/img/Perfil - RV.png'

import './App.css'

function App() {

  const number_certificates = 13

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
      <div className='camp' id='traineng'>
        <Hexagon text="academic training"/>
        <PrintDisplay type="PRINT" frase="Degree in Software Engineering" />
        <div className='content'>
          <div>
            <p className='camp text'>I graduated from the Evangelical University of Goiás - UniEVANGÉLICA, in Anápolis-GO. I started in February 2023 and am due to finish in December 2026. Throughout my academic journey, I have acquired knowledge in various areas, such as:</p>
            <ul>
              <li>Product Owner (PO)</li>
              <li>Product Designer (PD)</li>
              <li>Developer Front-End (DFE)</li>
              <li>Developer Back-End (DBE)</li>
              <li>Quality Assurance (QA)</li>
            </ul>
          </div>
          <img src="https://www4.unievangelica.edu.br/storage/4613/unievangelica2.jpg"></img>
        </div>
        <div className='reviews'>
          <Evaluation text="Google" url="https://www.google.com/search?client=opera-gx&q=unievangelica&sourceid=opera&ie=UTF-8&oe=UTF-8#lrd=0x935ea41e3d4f01bb:0xc7932a89efac8958,1,,,," numb={4.5} avali={782} />
          <Evaluation text="Guia da carreira" url="https://www.guiadacarreira.com.br/faculdades/unievangelica-centro-universitario-de-anapolis/cursos/engenharia-de-software" condicao={true} numb={5} avali={3} />
          <Evaluation text="Mec" url="https://www4.unievangelica.edu.br/noticia/4589-cursos-da-unievangelica-recebem-nota-4-na-avaliacao-do-mec" numb={4} />
        </div>
      </div>
      <div className='camp' id='courses'>
        <Hexagon text="complementary courses"/>
        <div className='list'>
          <Certificates img="https://www.scrumstudy.com/Scrum-Images/brand-logo/badge-SFC.png" link="scrumstudy.com" type="scrum fundamentals certified" data="march 14, 2024" url="https://www.scrumstudy.com/certification/verify?type=SFC&number=1020875"/>
          <Certificates img="https://hermes.dio.me/courses/badge/c521ffc5-3b42-49b2-86db-46ae70b2e260.png" link="dio.me" type="ia applied to data" data="january 17, 2025" url="https://www.dio.me/certificate/80ZUMOZV/share"/>
          <Certificates img="https://hermes.dio.me/courses/badge/406684a4-396d-4160-94b9-ead934e18564.png" link="dio.me" type="code versioning with git and github" data="february 10, 2025" url="https://www.dio.me/certificate/TWQTOHWW/share"/>
        </div>
        <div className='text_and_anim'>
          <p className='camp text'>I currently have around {number_certificates} certifications and I'm always looking for more knowledge. I have certifications from UniEVANGÉLICA, Microsoft, Scrumstudy, Dio and Bradesco and many others. I'm always looking for new knowledge to grow as an engineer and to help my team develop projects.</p>
          <SouthAnimation />
        </div>
      </div>
      <div className='camp' id="projects">
        <Hexagon text="projects carried out"/>
        <PrintDisplay type="PRINFT" frase="PROJECTS CARRIED OUT AT UNIVERSITY" />
        <div className='list inst'>
          <InstButton img={ByteOdonto} origem="integrating project" name="ByteOdonto" url="https://www.instagram.com/bytedonto/"/>
          <InstButton img={Rota_Verde} origem="hackathon project" name="Rota Verde" url="https://www.instagram.com/rota_verde_/"/>
        </div>
      </div>
    </>
  )
}

export default App