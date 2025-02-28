import { useState, useEffect } from "react";
import './TypingText.css'

const TypingAnimation = ({ text }) => {
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink] = useState(true);
  const [h1Style, setH1Style] = useState({});

  useEffect(() => {
    if (isDeleting) {
      if (index > 0) {
        setTimeout(() => setIndex((prev) => prev - 1), 100);
      } else {
        setH1Style({ gap: "10px" })
        setTimeout(() => {
          setH1Style({ gap: "0px" })
          setIsDeleting(false)
        }, 3000);
      }
    } else {
      if (index < text.length) {
        setTimeout(() => setIndex((prev) => prev + 1), 100);
      } else {
        setH1Style({ gap: "10px" })
        setTimeout(() => {
          setH1Style({ gap: "0px" })
          setIsDeleting(true)}
        , 6000);
      }
    }
  }, [index, isDeleting, text]);

  return (
    <p style={h1Style} className="Typing">
      {text.substring(0, index)}
      {blink ? <div className="bar"></div> : "" }
    </p>
  );
};

export default function App() {
  return <TypingAnimation text="LUCAS BASTOS FRANCO" />;
}