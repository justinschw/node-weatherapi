# node-weatherapi
Simple weatherapi.com library for nodejs

To use, get a free API key [here](https://www.weatherapi.com/).

## Usage
To install
```
npm i weatherapi
```

To use
```
const Weather = require('weatherapi');

const weather = new Weather(API_KEY);

// Get current weather data
weather.getCurrent('Emporia, KS').then(result => {
  console.log(result);
});

// Get weather forecast for the next 5 days
weather.getCurrent('Emporia, KS', 5).then(result => {
  console.log(result);
});

```

Example response:
```
{
    "location": {
        "name": "Emporia",
        "region": "Kansas",
        "country": "United States of America",
        "lat": 38.4,
        "lon": -96.18,
        "tz_id": "America/Chicago",
        "localtime_epoch": 1640520857,
        "localtime": "2021-12-26 6:14"
    },
    "current": {
        "last_updated_epoch": 1640516400,
        "last_updated": "2021-12-26 05:00",
        "temp_c": 2.2,
        "temp_f": 36.0,
        "is_day": 0,
        "condition": {
            "text": "Clear",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
            "code": 1000
        },
        "wind_mph": 6.9,
        "wind_kph": 11.2,
        "wind_degree": 110,
        "wind_dir": "ESE",
        "pressure_mb": 1011.0,
        "pressure_in": 29.86,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 89,
        "cloud": 0,
        "feelslike_c": -1.4,
        "feelslike_f": 29.5,
        "vis_km": 13.0,
        "vis_miles": 8.0,
        "uv": 1.0,
        "gust_mph": 17.4,
        "gust_kph": 28.1
    }
}
```