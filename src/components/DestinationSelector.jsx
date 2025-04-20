import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DestinationSelector = ({ tours, onDestinationChange }) => {
    const [selectedDestination, setSelectedDestination] = useState('');

    const handleChange = (event) => {
        const destination = event.target.value;
        setSelectedDestination(destination);
        onDestinationChange(destination); // Pass the selected destination up to App.jsx
    };

    // Extract unique tour names
    const uniqueDestinations = ['All Destinations', ...new Set(tours.map((tour) => tour.name))];

    return (
        <div>
            <label htmlFor="destination-select">Select a Destination:</label>
            <select
                id="destination-select"
                value={selectedDestination}
                onChange={handleChange}
            >
                {uniqueDestinations.map((destination) => (
                    <option key={destination} value={destination === 'All Destinations' ? '' : destination}>
                        {destination}
                    </option>
                ))}
            </select>
        </div>
    );
};

DestinationSelector.propTypes = {
    tours: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    onDestinationChange: PropTypes.func.isRequired,
};

export default DestinationSelector;