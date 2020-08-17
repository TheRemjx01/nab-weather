import queryString from 'query-string'
export const getLocationUrl = (text) => {
    const query = {
        query: text
    };
    return `/location/search?${queryString.stringify(query)}`
};