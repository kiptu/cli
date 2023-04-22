import { printError, printMessage } from "./common";

export default async (
  message: string,
  error: Error,
  yargs: any
): Promise<never> => {
  printMessage(yargs.help());

  if (message) {
    printError(message);
    process.exit(1);
  }

  let errorMessage = "Unknown error occurred";

  if (error instanceof Response) {
    const { ErrorMessage } = await error.json();

    if (ErrorMessage) {
      errorMessage = ErrorMessage;
    }
  } else {
    errorMessage = error.message;
  }

  printError(errorMessage);
  process.exit(1);
};
