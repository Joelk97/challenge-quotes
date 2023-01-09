import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App({ data }) {
  const [quote, setQuote] = useState();
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

async function getQuote() {
  const res = await fetch("https://zenquotes.io/api/random");
  var data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default App;
