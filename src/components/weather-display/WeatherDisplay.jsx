import React from 'react';
import WithFetch from "../with-fetch/WithFetch";
import getUrl from "../../utils/url";

const generateLocationForecastUrl = ({locationId}) => `/location/${locationId}`;

const WeatherDisplayData = ({data = []}) => {
    if (!data) {
        return 'Fetching...'
    }
    return 'Loaded'
};

const WeatherLoading = () => 'Loading...';

const WeatherError = ({error}) => error

const WeatherDisplay = ({locationId, locationLabel}) => {
    return (
        <div>
            <h2>{locationLabel}</h2>
            <WithFetch
                url={getUrl(generateLocationForecastUrl({locationId}))}
                Component={<WeatherDisplayData />}
                LoadingComponent={<WeatherLoading />}
                ErrorComponent={<WeatherError />}
            />
        </div>
    );
};

export default WeatherDisplay;