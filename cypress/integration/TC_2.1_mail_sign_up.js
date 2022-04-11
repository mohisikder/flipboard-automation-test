/// <reference types="cypress" />

describe("Email signup system", () => {
  it("flipboard signup with email", () => {
    cy.visit("https://flipboard.com/");
    cy.contains("Sign up").click();
    cy.get("form > :nth-child(1) > .input-field > input")
      .type("sikder.info2017@gmail.com")
      .should("have.value", "sikder.info2017@gmail.com");
    cy.get("form > :nth-child(2) > .input-field > input").type(
      "Mohi Uddin Sikder"
    );
    cy.get("form > :nth-child(3) > .input-field > input")
      .type("Ru_dE9T-RvgLSxh")
      .should("have.value", "Ru_dE9T-RvgLSxh");
    cy.contains("Continue").click();
  });
});
