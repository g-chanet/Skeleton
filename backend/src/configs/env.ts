import * as configs from "./";
require("dotenv").config();

class Env {
  public get(key: string): string {
    var val = process.env[key];
    if (!val || val.length == 0) configs.log.warn(`Env '${key}' is not define`);
    return val || "";
  }
}

export const env = new Env();
