export const Filtres = ({isVegan, setIsVegan, isHalal, setIsHalal, setRecherche}) => {  
    return (
        <form>
            <input type="text" placeholder='Search...' onChange={(e) => setRecherche(e.target.value)}/>
            <fieldset>
            <legend>Filtrer par</legend>
            <input type="checkbox" id="vegan" name='vegan' checked={isVegan} onChange={() => setIsVegan(!isVegan)}/>
            <label for="vegan">Vegan</label>
            <input type='checkbox' id='halal' name='halal' checked={isHalal} onChange={() => setIsHalal(!isHalal)}/>
            <label for='halal'>Halal</label>
        </fieldset>   
        </form>   
    )
}