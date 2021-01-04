const express = require("express");
const https = require("https");

const app = express();

app.get("/", (req, res) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?zip=93536&units=imperial&appid=22d684af311eccad3e178cab9139199d";

    https.get(url, (response) => {
        console.log(response.statusCode);

        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDesc = weatherData.weather[0].description;
            res.send("The temperature in Lancaster, CA is " + temp + " Fahrenheit with the following conditions: " + weatherDesc);
        });
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000....");
});