/// <reference types="cypress" />
describe('Testes API - Trello', () => {
    it('Valida status 200 e exibe list.name', () => {
    cy.request('https://api.trello.com/1/actions/592f11060f95a3d3d46a987a')
      .then((res) => {
        expect(res.status).to.eq(200);

        const listName = res.body?.data?.list?.name;
        cy.log(`list.name: ${listName}`);
        console.log('list.name:', listName);
      });
    });
  });
