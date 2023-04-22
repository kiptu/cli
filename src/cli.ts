#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import handleError from "./utils/handleError";

yargs(hideBin(process.argv))
  .scriptName("kiptu")
  .commandDir("./commands", { extensions: ["js", "ts"] })
  .command(
    "$0",
    "The Kiptu CLI usage",
    () => {
      undefined;
    },
    () => {
      yargs.showHelp();
    }
  )
  .strict()
  .alias({ h: "help" })
  .alias({ v: "version" })
  .fail(handleError).argv;
