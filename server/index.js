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

//Add city functionality that isn't working
app.post("/addCity", async (req, res) => {
  console.log('entering post')
  const city = await req.body
  console.log(city)
  res.send(`We can search for this item on our backend: ${city}`)
  // try {
  //   //SQL Query
  //   const newCity = {};
  // } catch {}
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Your girl is listening on ${PORT}`);
});
