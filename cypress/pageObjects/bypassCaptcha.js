describe('ReCaptcha click', () => {
    before(() => {
      cy.visit('https://www.traveloka.com/en-id/car-rental/');
    });
  
    it('Clicks on the reCAPTCHA checkbox', () => {
      cy.clickReCaptcha();
    });
});
// describe('ReCaptcha click', () => {
//     before(() => {
//       cy.visit('https://www.traveloka.com/en-id/car-rental/');
//     });
  
//     it('Clicks on the reCAPTCHA checkbox', () => {
//       // Ensure the iframe is loaded and available
//       cy.frameLoaded('iframe[name^="a-"][src^="https://www.google.com/recaptcha"]');
  
//       // Switch to the iframe
//       cy.iframe('iframe[name^="a-"][src^="https://www.google.com/recaptcha"]').then(($iframe) => {
//         // Click the reCAPTCHA checkbox inside the iframe
//         cy.wrap($iframe).find('div.recaptcha-checkbox-checkmark').click();
//       });
//     });
//   });

// export default new bypassCaptcha()
  