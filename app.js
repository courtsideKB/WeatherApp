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
            const icon = weatherData.weather[0].icon;
            const imageURL = "http://openweathermap.org/img/wn/" + icon + ".png";

            res.write("<h1>The current temperature in Lancaster, CA is " + temp + " Fahrenheit</h1>");
            res.write("<p>The weather is currently " + weatherDesc + "</p>");
            res.write("<img src=" + imageURL + ">");
            res.send();
        });
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000....");
});