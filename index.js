import React, { useState } from "react";
import ReactDOM from "react-dom";

function LikeCounter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(oldCount => oldCount + 1);
  };
  const decrement = () => {
    setCount(oldCount => oldCount - 1);
  };
  const superlike = () => {
    setCount(oldCount => oldCount + 10);
  };
  return (
    <div>
      <p> Like Count: {count} </p>
      <button onClick={increment}>Like</button>
      <button onClick={decrement}>Dislike</button>
      <button onClick={superlike}>Super Like</button>
    </div>
  );
}

function Headline(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <LikeCounter />
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Headline title="Like Counter" />
      <Headline title={5} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
