import { createLogger, format, transports } from "winston" ;

export const switchLogger = createLogger({
    level: "info",
    format: format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
      //
      // - Write to all logs with level `info` and below to `combined.log`
      // - Write all logs error (and below) to `error.log`.
      // - Write logs in simple fortmat to console.
      //
      new transports.File({ filename: "logs/error.log", level: "error" }),
      new transports.File({ filename: "logs/all_logs.log" }),
      new transports.Console({format: format.simple()})
    ]
});