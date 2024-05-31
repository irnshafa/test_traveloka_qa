import mainPage from "../pageObjects/mainPage"
import carRentalPage from "../pageObjects/carRentalPage"
import detailPage from "../pageObjects/detailPage"
import contactDetailsPage from "../pageObjects/contactDetailsPage"
import reviewPage from "../pageObjects/reviewPage"
// import bypassCaptcha from "../pageObjects/bypassCaptcha"

describe('template spec', () => {
    it ( 'main dashboard', () => {
        cy.visit('https://www.traveloka.com/en-id')
        cy.wait(2500)
        mainPage.btnCarRental().click({force: true});
        mainPage.btnWithoutDriver().click({force: true})
        // Detail Car Rental Filter Date
        mainPage.clickLocation().click({force: true});
        mainPage.fillLocation().type('Bandung {enter}');
        mainPage.clickSelectLocation().contains('Trans Studio Bandung').click({force: true});

        mainPage.clickStartDate().click({force: true})
        mainPage.pickStartDate().click({force: true})

        mainPage.clickStartTime().click({multiple: true, force: true})
        cy.wait(1000)
        mainPage.pickStartTimeHour().click({force: true})
        mainPage.pickStartTimeMinute().click({force: true})
        mainPage.btnStartTime().click({force: true})

        // mainPage.titleHour().should('be.visible')
        // mainPage.pickStartTime().click({force: true})

        mainPage.clickEndDate().click({multiple: true, force: true})
        mainPage.pickEndDate().click({force: true})

        mainPage.clickEndTime().click({multiple: true, force: true})
        cy.wait(1000)
        mainPage.pickEndTimeHour().click({force: true})
        mainPage.pickEndTimeMinute().click({force: true})
        mainPage.btnEndTime().click({force: true})

        // search button / icon
        mainPage.btnSearch().click({force: true})

        cy.wait(3000)
        carRentalPage.btnContinue().click({force: true})

        cy.wait(3000)
        carRentalPage.btnContinueRentalProvider().click({force: true})

        // Pick Up - Rental Office
        cy.wait(3000)
        detailPage.btnRadioRental().click({force: true})

        detailPage.choosePickUpLoc().should('be.visible').click({multiple: true, force: true})
        cy.wait(3000)

        detailPage.clickPickUpLoc().should('be.visible').click({multiple: true, force: true})
        cy.wait(5000)

        // Drop Off - Other Location
        detailPage.btnRadioDropLoc().click({force: true})    
        cy.wait(1500)

        //Continue Button
        detailPage.btnContinueLoc().click()
        cy.pause()

        // Contact Details
        cy.wait(1500)
        contactDetailsPage.contactDetailsName().first().type('Irine Jasmine')
        contactDetailsPage.contactPhoneNumber().first().type('81271080393')
        contactDetailsPage.contactEmail().first().type('irine.shafa@gmail.com')

        // Driver Details
        cy.wait(1500)
        contactDetailsPage.titleDriver().select('MISS')
        cy.wait(1000)
        contactDetailsPage.nameDriver().first().type('Jasmine')
        cy.wait(1000)
        contactDetailsPage.phoneDriver().first().type('82177649955')
        contactDetailsPage.btnContinueDetail().click({force: true})

        // Review Page
        //reviewPage.noteRequest().type('baby seat if any')
        cy.wait(2000)
        reviewPage.tapCheckReq().click()
        reviewPage.popUpCheckReq().should('be.visible')
        cy.wait(1000)
        reviewPage.tapCheckAll().click({force: true})
        reviewPage.btnSaveCheckAll().click()
        reviewPage.btnContinuePayment().click()
        cy.wait(1000)
        reviewPage.popUpReview().click()

        // button payment
        cy.wait(1500)
        reviewPage.btnPayment().click()
        
    })
})