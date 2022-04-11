/// <reference types="cypress" />

describe("Apple App download", () => {
  it("Apple App Store Download test", () => {
    cy.visit(
      "https://apps.apple.com/us/app/flipboard-latest-stories/id358801284#?platform=iphone"
    );
  });
});
