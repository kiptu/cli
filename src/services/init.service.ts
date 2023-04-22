export const initAngular = (argv: any) => {
  console.log("Angular Init", argv);
};

export const initNestJS = (argv: any) => {
  console.log("NestJS Init", argv);
};

export const initApps: { [key: string]: any } = {
  angular: initAngular,
  nestjs: initNestJS
};
