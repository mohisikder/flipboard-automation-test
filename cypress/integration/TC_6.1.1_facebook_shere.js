/// <reference types="cypress" />
describe("Facebook Share System", () => {
  it("facebook share test", () => {
    cy.visit("https://flipboard.com/");
    cy.wait(2000);
    cy.scrollTo(0, 800);
    cy.wait(2000);
    cy.get(
      ':nth-child(1) > .post__section-item-display > .post > .css-b8kzem > .social-actions > .social-actions__content > [data-vars-button-name="social-action-share"] > .share-icon'
    ).click();
    cy.wait(4000);
    cy.contains("Share on Facebook").click();
  });
});
