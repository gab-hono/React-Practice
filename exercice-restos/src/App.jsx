import { useState } from 'react'
import { ListeRestos } from './components/ListeRestos'
import { Filtres } from './components/Filtres'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const [recherche, setRecherche] = useState("");
const [isVegan, setIsVegan] = useState(false);
const [isHalal, setIsHalal] = useState(false);

function App() {

  return (
    <>
      <div>
        <Filtres isVegan={isVegan} setIsVegan={setIsVegan} isHalal={isHalal} setIsHalal={setIsHalal} setRecherche={setRecherche}/>
      </div>
      <div>
        <ListeRestos recherche={recherche} isHalal={isHalal} isVegan={isVegan}/>
      </div>


    </>
  )
}
export default App