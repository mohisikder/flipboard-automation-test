/// <reference types="cypress" />

describe("Home Section", () => {
  it("Homes", () => {
    const url = "https://flipboard.com/topic/homedecor";
    cy.visit(url);
  });
});
