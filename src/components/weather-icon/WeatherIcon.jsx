import React from 'react';

const iconMap = {
 sn: { link: 'https://www.metaweather.com/static/img/weather/sn.svg', name:'Snow' },
 sl: { link: 'https://www.metaweather.com/static/img/weather/sl.svg', name: 'Sleet' },
 h: {link: 'https://www.metaweather.com/static/img/weather/h.svg', name: 'Hail' },
 t: {link: 'https://www.metaweather.com/static/img/weather/t.svg', name:'Thunderstorm'},
 hr: {link: 'https://www.metaweather.com/static/img/weather/hr.svg', name: 'Heavy Rain'},
 lr: {link: 'https://www.metaweather.com/static/img/weather/lr.svg', name: 'Light Rain'},
 s: {link: 'https://www.metaweather.com/static/img/weather/s.svg', name: 'Showers'},
 hc: {link: 'https://www.metaweather.com/static/img/weather/hc.svg', name: 'Heavy Cloud' },
 lc: {link: 'https://www.metaweather.com/static/img/weather/lc.svg', name: 'Light Cloud' },
 c: {link: 'https://www.metaweather.com/static/img/weather/c.svg', name: 'Clear'}
}

const WeatherIcon = ({weather}) => {
 return (
  <img src={iconMap[weather].link} alt={iconMap[weather].name} style={{width: '50px', height: '50px'}}/>
 );
};

export default WeatherIcon;