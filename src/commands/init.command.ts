import { initApps } from "../services/init.service";

export const command = "init <app>";
export const aliases = "i";
export const describe = "Generate a project with given app";

export const builder = (yargs: any) => {
  yargs
    .positional("app", {
      type: "string",
      choices: Object.keys(initApps),
      describe: "App to generate (eg: angular)"
    })
    .option("path", {
      type: "string",
      aliases: "p",
      describe: "Change the destination path",
      default: "."
    });
};

export function handler(argv: any): void {
  const app = argv.app;

  if (typeof initApps[app] !== "function") {
    process.exit(1);
  }

  initApps[app](argv);
}
