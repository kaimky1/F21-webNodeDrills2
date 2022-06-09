const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

app.use(express.json());

const cors = require("cors");

app.use(cors());


app.get("/api/info", async (req, res) => {
  let info = await sequelize
    .query(
      `
        SELECT * FROM input 
    `
    )
    res.status(200).send(info[0]);
});

app.post("/api/info", async (req, res) => {
    let info = await sequelize.query(`
    INSERT INTO input(text)
    VALUES('${req.body.text}')
    `)
    res.status(200).send(info[0])
})



app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
