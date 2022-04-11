/// <reference types="cypress" />
describe("For you", () => {
  it("For you", () => {
    cy.visit("https://flipboard.com/");
    cy.get(".main-nav__sectiondary-login-button > .button--base").click();
    cy.wait(4000);
    cy.get("form > :nth-child(1) > .input-field > input").type(
      "sikder.info2017@gmail.com"
    );
    cy.get(":nth-child(2) > .input-field > input").type(
      "Ru_dE9T-RvgLSxh{enter}"
    );
    cy.get("form > .button--primary").click();
  });
});
