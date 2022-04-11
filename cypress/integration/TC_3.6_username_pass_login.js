/// <reference types="cypress" />

describe("Username and Password login system", () => {
  it("Username and Password login", () => {
    cy.visit(
      "https://auth.flipboard.com/oauth2/login?login_challenge=af32d9620f7a44c9bf8e0190ac26cd1e"
    );
    cy.get(":nth-child(1) > .input-field > input").type(
      "sikder.info2017@gmail.com"
    );
    cy.get(":nth-child(2) > .input-field > input").type(
      "Ru_dE9T-RvgLSxh{enter}"
    );
    cy.contains("Log In").click();
  });
});
