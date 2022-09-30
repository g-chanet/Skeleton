import fs from "fs";
import http from "http";
import https from "https";
import sslChecker from "ssl-checker";
import moment from "moment";
import type { Express } from "express-serve-static-core";
import * as configs from "../configs";

export function createServer(app: Express): {
  isHttps: boolean;
  server: http.Server | https.Server;
} {
  try {
    const opt = {
      key: fs.readFileSync(configs.env.get("SERVER_SSL_KEY")),
      cert: fs.readFileSync(configs.env.get("SERVER_SSL_CERT")),
      requestCert: false,
      rejectUnauthorized: false,
    };
    const server = https.createServer(opt, app);
    configs.log.info(`Server protocole as https`);
    return { isHttps: true, server };
  } catch (err: any) {
    const server = http.createServer(app);
    configs.log.warn(`Server protocole as http because:\n${err.message}`);
    return { isHttps: false, server };
  }
}

export async function checkSSL() {
  try {
    const url = configs.env.get("WEBAPP_URL");
    const ssl = await sslChecker(url, { method: "GET", port: 443 });
    let message = "RESUME \n";
    message += `Days remaining:   ${ssl.daysRemaining}\n`;
    message += `Valid:            ${ssl.valid}\n`;
    message += `Valid from:       ${moment(ssl.validFrom).format("LL")}\n`;
    message += `Valid to:         ${moment(ssl.validTo).format("LL")}\n`;
    message += `Valid for:        ${ssl.validFor}\n`;
    configs.log.info(message);
  } catch (err: any) {
    configs.log.warn(`SSL checker error:\n${err.message}`);
  }
}
