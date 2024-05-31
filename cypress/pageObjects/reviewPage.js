class reviewPage {
    // note request
    // noteRequest(){
    //     return cy.get('div. r-1wyyakw')
    // }

    tapCheckReq(){
        return cy.get('div[class="css-901oao r-t1w4ow r-ubezar r-majxgm r-135wba7 r-fdjqy7"]')
        .contains('Tap to check the requirements.')
    }
    popUpCheckReq(){
        return cy.get('div[class="css-901oao r-t1w4ow r-ubezar r-majxgm r-135wba7 r-6gpygo r-fdjqy7"]')
    }
    tapCheckAll(){
        return cy.get('div[class="css-901oao r-t1w4ow r-ubezar r-majxgm r-135wba7 r-1m04atk r-fdjqy7"]')
        .contains('Check All')
    }
    btnSaveCheckAll(){
        return cy.get('div[class="css-1dbjc4n r-1awozwy r-13awgt0 r-18u37iz r-1777fci"]')
        .contains('Save')
    }
    btnContinuePayment(){
        return cy.get('div[class="css-901oao css-bfa6kz r-jwli3a r-t1w4ow r-1uirtdp r-b88u0q r-uzxld0 r-q4m81j"]')
        .contains('Continue to Payment')
    }

    // Pop Up
    popUpReview(){
        return cy.get('div[class="css-901oao css-bfa6kz r-jwli3a r-t1w4ow r-cygvgh r-b88u0q r-1iukymi r-q4m81j"]')
        .contains('Continue')
    }

    // Payment Method
    btnPayment(){
        return cy.get('div[class="css-901oao css-bfa6kz r-t1w4ow r-1uirtdp r-b88u0q r-uzxld0 r-q4m81j"]')
        .contains('Pay with BCA Virtual Account')
    }

}
export default new reviewPage()