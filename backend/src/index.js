const express = require("express");
const cors = require('cors');
const routes = require("./routes");

const app = express();

app.use(cors());
//Fala pro express que as requisições enviadas estarão no formato Json.
app.use(express.json());
app.use(routes);
app.listen(3333);
