## petalflow/cypress-integration

Biblioteca de integração entre Cypress e PetalFlow para automação de testes.

## Instalação

```bash
npm install @petalflow/cypress-integration
```

## Configuração

No arquivo `cypress/support/e2e.js` ou `cypress/support/commands.js`, adicione:

```javascript

const petalflowCypress = require('@petalflow/cypress-integration');
const petalIt = petalflowCypress.petalIt;
petalflowCypress.setupCommands({
  token: 'seu-token-aqui',
})
```

## Uso

Nos seus testes Cypress, você pode usar o comando `cy.reportTestResult()` para reportar os resultados:

```javascript
describe("Teste login", () => {
  petalIt('CT_000', '/login', () => {
    // .... 
    // you test code here
    //....
  })
})
```

## Parâmetros

### setupCommands(config)
- `config.token`: Token de autenticação

### cy.reportTestResult(caseId, result)
- `caseId`: ID do caso de teste no PetalFlow
- `result`: Resultado do teste ('PASS' ou 'FAIL')

## Contribuição

Para contribuir com o projeto, por favor abra uma issue ou pull request no repositório.