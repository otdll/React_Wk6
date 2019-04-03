import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Like Counter</h1>
      <button>Like</button>
      <button>Dislike</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
