/**
 * Copyright 2018 - Author gauravm.git@gmail.com
 */

export const appConfig = {
  log: {
    dir: 'logs',
    level: 'silly',
    console: {
      prettyPrint: true,
      colorize: true,
      exitOnError: false,
      json: false,
      timestamp: true
    },
    file: {
      filename: 'app-%DATE%.log',
      datePattern: 'MM-D-YYYY-HH',
      maxDays: 7, // 0 = don't delete old log files
      maxsize: 209715200, // 200 MB
      exitOnError: false,
      json: false,
      timestamp: true
    }
  }
};
