import { useEffect, useState } from "react";
import "../styles/Colors.css";

function ColorChallenge() {
  const [color, setColor] = useState();
  const [message, setMessage] = useState("Selecione uma opção");
  const [answers, setAnswers] = useState([]);

  function getColor() {
    let color =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    return color;
  }

  function checkAnswer(answer: string) {
    if (answer === color) {
      setMessage("Correct");
    } else {
      console.log(answer);
      console.log(color);
    }
  }

  useEffect(() => {
    var correctColor = getColor();
    const answers = [correctColor, getColor(), getColor()];
    
    setColor(correctColor);
    setAnswers(answers)
  }, []);

  return (
    <div id="Home">
      <div className="color" id="ColorDiv" style={{ background: color }}></div>
      <div className="options" id="options">
        {answers.map((answer, index) => (
          <button key={index} onClick={() => checkAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
      <div className="answer" id="answer">
        {message}
      </div>
    </div>
  );
}

export default ColorChallenge;
