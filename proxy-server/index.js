const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();

const getWeatherUrl = ({url}) => {
    return `${process.env.WEATHER_URL}${url}`
};

app.use('/api', (req, res) => {
    axios.get(getWeatherUrl({url: req.url})).then(metaRes => {
        res.status(200).send(metaRes.data);
    }).catch(metaErr => {
        res.status(400).send(metaErr.message)
    }).finally(() => {
        console.log('Request responsed')
    })
});

console.log('App is listening at: ', process.env.PORT);
app.listen(process.env.PORT);