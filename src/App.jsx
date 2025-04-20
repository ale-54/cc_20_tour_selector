//Task 1: Setup Root Component (App.jsx)
import React, {useState} from "react";
import Gallery from "./components/Gallery";
import"./styles/styles.css"; //importing styles

function App() {
  const [tours, setTours] = useState([]); //root component of app

const onRemove = (id) => {
  setTours((prevTours) => prevTours.filter((tour) => tour.id !== id)); 
}; //function to remove tour from its id

return (
  <main>
    <h1>Tour Explorer</h1>
    {/*passes state and handlers to Gallery component */}
    <Gallery tours={tours} setTours={setTours} onRemove={onRemove} />
  </main>
);
}

export default App;
