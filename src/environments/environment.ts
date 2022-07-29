// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: process.env["ANGULAR_PUBLIC_FIREBASE_API_KEY"],
    authDomain: process.env["ANGULAR_PUBLIC_FIREBASE_AUTH_DOMAIN"],
    projectId: process.env["ANGULAR_PUBLIC_FIREBASE_PROJECT_ID"],
    storageBucket: process.env["ANGULAR_PUBLIC_FIREBASE_STORAGE_BUCKET"],
    messagingSenderId: process.env["ANGULAR_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"],
    appId: process.env["ANGULAR_PUBLIC_FIREBASE_APP_ID"],
    //measurementId: process.env["ANGULAR_PUBLIC_FIREBASE_MEASUREMENT_ID"]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
