import * as c from 'ansi-colors';

export class Logger {

  constructor () {}

  info(...args: any[]) {
    const stringArgs = args.join();
    const prefix = "[INFO] ";
    console.log(c.blue(prefix + stringArgs));
  }

  error(...args: any[]) {
    const stringArgs = args.join();
    const prefix = "[ERROR] ";
    console.log(c.red(prefix + stringArgs));
  }

  warn(...args: any[]) {
    const stringArgs = args.join();
    const prefix = "[WARN] ";
    console.log(c.yellow(prefix + stringArgs));
  }

  success(...args: any[]) {
    const stringArgs = args.join();
    const prefix = "[SUCCESS] ";
    console.log(c.green(prefix + stringArgs));
  }

  debug(...args: any[]) {
    const stringArgs = args.join();
    const prefix = "[DEBUG] ";
    console.log(c.gray(prefix + stringArgs));
  }

  formatedInfo(...args: any[]) {
    const stringArgs = JSON.stringify(args, null, 2);
    const prefix = "[INFO] ";
    console.log(c.blue(prefix + stringArgs));
  }

  formatedError(...args: any[]) {
    const stringArgs = JSON.stringify(args, null, 2);
    const prefix = "[ERROR] ";
    console.log(c.red(prefix + stringArgs));
  }

  formatedWarn(...args: any[]) {
    const stringArgs = JSON.stringify(args, null, 2);
    const prefix = "[WARN] ";
    console.log(c.yellow(prefix + stringArgs));
  }

  formatedSuccess(...args: any[]) {
    const stringArgs = JSON.stringify(args, null, 2);
    const prefix = "[SUCCESS] ";
    console.log(c.green(prefix + stringArgs));
  }

  formatedDebug(...args: any[]) {
    const stringArgs = JSON.stringify(args, null, 2);
    const prefix = "[DEBUG] ";
    console.log(c.gray(prefix + stringArgs));
  }

}
