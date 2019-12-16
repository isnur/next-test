describe("Index page", () => {
  /*
  * Visits the page before each test
  */
  beforeEach(() => {
    cy.log(`Visiting http://localhost:3000`);
    cy.visit("/");
  });

  /**
  * Header section
  */
  it("should have a toolbar", () => {
    cy.get(".toolbar").should("have.length", 1);
  });

  /**
  * Content section
  */
  it("should have a content section with a title", () => {
    cy.get(".content h2").should("have.length", 1);
    cy.get(".content h2").contains("Sum X & Y");
  });

  /**
  * Menubar section
  */
  it("should have a menubar section with four menuitem", () => {
    cy.get(".menubar").should("have.length", 1);
    cy.get(".menubar .menuitem").should("have.length", 4);
  });

  /**
  * Menuitem click
  */
  it("should goto Case 4", () => {
    cy.get('[href="/?case=4"]').click()
    cy.get(".content h2").contains("Find the first N Fibonacci sequence");
  });
  
});

describe("Index page case 2", () => {
  /*
  * Visits the page before each test
  */
  beforeEach(() => {
    cy.log(`Visiting http://localhost:3000/?case=2`);
    cy.visit("/?case=2");
  });

  /**
  * Content section
  */
  it("should have a content section with a title", () => {
    cy.get(".content h2").should("have.length", 1);
    cy.get(".content h2").contains("Multiply X & Y");
  });

  /**
  * Menubar section
  */
  it("should active Case 2", () => {
    cy.get(".active").should("have.length", 1);
    cy.get(".active").contains("Case 2");
  });
});