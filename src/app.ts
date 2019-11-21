import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Controller } from "./main.controller";
import mongoose from "mongoose";

export default class {
  public app: any;
  public apiController: Controller;

  constructor(setMongo: Boolean = true) {
    this.app = express();
    this._setConfig();

    if (setMongo)
      this._setMongoConfig();

    this.apiController = new Controller(this.app);
  }

  private _setConfig() {
    this.app.use(bodyParser.json({ limit: "50mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(cors());
  }

  private _setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose.connect("mongodb://localhost:27017/ArazaTest", {
      useNewUrlParser: true
    });
  }
}
