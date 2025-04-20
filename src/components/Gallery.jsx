import React, {useEffect, useState} from "react";
import TourCard from "./TourCard";

const Gallery = ({tours, setTours, onRemove}) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

//fetching data from the API
    const fetchTours = async () => {
        try {
            const response = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project"); //data url used to fix CORS error
            const data = await response.json();
            setTours(data);
        } catch (error) {
            setError(true); //if fetch fails, set error to true
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchTours(); 
    }, []); //calling the API

    if (loading) {
        return <h2>Loading...</h2>; //rendering loading state
    };
    if (error) {
        return <h2>Something went wrong...</h2>; //rendering error state
    };
    if (tours.length === 0) {
        return (
            <div>
                <h2>No tours left</h2>
                <button onClick={fetchTours}>Refresh</button>
            </div>
        ); //rendering no tours state
    }; //TASK 4: LOADING AND ERROR STATES

    return (
        <section className="gallery">
            {tours.map((tour) => (
                <TourCard key={tour.id} {...tour} onRemove={onRemove} />
            ))}
        </section>
    ); //rendering each tour with a unique key
}

export default Gallery;