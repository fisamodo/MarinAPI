const fetch = require("node-fetch");
const getTemperature = require('./getTemperature')

test('temperature value is valid in celcius', () => {
    expect(getTemperature()).not.toBeNaN(); 
});

test('temperature value is valid in celcius', () => {
    expect(getTemperature()).toBeNaN(); 
});