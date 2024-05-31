class carRentalPage {
    btnContinue(){
        return cy.get('div.css-1dbjc4n').find('div.css-901oao')
        .contains('Continue');
    }
    btnContinueRentalProvider(){
        return cy.get('div.css-1dbjc4n').find('div.css-901oao')
        .contains('Continue');
    }
}
export default new carRentalPage()