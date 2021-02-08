const fetch = require('node-fetch');
const API_KEY = "0e5cf76b37987bdc1a3e3ea6b7e28816"



const userFindWeather = async (userCreds, role, res) => {
    const cityFetch = await fetch(`http://ipwhois.app/json/`);
    const city = await cityFetch.json()
    const tempFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.city}&appid=${API_KEY}&units=metric`);
    const temp = await tempFetch.json()
    return res.status(200).json({
        message: `Погода вашего города получена.`,
        body:{temp:temp.main.temp,city:city.city},
        success: true
    });
};


module.exports = {
    userFindWeather,
};


