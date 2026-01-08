# React-Practice
Some (very simple) exercices as an introduction to REACT.js manipulation

## What's in this repository ?

Hi everyone ! So this is a _quite large_ repository because it has maaany files, but don't worry, it doesn't have _that much_ information. Why ? Simply because there are 3 folders with 3 different exercices that have helped me initiate my learning on React.js. So, if you know how React works, you might understand why every folder has so many files. As i'm just a debutant at this point, the only file i'm **actually** using is the App.jsx, and for one exercice in particular, the **components** folder.

Here's a quick explanation of every of the exercices (one per folder) :

### vite-project

  Core functionality:
  This is a basic React practice app that demonstrates core concepts: state management with useState, controlled form inputs, and dynamic list rendering. Users can add new items via text input and delete existing items with "X" buttons. The app practices array manipulation (adding/removing elements), event handling, conditional rendering (the number 5 displays without a delete button), and mapping over arrays to generate UI elements. It covers fundamental React patterns like controlled components, form submission handling, and updating state immutably.

### exercice-jerem

This is a **React conditional rendering exercise** that displays available transportation methods based on weather conditions. The app uses `useState` to toggle between snowing and sunny weather with a button. It practices working with arrays of objects (each transport has `id`, `name`, and `snowFriendly` properties), conditional list filtering (non-snow-friendly transports are hidden when snowing), and dynamic UI updates. Key concepts include state-based conditional rendering, the ternary operator for button text, mapping over object arrays, using `crypto.randomUUID()` for unique keys, and returning `null` to conditionally exclude elements from rendering.

### exercice-restos

This is a **React component composition exercise** demonstrating how to structure an app with multiple components and manage shared state. The app filters a restaurant list based on search text and dietary preferences (vegan/halal). It practices **props drilling** by passing state and setter functions from the parent `App` component down to child components (`Filtres` and `ListeRestos`). Key concepts include component separation (filters component handles user inputs, list component displays filtered results), lifting state up (state lives in `App` and is shared between siblings), passing both values and setter functions as props, and coordinating multiple filter criteria. This introduces fundamental React architecture patterns for building multi-component applications with shared state management.

---

If you visit this repository, i hope you have fun reading the results of my practice ! 
Again: they're simple exercices but very usefull for a start-point :)
