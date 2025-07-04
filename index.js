let config = {
  token: null
};

/**
 * @param {Object} userConfig - Configuração com `token`
 */
function setupCommands(userConfig) {
  if (!userConfig?.token) {
    throw new Error('Token é obrigatório na configuração da integração com o PetalFlow.');
  }
  config.token = userConfig.token;
}

/**
 * @param {string} caseId
 * @param {string} title
 * @param {Function} testFn
 */
function petalIt(caseId, title, testFn) {
  if (!config.token) {
    throw new Error('Token não foi configurado. Use setupCommands({ token: "..." }) no início.');
  }

  it(title, function () {
    Cypress.once('test:after:run', (test) => {
      const result = test.state === 'passed' ? 'PASS' : 'FAIL';

      fetch(`https://petalflow.com.br/api/executionTest/executeCaseAutomation?token=${config.token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify({
          ct: caseId,
          result: result
        })
      }).catch((err) => {
        console.error('Erro ao reportar resultado ao PetalFlow:', err);
      });
    });

    testFn();
  });
}

module.exports = {
  petalIt,
  setupCommands
};
