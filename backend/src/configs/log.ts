import winston from "winston";
import moment from "moment";

const folder = moment().format("YYYY-MM-DD");
const file = moment().format("hh-mm-ss");

const tsFormat = () => moment().format("L hh:mm:ss").trim();
const format = (info: any) => `${tsFormat()} [${info.level}]: ${info.message}`;

const log = winston.createLogger({
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({
      filename: `log/${folder}/${file}.log`,
      format: winston.format.combine(
        winston.format.align(),
        winston.format.printf(format)
      ),
    }),
  ],
});

if (process.env.NODE_ENV == "development") {
  log.add(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.splat(),
        winston.format.prettyPrint(),
        winston.format.colorize(),
        winston.format.align(),
        winston.format.printf(format)
      ),
    })
  );
}
log.info(`Starting server in ${process.env.NODE_ENV?.toUpperCase()} mode`);

export { log };
