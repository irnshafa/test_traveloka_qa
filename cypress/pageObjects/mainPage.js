class mainPage {
    btnCarRental() {
        return cy.get('div[data-testid="product-pill-Car Rental"]').contains('Car Rental')
    }
    btnWithoutDriver(){
        return cy.get('svg[data-id="IcTransportPickUpDriver"]')
    }
    // Detail Car Rental Filter Detail
    // Pick Location
    clickLocation() {
        return cy.get('input[placeholder="Enter city or region"]')
    }
    fillLocation() {
        return cy.get('input[data-testid="rental-search-form-location-input"]')
    }
    clickSelectLocation() {
        return cy.get('div[class="css-1dbjc4n r-14lw9ot r-1q52ik8 r-qklmqi r-1loqt21 r-18u37iz r-1wtj0ep r-ymttw5 r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu"]')
    }

    // Pick Start Date
    clickStartDate() {
        return cy.get('input[data-testid="rental-search-form-date-input-start"]')
    }
    pickStartDate() {
        return cy.get('div[data-testid="date-cell-3-6-2024"]')
        .eq(0)
    }

     // Pick Start Time()
    clickStartTime() {
        return cy.get('input[data-testid="rental-search-form-time-input-start"]')
    }
    pickStartTimeHour() {
        return cy.get('.css-1dbjc4n.r-1loqt21.r-1777fci.r-tuq35u.r-1otgn73.r-1i6wzkk.r-lrvibr')
        .contains('6')
    }
    pickStartTimeMinute() {
        return cy.get('.css-1dbjc4n.r-1loqt21.r-1777fci.r-tuq35u.r-1otgn73.r-1i6wzkk.r-lrvibr')
        .contains('30')
    }
    btnStartTime() {
        return cy.get('div[class="css-901oao r-t1w4ow r-cygvgh r-b88u0q r-1iukymi r-q4m81j"]')
        .contains('Done')
    }

    // Pick End Date
    clickEndDate() {
        return cy.get('input[data-testid="rental-search-form-date-input-end"]')
    }
    pickEndDate() {
        return cy.get('div[data-testid="date-cell-5-6-2024"]')
        .eq(1)
    }

    // Pick End Time
    clickEndTime() {
        return cy.get('input[data-testid="rental-search-form-time-input-end"]')
    }
    pickEndTimeHour() {
        return cy.get('.css-1dbjc4n.r-1loqt21.r-1777fci.r-tuq35u.r-1otgn73.r-1i6wzkk.r-lrvibr')
         .contains('7')
    }
    pickEndTimeMinute(){
        return cy.get('.css-1dbjc4n.r-1loqt21.r-1777fci.r-tuq35u.r-1otgn73.r-1i6wzkk.r-lrvibr')
        .contains('30')
    }
    btnEndTime(){
        return cy.get('div[class="css-901oao r-t1w4ow r-cygvgh r-b88u0q r-1iukymi r-q4m81j"]')
        .contains('Done')
    }

    // Search Icon / Button
    btnSearch() {
        return cy.get('svg[data-id="IcSystemSearch"]')
    }

}
export default new mainPage()