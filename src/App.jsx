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
import GitButton from './components/git_button/GitButton.jsx'
import ListPositions from './components/list_positions/ListPositions.jsx'

import Photo_Lucas from './components/img/photo.png'
import ByteOdonto from './components/img/Perfil - BD.png'
import Rota_Verde from './components/img/Perfil - RV.png'
import Enigma_of_Fear from './components/img/project01.png'
import Happy_Paws from './components/img/project02.png'

import './App.css'

function App() {

  const number_certificates = 13

  const toolsPO = [
    { text: "trello", img: "https://cdn-icons-png.flaticon.com/512/174/174874.png" },
    { text: "miro", img: "https://files.readme.io/17d4a23-miro-logo-color-square.png" }, 
    { text: "word", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019–present%29.svg/2203px-Microsoft_Office_Word_%282019–present%29.svg.png" },
    { text: "excel", img: "https://static.vecteezy.com/system/resources/thumbnails/027/179/363/small/microsoft-excel-icon-logo-symbol-free-png.png" }, 
    { text: "scrum", img: "https://cdn-icons-png.flaticon.com/512/8553/8553379.png" }, 
    { text: "bizagi", img: "https://www.baixesoft.com/wp-content/uploads/2017/06/Bizagi-Modeler-icone.png" },
  ];
  
  const toolsPD = [
    { text: "figma", img: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png" },
    { text: "power", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqBiy1t9XTIN9GMa25sQHutx9lRPIrvW1hg&s" }, 
    { text: "miro", img: "https://files.readme.io/17d4a23-miro-logo-color-square.png" },
    { text: "pinter", img: "https://cdn-icons-png.flaticon.com/512/174/174863.png" }, 
    { text: "paint", img: "https://img.utdstc.com/icon/5f1/f5f/5f1f5f3ba264aaf307db2dece6695326a02ca427fb29be45b70f7d18c3eea143:200" },
  ];

  const toolsDFE = [
    { text: "html", img: "https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/html-512.png" },
    { text: "css", img: "https://cdn.iconscout.com/icon/free/png-256/free-css3-logo-icon-download-in-svg-png-gif-file-formats--css-programming-langugae-language-pack-logos-icons-1175237.png?f=webp&w=256" },
    { text: "js", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwL--h8BE2ZUahfb8Tj0RDno-V65VMe79-CA&s" },
    { text: "react", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" },
    { text: "github", img: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
    { text: "git", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFT1MO4Ln0Ynz4VKkD2EDyylsYzoVg1d8FiQ&s" },
    { text: "vscode", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJ7ry_nf70RptiBPXBrOyeqLtJm5FFt2uFQ&s" }
  ]

  const toolsDBE = [
    { text: "python", img: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" },
    { text: "django", img: "https://www.svgrepo.com/show/353657/django-icon.svg" },
    { text: "c", img: "https://img.icons8.com/?size=512&id=40670&format=png" },
    { text: "c++", img: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png" },
    { text: "java", img: "https://brandlogos.net/wp-content/uploads/2021/11/java-logo.png" },
    { text: "mySQL", img: "https://miro.medium.com/v2/resize:fit:256/1*hcPKbZ2XgDjGFKvTDi79Jw.png" },
    { text: "github", img: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
    { text: "git", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFT1MO4Ln0Ynz4VKkD2EDyylsYzoVg1d8FiQ&s" },
    { text: "vscode", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJ7ry_nf70RptiBPXBrOyeqLtJm5FFt2uFQ&s" }
  ]

  const toolsQA = [
    { text: "notion", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjndQqBR1-JgfwoZDnMWAramovIinwm2ZPA&s" },
    { text: "python", img: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" },
    { text: "js", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwL--h8BE2ZUahfb8Tj0RDno-V65VMe79-CA&s" },
    { text: "vscode", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJ7ry_nf70RptiBPXBrOyeqLtJm5FFt2uFQ&s" }
  ]
  
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
        <PrintDisplay type="PRINFT" frase="PROJECTS CARRIED OUT ALONE" />
        <div className='list github'>
          <GitButton img={Enigma_of_Fear} name="Enigma of Fear" url="https://github.com/LucasfcBastos/Enigma-of-Fear"/>
          <GitButton img={Happy_Paws} name="Happy paws" url="https://github.com/LucasfcBastos/Happy-Paws"/>
        </div>
      </div>
      <div className='camp' id="knowledge">
        <Hexagon text="knowledge and experience"/>
        <p className='camp text'>My knowledge is divided into five professional areas, where I have been able to apply my theoretical and practical knowledge. The scores for each one are the result of an assessment the team made of me</p>
        <div className="list area">
          <ListPositions
            text="Product Owner (PO)"
            numb={5}
            tools={toolsPO} />
          <ListPositions
            text="Product Designer (PD)"
            numb={4.5}
            tools={toolsPD} />
          <ListPositions  
            text="Developer Front-End (DFE)"
            numb={5}
            tools={toolsDFE} />
          <ListPositions
            text="Developer Back-End (DBE)"
            numb={5}
            tools={toolsDBE} />
          <ListPositions
            text="Quality Assurance (QA)"
            numb={4.5}
            tools={toolsQA} />
        </div>
      </div>
      <div className='camp' id="contact">
        <Hexagon text="forms of contact"/>
      </div>
    </>
  )
}

export default App