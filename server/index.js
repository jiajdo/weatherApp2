// server/index.js
import cors from "cors";
import express from "express";
import "dotenv/config";
import db from "./db-connection.js";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Set the port that you want the server to run on
const PORT = process.env.PORT || 4040;
const APIKEY = process.env.API_KEY;

//creates an endpoint for the route /api
app.get("/", (req, res) => {
  res.send("This is the home page");
});

//I call this route from the frontend in Form.jsx so I can fetch data from API and show it to user
app.get("/api", async (req, res) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${APIKEY}`;
  const response = await fetch(url);
  const weatherData = await response.json();
  res.json(weatherData);
  console.log(weatherData);
});

app.get("/name", (req, res) => {
  const name = { name: "Jia" };
  res.json(name);
});

//Broken add city functionality. Can only fetch city but not other weather data
app.post("/addCity", async (req, res) => {
  try {
    const city = req.body;
    console.log(city);
    //SQL Query
    const result = await db.query(
      "INSERT INTO city_weather(city) VALUES ($1) RETURNING * ",
      [city]
    );
    let response = result.rows[0];
    console.log(response);
    res.json(response);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ e });
  }
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Your girl is listening on ${PORT}`);
});