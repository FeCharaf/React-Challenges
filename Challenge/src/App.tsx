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

    setRemoved([]);
    setList((prev) => [...prev, newCircle]);
  }

  function handleUndo(event) {
    event.stopPropagation();
    if (list.length === 0) {
      console.log("Lista vazia");
      return;
    }
    var removedItem = list[list.length - 1];
    setRemoved((prev) => [...prev, removedItem]);

    var newList = list.slice(0, -1);
    setList(newList);
  }

  function handleRedo(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.stopPropagation();
    if (removed.length === 0) {
      console.log("Nada para restaurar");
      return;
    }

    var redoneItem = removed[removed.length - 1];
    setList((prev) => [...prev, redoneItem]);
    
    var newRemoved = removed.slice(0, -1);
    setRemoved(newRemoved);
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
