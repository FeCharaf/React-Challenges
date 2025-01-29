import { useState } from "react";
import "./App.css";
import CirclesChallenge from "./pages/CirclesChallenge";

type Circle = {
  pageX: number;
  pageY: number;
};

function App() {
  const [list, setList] = useState<Circle[]>([]);
  const [removed, setRemoved] = useState<Circle[]>([]);
  return (
    <CirclesChallenge
      list={list}
      setList={setList}
      removed={removed}
      setRemoved={setRemoved}
    />
  );
}

export default App;
