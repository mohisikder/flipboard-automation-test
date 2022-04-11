/// <reference types="cypress" />

describe("Facebook Signup System", () => {
  it("Facebook signup Test", () => {
    cy.visit("https://flipboard.com/join");
    cy.get(".facebook-icon").click();
    cy.get(".inputtext _55r1.inputtext.inputtext").type(
      "sikder.info2017@gmail.com"
    );
  });
});
