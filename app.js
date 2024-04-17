// app.js

import express from "express";
import { PORT } from "./config.js";
import routes from './routes.js'
import mongoose from "./db.js";


const app = express();

app.use('/', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
console.log("Server Listening and is ready on PORT:", port);
});
