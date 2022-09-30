import * as configs from "./";
import dotenv from "dotenv";
import path from "path";

class Env {
  constructor() {
    dotenv.config({
      path: path.resolve(process.cwd(), ".env"),
      encoding: "utf8",
      debug: true,
      override: true,
    });
  }

  public get(key: string): string {
    var val = process.env[key];
    if (!val || val.length == 0) configs.log.warn(`Env '${key}' is not define`);
    return val || "";
  }
}

export const env = new Env();
