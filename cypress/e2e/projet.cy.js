describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080/');
    cy.get("a[class= 'btn btn-primary']").click();
    cy.get("input[id='fullname']").type("test");
    cy.get("input[id='email']").type("test@yahoo");
    cy.get("input[id='password']").type("test");
    cy.get("input[id='confirmPassword']").type("test");
    cy.get("button[class='btn btn-success']").click();
  })

  it('iformation valide', () => {
    cy.visit('http://localhost:8080/');
    cy.get("a[class= 'btn btn-primary']").click();
    cy.get("input[id='fullname']").type("testeurs");
    cy.get("input[id='email']").type("testeursG4@test.fr");
    cy.get("input[id='password']").type("12345678");
    cy.get("input[id='confirmPassword']").type("12345678");
    cy.get("button[class='btn btn-success']").click();
    cy.get("div[class='alert-alert-danger alert-dismissiible']").should("be.exist")



  })
  it('login page', () => {
    cy.visit('http://localhost:8080/');
    cy.get("a[class= 'btn btn-outline-light me-2']").click();
    cy.get("input[id='email']").type("testeursG4@test.fr");
    cy.get("input[id='password']").type("12345678");
    cy.get("button[class='col-md-3 btn btn-primary']").click();
    cy.get("div[class='alert-alert-danger alert-dismissiible']").should("be.exist")
    
 
   })
   
   
   

   it('Email invalid', () => {
     cy.visit('http://localhost:8080/');
     cy.get("a[class= 'btn btn-outline-light me-2']").click();
     cy.get("input[id='email']").type("testeurs@test.fr");
     cy.get("input[id='password']").type("12345678");
     cy.get("button[class='col-md-3 btn btn-primary']").click();
     cy.get("div[class='alert alert-danger alert-dismissible']").should("not.be.exist")
   })  
     
     it('password invalid', () => {
       cy.visit('http://localhost:8080/');
       cy.get("a[class= 'btn btn-outline-light me-2']").click();
       cy.get("input[id='email']").type("testeursG4@test.fr");
       cy.get("input[id='password']").type("12345699");
       cy.get("button[class='col-md-3 btn btn-primary']").click();
       cy.get("div[class='alert alert-danger alert-dismissible']").should("not.be.exist")
       
 
     })
 
     it('champs vides', () => {
       cy.visit('http://localhost:8080/');
       cy.get("a[class= 'btn btn-outline-light me-2']").click();
       cy.get("input[id='email']").type("");
       cy.get("input[id='password']").type("");
       cy.get("button[class='col-md-3 btn btn-primary']").click();
       cy.get("div[class='col-md-3 btn btn-primary']").should("not.be.exist")
       
   
    
     })
 
   })
   
  

