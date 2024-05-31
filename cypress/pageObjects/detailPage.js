class detailPage {
    // Pick Up Location
    btnRadioRental(){
        return cy.get('div.r-136ojw6').find('div.r-1loqt21').contains('Rental Office');
    }
    choosePickUpLoc(){
        return cy.get('div.r-18u37iz').find('div.r-majxgm').contains('Rental Office');
    }

    dropdownVisible(){
        return cy.get('div.r-1otgn73');
    }
    clickPickUpLoc(){
        return cy.get('.r-13awgt0').find('div.r-18u37iz');
    }

    // Drop Off Location
    // visibleDropLoc(){
    //     return cy.get('div.r-184en5c').find('div.css-901oao').contains('Drop-off Location')
    // }
    btnRadioDropLoc(){
        return cy.get('div[class="css-1dbjc4n r-18u37iz"]').find('div.r-1enofrn').contains('Additional fees may apply')
    }

    //Continue Button
    btnContinueLoc(){
        return cy.get('div.css-bfa6kz').contains('Continue');
    }

}
export default new detailPage()