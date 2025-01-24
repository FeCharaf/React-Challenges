import { useState } from "react";
import "./App.css";

type Circle = {
  pageX: number;
  pageY: number;
};

function App() {
  const [list, setList] = useState<Circle[]>([]);
  const [removed, setRemoved] = useState<Circle[]>([]);

  function handleOnClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    let x = event.pageX;
    let y = event.pageY;

    var newCircle: Circle = {
      pageX: x - 25,
      pageY: y - 25,
    };

    setList((prev) => [...prev, newCircle]);
  }

  function handleUndo(event) {
    event.stopPropagation();

    var removedItem:Circle = list.slice((-1))
    
    setRemoved((prev) => [...prev, removedItem])
    
    var newList = list.slice(0, -1)
    setList(newList)
  }

  function handleRedo(event) {
    event.stopPropagation();
  }

  return (
    <div onClick={handleOnClick} id="Home">
      {list.map((item: Circle, index) => (
        <span
          key={index}
          className="Circle"
          style={{ top: `${item.pageY}px`, left: `${item.pageX}px` }}
        ></span>
      ))}
      <div className="btn_div">
        <button className="btn" onClick={handleUndo}>
          ↩ UNDO
        </button>
        <button className="btn" onClick={handleRedo}>
          ↪ REDO
        </button>
      </div>
    </div>
  );
}

export default App;
