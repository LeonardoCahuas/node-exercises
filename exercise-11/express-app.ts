const express= require("express");
require("express-async-errors");
const morgan = require("morgan");

const app = express();
const port = process.env.port || 3000;

app.use(express.json());

app.get("/", (req, res)=>{
    res.json({msg: "message"})
})
app.listen(port, () => console.log(`example on port ${port}`))

type Planet = {
    id: number,
    name: string,
  };

  type Planets = Planet[];

  let planets: Planets = [
    {
      id: 1,
      name: "Earth",
    },
    {
      id: 2,
      name: "Mars",
    },
  ];