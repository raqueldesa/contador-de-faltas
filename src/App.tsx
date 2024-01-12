import { useState } from "react";
import reactLogo from "./assets/react.svg";
import gitLogo from "/logo_git.png";
import "./App.css";
import DataAtual from "./components/DataAtual";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://github.com/raqueldesa" target="_blank">
          <img src={gitLogo} className="logo" alt="Git logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Dias sem faltar - UFAM</h1>
      <h1>{count}</h1>
      <h2>Recorde: {count}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Hoje eu Fui
        </button>

        <DataAtual />
      </div>
    </>
  );
}

export default App;
