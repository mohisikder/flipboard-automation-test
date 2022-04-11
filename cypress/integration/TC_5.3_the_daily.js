/// <reference types="cypress" />

describe("The Daily Features", () => {
  it("The Daily", () => {
    const url = "https://flipboard.com/@news/the-daily-edition-3adc9613z";
    cy.visit(url);
  });
});
