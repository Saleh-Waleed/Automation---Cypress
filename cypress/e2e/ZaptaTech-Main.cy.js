/// <reference types="cypress"/>
import moment from 'moment';


describe('ZaptaTech-Task', function () {
    beforeEach(() => {
      cy.viewport(1280, 900) // Set viewport width to 1280px and height to 900px
      cy.visit('https://stg.zaptatech.com/') 
      cy.wait(1000)

    })
  
    
    it('Visit the URL', function () {
      // This test case is visiting the URL, so it doesn't need any additional code
    });
  
    //Test Case for visiting the URl
    it('Visit the Midland Apartments page', function () {
     
     //Scrolling to the "Featured Listing" section
        cy.get('.heading').scrollIntoView()
      cy.get('.heading')
        .should('contain', 'Featured Listings')
  
        //Navigating to the MidLand Appartments
      cy.contains('h4', 'Midland Apartments')
        .should('be.visible')
        .click()
      cy.wait(1000)
    }) 

    //For Verification of text in "The Stay" section
      it('Verifying "The Stay" containing "2 bedrooms", "4 Guests", "2 Bath" Text', function () {
        cy.contains('h4', 'Midland Apartments').click()
      cy.contains('2 Bedrooms').should('be.visible')
      cy.contains('4 Guests').should('be.visible')
      cy.contains('2 Bath').should('be.visible')
       
  })

  //For Verification of text in "The Amenities" section
  it('Verifying "The Amenities" containing "Wifi", "Work Area", "Full Kitchen" Text & ScreenShot', function () {
    cy.contains('h4', 'Midland Apartments').click()
  cy.contains('Wifi').should('be.visible')
  cy.contains('Work Area').should('be.visible')
  cy.contains('Full Kitchen').should('be.visible')
   

  // Taking the ScreenShot
const now = new Date();
const hours = now.getHours().toString()   
const minutes = now.getMinutes().toString() 
const seconds = now.getSeconds().toString() 
const timestamp = `${hours}${minutes}${seconds}`;

cy.screenshot(`START${timestamp}`);

})  
  }) 
  
