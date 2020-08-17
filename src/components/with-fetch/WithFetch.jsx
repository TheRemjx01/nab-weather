import React, {useState} from 'react'

const WithFetch = ({ Component, ErrorComponent, LoadingComponent, url, options }) => {
    console.log({url});
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(undefined);
    const [error, setError] = useState(undefined);

    React.useEffect(() => {
        setLoading(true);
        fetch(url, options).then(res => {
            console.log({res});
            res.json().then(jsonRes => {
                console.log({jsonRes});
                setData(jsonRes)
            })
        }).catch(err => {
            console.log(err);
            setError(err);
        }).finally(() => {
            setLoading(false);
        })
    }, []);

    if (error) {
        return React.cloneElement(ErrorComponent, {
            error
        })
    }
    if (loading) {
        return LoadingComponent
    }
    console.log({dataFetch: data});
    return React.cloneElement(Component, {
        data
    })
};

export default WithFetch