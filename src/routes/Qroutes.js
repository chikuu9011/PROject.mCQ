import express from "express";
import {
  deletedata,
  insertdata,
  showdata,
  updatedata,
} from "../Controllers/Qcontrols.js";

const Qroutes = express.Router();

Qroutes.get("/", showdata)
  .post("/insert", insertdata)
  .delete("/delete/:id", deletedata)
  .put("/update/:id", updatedata);

export default Qroutes;
