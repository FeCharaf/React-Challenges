import { useEffect } from "react";
import "../styles/Colors.css";

function ColorChallenge() {
  var newColor = "";
  function Game() {
    var colorDiv = document.getElementById("ColorDiv");
    var isWrong = false;

    //   Gera a opção de 0,1 ou 2
    var option = Math.floor(Math.random() * 3);
    console.log(option);

    if (newColor === "" || !isWrong) {
      //gera um hexadecimal
      let hex: string = "#" + Math.floor(Math.random() * 16777215).toString(16);
      newColor = colorDiv.style = `background-color: ${hex};`;
      console.log(hex);
    }
  }
  useEffect(() => {
    Game();
  }, []);

  return (
    <div id="Home">
      <div className="color" id="ColorDiv"></div>
      <div className="options">
        <button id="0">Test</button>
        <button id="1">Test</button>
        <button id="2">Test</button>
      </div>
      <div className="answer">Wrong Answer</div>
    </div>
  );
}

export default ColorChallenge;
