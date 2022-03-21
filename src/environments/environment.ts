// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  //production: false,
  /* firebase: {
    apiKey: "AIzaSyC5NCOHiOdC53d6hOD5HRub2L6yyDLtFXg",
    authDomain: "cart-37ca0.firebaseapp.com",
    projectId: "cart-37ca0",
    storageBucket: "cart-37ca0.appspot.com",
    messagingSenderId: "620202546000",
    appId: "1:620202546000:web:428a40b5b82a569773d255"
  }, */
  endpoint: 'https://card-ap.herokuapp.com/',
  endpointShipping: 'https://card-ap.herokuapp.com/customer',

  endpointOrder: 'http://localhost:5000/order'
};
