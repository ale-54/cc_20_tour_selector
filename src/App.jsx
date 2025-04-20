import React, { useState } from "react";
import Gallery from "./components/Gallery";
import DestinationSelector from "./components/DestinationSelector";
import "./styles/styles.css"; // importing styles

function App() {
  const [tours, setTours] = useState([]); // root component of app
  const [selectedDestination, setSelectedDestination] = useState(""); // state for selected destination

  const onRemove = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  }; // function to remove tour from its id

  const handleDestinationChange = (destination) => {
    setSelectedDestination(destination); // update selected destination
  };

  // Filter tours based on the selected destination
  const filteredTours = selectedDestination
    ? tours.filter((tour) => tour.name === selectedDestination)
    : tours;

  return (
    <main>
      <h1>Tour Explorer</h1>
      {/* Pass tours and handler to DestinationSelector */}
      <DestinationSelector
        tours={tours}
        onDestinationChange={handleDestinationChange}
      />
      {/* Pass filtered tours to Gallery */}
      <Gallery tours={filteredTours} setTours={setTours} onRemove={onRemove} />
    </main>
  );
}

export default App;
