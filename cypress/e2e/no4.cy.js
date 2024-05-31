describe('template spec', () => {
    it ( 'main dashboard', () => {
        cy.visit('https://zzzscore.com/1to50/en/')
        cy.wait(2500)
        for (let i = 1; i <= 50; i++) {
            cy.get('#grid') 
            .contains(new RegExp(`^${i}$`))
            .click()
        }
    })
})