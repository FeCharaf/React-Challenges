import { useState } from "react";
import "./App.css";

type Circle = {
  pageX: number;
  pageY: number;
};

function App() {
  const [list, setList] = useState<Circle[]>([]);

  function handleOnClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    let x = event.pageX;
    let y = event.pageY;

    var newCircle : Circle = {
      pageX : x - 25,
      pageY : y - 25,
    };

    setList((prev) => [...prev, newCircle]);
  }

  return (
    <div onClick={handleOnClick} id="Home">
      {list.map((item:Circle, index) => (
        <span key={index} className="Circle" style={{top: `${item.pageY}px`, left: `${item.pageX}px`}}></span>
      ))}
      <h1>Challenge</h1>
    </div>
  );
}

export default App;

