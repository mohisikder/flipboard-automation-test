/// <reference types="cypress" />

describe("Entertainment", () => {
  it("Entertainment test", () => {
    const url = "https://flipboard.com/topic/entertainment";
    cy.visit(url);
  });
});
