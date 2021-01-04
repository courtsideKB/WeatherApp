const express = require("express");
const https = require("https");

const app = express();

app.get("/", (req, res) => {
    const url = "https://api.openweathermap.org/data/2.5/weather?zip=93536&units=imperial&appid=22d684af311eccad3e178cab9139199d";

    https.get(url, (response) => {
        console.log(response);
    });
    res.send("Success! Server is up and running...");
});

app.listen(3000, () => {
    console.log("Server running on port 3000....");
});