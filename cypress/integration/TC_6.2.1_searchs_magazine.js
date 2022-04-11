/// <reference types="cypress" />
describe("Search Magazines System", () => {
  it("Username and Password login", () => {
    cy.visit("https://flipboard.com/");
    cy.wait(3000);
    cy.contains("Log in").click();
    cy.wait(2000);
    cy.get("form > :nth-child(1) > .input-field > input").type(
      "sikder.info2017@gmail.com"
    );
    cy.get(":nth-child(2) > .input-field > input").type(
      "Ru_dE9T-RvgLSxh{enter}"
    );
    cy.contains("Log In").click();
  });
  it("Search test", () => {
    cy.get(".search-icon").click().type("magazines {enter}");
  });
});
