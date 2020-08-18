import React, { useState} from 'react';
import get from 'lodash/get'
import SearchBar from '../../components/search-bar';
import WeatherDisplay from '../../components/weather-display';
import Title from "../../components/document/Title";
import Hidden from "../../components/hidden";

const Weather = () => {
    const [ selectedLocation, setSelectedLocation ] = useState(null);
    const title = 'Weather App'
    return (
        <>
            <Title text={title}/>
            <h1>{title}</h1>
            <SearchBar onChange={setSelectedLocation} />
            <Hidden when={!selectedLocation}>
                <WeatherDisplay
                 locationLabel={get(selectedLocation, 'label')}
                 locationId={get(selectedLocation, 'value')}
                />
            </Hidden>

        </>
    );
};

export default Weather;