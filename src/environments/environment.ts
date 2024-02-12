// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: {
  production: boolean,
  apiKey: string,
  baseUrl: string,
  images: string
} = {
  production: false,
  apiKey: 'becbdef455e97340e5d0b1b5e5570c2d',
  baseUrl: 'https://api.themoviedb.org/3',
  images: 'http://image.tmdb.org/t/p',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
