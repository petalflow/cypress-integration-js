# @petalflow/cypress-integration

Biblioteca de integração entre Cypress e PetalFlow para automação de testes.

## Instalação

```bash
npm install @petalflow/cypress-integration
```

## Configuração

No arquivo `cypress/support/e2e.js` ou `cypress/support/commands.js`, adicione:

```javascript
const petalflowCypress = require('@petalflow/cypress-integration');

petalflowCypress.setupCommands({
  apiUrl: 'http://seu-servidor-petalflow',
  token: 'seu-token-de-autenticacao'
});
```

## Uso

Nos seus testes Cypress, você pode usar o comando `cy.reportTestResult()` para reportar os resultados:

```javascript
it('Validar as credenciais de acesso corretas', () => {
  const caseId = 13;
  
  LoginPage.visit();
  LoginPage.fillLogin(login);
  LoginPage.fillPassword(password);
  LoginPage.clickProceed();

  cy.url().should('include', '/atendimento').then(() => {
    cy.reportTestResult(caseId, 'PASS');
  });
});
```

## Parâmetros

### setupCommands(config)
- `config.apiUrl`: URL base da API do PetalFlow
- `config.token`: Token de autenticação

### cy.reportTestResult(caseId, result)
- `caseId`: ID do caso de teste no PetalFlow
- `result`: Resultado do teste ('PASS' ou 'FAIL')

## Contribuição

Para contribuir com o projeto, por favor abra uma issue ou pull request no repositório.