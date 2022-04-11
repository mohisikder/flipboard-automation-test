describe("login with google", () => {
  it("google login", () => {
    cy.visit(
      "https://auth.flipboard.com/oauth2/login?login_challenge=af32d9620f7a44c9bf8e0190ac26cd1e"
    );
    cy.get(".google-icon").click();
    cy.get("input").type("sikder.info2017@gmail.com{enter}");
  });
});
