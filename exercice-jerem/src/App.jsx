import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const transports = [
    {id: crypto.randomUUID(), name: "Train", snowFriendly: false},
    {id: crypto.randomUUID(), name: "Métro", snowFriendly: false},
    {id: crypto.randomUUID(), name: "Vélo", snowFriendly: false},
    {id: crypto.randomUUID(), name: "Marche", snowFriendly: true},
    {id: crypto.randomUUID(), name: "Traîneau", snowFriendly: true},
    {id: crypto.randomUUID(), name: "Voiture", snowFriendly: true}]

  const [isSnowing, setIsSnowing] = useState(true);

  return (
    <>
    <h1>Moyens de Transport disponibles</h1>
    <div>
      <button onClick={() => {
        setIsSnowing(!isSnowing)
      }}>
        {isSnowing ? "Il Neige ❄" : "Il fait beau 🌞"}
      </button>
    </div>

    <ul>
      {transports.map((transport) => {
        if (isSnowing && transport.snowFriendly === false) {
          return null;
        }
        return <li key={transport.id}>{transport.name}</li>
      })}
    </ul>
    </>
  );
};

export default App