// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const ip = "http://localhost:";

export const environment = {
  production: false,
  self_url: ip + "4200",
  callback_url: ip + "4200/callback",
  forum_api_url: ip + "5050/api/",
  identity_api_url: ip + "5000/",
  notification_api_url: ip + "6060/api/"
};