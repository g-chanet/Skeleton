import mongoose from "mongoose";
import * as configs from "./";

const mongoUri = configs.env.get("MONGO_URI");

class DB {
  constructor() {
    configs.log.info(`Mongo starting`);
    mongoose
      .connect(mongoUri)
      .then(() => configs.log.info(`Mongo is connected`))
      .catch((err) => configs.log.error(`Mongo failed to login`));
  }
}

export const db = new DB();
