import React, {useState} from 'react';
import SearchBar from '../../components/search-bar';
import WeatherDisplay from '../../components/weather-display';

const Weather = () => {
    const [ selectedLocation, setSelectedLocation ] = useState(null);
    const [ loading, setLoading] = useState(false);
    const [ forecasts, setForecasts ] = useState([]);

    console.log({selectedLocation});

    return (
        <>
            <SearchBar onChange={setSelectedLocation} />

            {selectedLocation && <WeatherDisplay locationLabel={selectedLocation.label} locationId={selectedLocation.value} />}
        </>
    );
};

export default Weather;