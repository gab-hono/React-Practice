export const ListeRestos = ({isVegan, isHalal, recherche}) => {
const restos = [
    {id: crypto.randomUUID(),
      name:`42 degrés`,
      description:`Dans les cuisines de ce restaurant vegan, sans gluten et cru parisien rien ne grimpe au dessus de 42 degrés. Passé le chiffre magique, les aliments commencent à cuire et à perdre leurs apports nutritionnels : c'est le concept même de la raw food et du restaurant – conserver tous les bienfaits des produits de la terre tout en les cuisinant de façon à obtenir des plats beaux et savoureux. Comme ce burger, dont le bun est composé de champignons portobellos marinés puis déshydratés auxquels on ajoute des graines de sésame. Les procédés de déshydratation ou de cuisson très basse et très longue permettent de faire tout ce qu'on veut avec les aliments, et le jeu consiste souvent à présenter des plats pop faits avec des aliments bio et crus : sushis, pizzas, burgers… C’est ludique, sain et bon.`,
      adresse:`109, rue du Faubourg-Poissonnière – 9e`,      
      vegan: true,
      halal: true},
    {id: crypto.randomUUID(),
      name:`Saveurs Veget’halles`,
      description:`Ce restaurant vegan, installé depuis de nombreuses années en plein cœur de Paris à Châtelet, gagnerait à être plus connu car, si la déco n’est pas des plus accueillantes, la carte y est somptueuse. Comme ce petit poulet végétal à base de protéines de soja accompagné d’une sauce aux échalotes, ces brochettes de crevettes ou cette escalope de seitan. Le coup de cœur ? Cette marmite fumante d’aubergines au lait de coco et basilic et protéines de soja, dinguissime.`,
      adresse:`41, rue des Bourdonnais – 1er`,
      vegan: true,
      halal: true},
    {id: crypto.randomUUID(),
      name:`Baïli`,
      description:`Voilà une bonne adresse pour ceux qui sont à la recherche d'un restaurant mexicain halal à Paris. C'est vrai que c'est délicat, car c'est le genre de gastronomie où il est difficile de trouver un bon restaurant quand on doit faire attention à ça. Ne cherchez plus, on a l'adresse pour vous !`,
      adresse:`29, rue Saint-Blaise – 20e`,
      vegan: false,
      halal: true},
    {id: crypto.randomUUID(),
      name:`le Dragon Wok`,
      description:`Un restaurant asiatique halal qui vous surprendra. Si la devanture n'impressionne pas au premier abord, le cadre est sympathique et vous passerez un bon moment. Vous allez surtout bien manger, et c'est là l'essentiel non ?`,
      adresse:`108, avenue de Flandre – 19e`,
      vegan: false,
      halal: true},
    {id: crypto.randomUUID(),
      name:`Biondi`,
      description:`Petit coin d'Argentine au cœur du 11e, Biondi fait voyager vos papilles avec une cuisine bistronomique pleine de caractère et d'inspirations sud-américaines. Loin de l'ambiance classique, ici, les braises jouent un rôle essentiel, sublimant des pièces de viande comme le churrasco de las Pampas ou cette fameuse entrecôte de bœuf, accompagnée d’une sauce chimichurri percutante et de pommes de terre fondantes. La décoration épurée et chaleureuse, avec pierres brutes et cuisine ouverte, en fait un lieu convivial et animé où l’on se régale en toute simplicité. Le menu du déjeuner à prix doux (23,50€) séduit avec des plats comme le boudin noir à la plancha ou un veau rôti parfaitement maîtrisé. Si le soir les prix montent un peu, l’expérience reste mémorable, notamment avec des desserts comme le flan au caramel et mousse dulce de leche. Un rendez-vous incontournable pour les amateurs de viande cuite à la braise et d’ambiances chaleureuses.`,
      adresse:`118, rue Amelot – 11e`,
      vegan: false,
      halal: false},
    ];
    return (
        <div>
            {restos.map((resto) => {
                if (isVegan && resto.vegan === false) return null;
                if (isHalal && resto.halal === false) return null;
                if (recherche && !resto.name.trim().toLowerCase().includes(recherche.trim().toLowerCase())) return null;
                    return (
                        <ul key={resto.id}>
                            <li><h2>{resto.name}</h2>
                            <p>{resto.description}</p>
                            <address>{resto.adresse}</address></li>
                        </ul>
                    )
                })}
      </div>
    )
}