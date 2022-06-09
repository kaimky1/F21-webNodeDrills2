const port = process.env.PORT;
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const cors = require('cors')

app.use(cors())


app.get()


app.listen(port, () => {
    console.log(`App listening on port ${process.env.PORT}`);
  });



