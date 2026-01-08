import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [element, setElement] = useState([1, 2, 3, 4, 5]);
  const [inputText, setInput] = useState("");

  const addWord = () => {
    const inputCopy = [...element];
    inputCopy.push(inputText);
    setElement(inputCopy);
    setInput("");
  }

  const deleteElement = (indexToDelete) => {
    const newElements = element.filter((_, idx) => idx !== indexToDelete);
    setElement(newElements);
  }  

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        addWord();
      }}
      >
        <input
          value={inputText}
          onChange = {(e) => {setInput(e.target.value)}}>
        </input> 
      </form>

      {element.map((elem, idx) => {
        if (elem !== 5) {
        return (
        <div key={idx}>
          <h1>{elem}</h1>
          <button onClick={() => 
            deleteElement(idx)}>X</button>
        </div>
        );

        } else {
          return <h1 key={idx}>{elem}</h1>
        }
      })}

      <p>{inputText}</p>

    </>
  );
};

export default App;