import chalk from "chalk";
import { EOL } from "os";

export const keysToString = (obj: { [key: string]: any }): string => {
  return Object.keys(obj).toString().replace(/,/g, ", ");
};

export const printMessage = (message: string) => {
  process.stderr.write(message + EOL);
};

export const printError = (message: string) => {
  process.stderr.write(chalk.red(`\nError: ${message}`) + EOL);
  process.stderr.write(
    `Hint: Use the ${chalk.green(
      "--help"
    )} option to get help about the usage` + EOL
  );
};

export const printWarning = (message: string) => {
  process.stderr.write(chalk.yellow(`Warning: ${message}`) + EOL);
};

export const printInfo = (message: string) => {
  process.stderr.write(chalk.cyan(`Info: ${message}`) + EOL);
};
