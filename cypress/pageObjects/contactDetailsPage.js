class contactDetailsPage{
    // Contact Details
    // contactFullName(){
    //     return cy.get('div.r-14lw9ot').find('div.r-1awozwy')
    // }
    contactDetailsName(){
        return cy.get('div.r-14lw9ot > div[style="margin-bottom: 16px;"] > div.css-1dbjc4n')
        .eq(0).find('div.r-edyy15')
    }

    contactPhoneNumber(){
        return cy.get('div[style="align-items: baseline; margin-bottom: 0px; z-index: initial; -webkit-box-align: baseline;"]')
        .find('input[aria-label="Phone Number"]').eq(0)
    }

    contactEmail(){
        return cy.get('div[style="align-items: baseline; margin-bottom: 0px; z-index: initial; -webkit-box-align: baseline;"]')
        .find('input[aria-labelledby="emailAddress"]')
    }

    // Drivers Contact
    titleDriver(){
        return cy.get('select.r-30o5oe')
    }
    nameDriver(){
        return cy.get('div.r-14lw9ot > div[style="margin-bottom: 16px;"] > div.css-1dbjc4n')
        .eq(1).find('div.r-edyy15')
    }
    phoneDriver(){
        return cy.get('input[aria-label="Phone Number"]').eq(1)
    }
    btnContinueDetail(){
        return cy.get('div.r-92ng3h').contains('Continue')
    }
}
export default new contactDetailsPage()