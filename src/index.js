import express from "express";
import Connection from "./database/Connection.js";
import Qroutes from "./routes/Qroutes.js";
import bodyParser from "body-parser";
import cors from 'cors'



Connection().then(console.log("connected"));
const App = express();
App.use(bodyParser.urlencoded({extended:true}));
App.use(bodyParser.json());
App.use(cors())
App.use("/", Qroutes);
App.listen(9000, () => {
  console.log("running");
});
