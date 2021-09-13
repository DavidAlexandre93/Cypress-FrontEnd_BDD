describe('Acessar o Site', () => {
    it('Acessar o site Salomao Zoppi', () => {
        cy.visit('https://salomaozoppi.com.br/');
        cy.get('.exams-results').click();
        cy.get('title').contains("Resultados de Exames");

        //cy.get('[data-cy=name]').type('David Alexandre Fernandes');
        //cy.get('[data-cy=email]').type('david.fernandes@dasa.com.br');
          
        //cy.get('[data-cy=submit]').click();
     
        });

    });

