'use strict';
const axios = require('axios');
const joi = require('joi');

const BASE_URL='https://api.weatherapi.com/v1';

function WeatherApi(apiKey) {
  joi.attempt(apiKey, joi.string().min(1).regex(/^[0-9a-f]*$/));
  this.apiKey = apiKey;
}

WeatherApi.prototype.getCurrent = async function(query, aqi=false) {
  const aqiParam = (aqi) ? 'yes' : 'no';
  const encodedQuery = encodeURIComponent(query);
  const result = await axios.get(`${BASE_URL}/current.json?key=${this.apiKey}&q=${encodedQuery}&aqi=${aqiParam}`);
  return result.data;
};

WeatherApi.prototype.getForecast = async function(query, days = 8, alerts=false, aqi=false) {
  joi.attempt(days, joi.number().min(1).max(10));
  const aqiParam = (aqi) ? 'yes' : 'no';
  const alertsParam = (alerts) ? 'yes' : 'no';
  const encodedQuery = encodeURIComponent(query);
  const result = await axios.get(`${BASE_URL}/forecast.json?key=${this.apiKey}&q=${encodedQuery}&days=${days}&aqi=${aqiParam}&alerts=${alertsParam}`);
  return result.data;
}

module.exports = WeatherApi;
