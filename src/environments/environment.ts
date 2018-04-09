// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  CLIENT_ID: '60d963b7980c44439bb9296840ee59f3',
  END_POINTS: {
    authorization: 'https://accounts.spotify.com',
    api: 'https://api.spotify.com'
  }
};
