// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// import 'cypress-iframe';

// // Menambahkan perintah kustom untuk menangani klik reCAPTCHA
// Cypress.Commands.add('clickReCaptcha', () => {
//   // Pastikan iframe sudah dimuat
//   cy.frameLoaded('iframe[name^="a-"][src^="https://www.google.com/recaptcha"]');

//   // Pindah ke dalam iframe dan klik checkbox reCAPTCHA
//   cy.iframe('iframe[name^="a-"][src^="https://www.google.com/recaptcha"]').then(($iframe) => {
//     cy.wrap($iframe).find('div.recaptcha-checkbox-checkmark').click();
//   });
// });


// Alternatively you can use CommonJS syntax:
// require('./commands')