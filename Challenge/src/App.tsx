import { useState } from "react";
import "./App.css";

type T = {
  x: Number;
  y: Number;
};

function App() {
  const [list, setList] = useState<Array<T>>([]);

  function createCircle(e) {
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    var newCircle = {
      x: mouseX,
      y: mouseY,
    };

    setList((prev) => [...prev, newCircle]);
    console.log(list);
  }

  function handleUndo(event) {
    event.stopPropagation();
    
    setList((prev) => {
      const newArray = [...prev].slice(0,-1)
      return newArray
    })
  }

  return (
    <>
      <section>
        {list.map((item: object) => (
          <div className="circle" style={{ left: item.x, top: item.y }}></div>
        ))}

        <div id="home" onClick={createCircle}>
          <h1>Challenge 1</h1>
        </div>
        <div className="btn_div">
          <button className="button" onClick={handleUndo}>
            UNDO
          </button>
          <button className="button">REDO</button>
        </div>
      </section>
    </>
  );
}

export default App;
