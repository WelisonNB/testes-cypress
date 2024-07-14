Projeto de Testes Automatizados com Cypress
Este repositório contém um conjunto de testes automatizados utilizando Cypress para verificar a funcionalidade de uma aplicação web de comércio eletrônico. Os testes abrangem operações de API, carrinho de compras, pesquisa de produtos e fluxo de registro de usuário.

<<<<<<< HEAD
Aluno: Welison Nunes

=======
>>>>>>> ff20163543e15ffeddb2b671db817c4da1aabf05
Requisitos
Node.js (versão 12 ou superior)
npm (gerenciador de pacotes do Node.js)
Instalação
Siga os passos abaixo para configurar e executar os testes:

Clone o repositório:
<<<<<<< HEAD

bash
Copiar código
git clone https://github.com/WelisonNB/testes-cypress.git
cd testes-cypress
Inicialize um novo projeto npm:

=======
bash
Copiar código
git clone https://github.com/kleberbarros9/testes-automatizados-cypress-posweb-unipe.git
cd testes-automatizados-cypress-posweb-unipe
Inicialize um novo projeto npm:
>>>>>>> ff20163543e15ffeddb2b671db817c4da1aabf05
bash
Copiar código
npm init -y
Instale o Cypress como uma dependência de desenvolvimento:
<<<<<<< HEAD

=======
>>>>>>> ff20163543e15ffeddb2b671db817c4da1aabf05
bash
Copiar código
npm install cypress --save-dev
Abra o Cypress pela primeira vez para criar as pastas padrão:
<<<<<<< HEAD

=======
>>>>>>> ff20163543e15ffeddb2b671db817c4da1aabf05
bash
Copiar código
npx cypress open
Isso criará automaticamente a estrutura de pastas cypress com as subpastas e2e, fixtures e support.

Coloque os arquivos de teste api.cy.js, carrinho.cy.js, pesquisa.cy.js e registro.cy.js na subpasta e2e:
<<<<<<< HEAD

arduino
=======
plaintext
>>>>>>> ff20163543e15ffeddb2b671db817c4da1aabf05
Copiar código
cypress/
├── e2e/
│   ├── api.cy.js
│   ├── carrinho.cy.js
│   ├── pesquisa.cy.js
│   └── registro.cy.js
├── fixtures/
├── support/
└── cypress.config.js
Estrutura do Projeto
Após abrir o Cypress pela primeira vez, a estrutura de pastas do projeto deve ser similar à seguinte:

<<<<<<< HEAD
lua
=======
plaintext
>>>>>>> ff20163543e15ffeddb2b671db817c4da1aabf05
Copiar código
nome-do-repositorio/
├── cypress/
│   ├── e2e/
│   │   ├── api.cy.js
│   │   ├── carrinho.cy.js
│   │   ├── pesquisa.cy.js
│   │   └── registro.cy.js
│   ├── fixtures/
│   ├── support/
│   └── cypress.config.js
├── node_modules/
├── package.json
└── README.md
Execução dos Testes
<<<<<<< HEAD
Para abrir a interface gráfica do Cypress e executar os testes, utilize o seguinte comando:
=======
Para abrir a interface gráfica do Cypress e executar os testes, use o seguinte comando:
>>>>>>> ff20163543e15ffeddb2b671db817c4da1aabf05

bash
Copiar código
npx cypress open
Na interface que se abrirá, clique no arquivo de teste que deseja executar.

Escopo dos Testes
O que será executado durante os testes:
Testes de API:

Verificação do status de resposta ao realizar requisições GET para a lista de produtos.
Verificação do status de resposta ao realizar requisições GET para a lista de todas as marcas.
Testes de Carrinho de Compras:

Adição de múltiplos produtos ao carrinho e verificação da presença dos produtos no carrinho.
Remoção de um produto específico do carrinho e verificação da remoção.
Testes de Pesquisa de Produtos:

Pesquisa por produtos existentes e verificação da exibição dos resultados esperados.
Pesquisa por produtos inexistentes e verificação da ausência de resultados.
Testes de Registro de Usuário e Autenticação:

Cadastro de um novo usuário e verificação da criação da conta.
Login com um usuário existente e verificação do sucesso do login.
Tentativa de login com senha errada e verificação da mensagem de erro.
Login e subsequente exclusão da conta do usuário.
O que não será executado durante os testes:
Testes de performance e carga para as APIs e a aplicação web.
Testes de usabilidade e experiência do usuário.
Testes de segurança como injeção de SQL, XSS e outras vulnerabilidades.
Testes de compatibilidade em diferentes navegadores e dispositivos.
Testes de fluxo de pagamento e transações financeiras.
Testes relacionados a funcionalidades específicas não mencionadas (e.g., wish list, perfil do usuário).
Estratégia de Testes
<<<<<<< HEAD
Garantia de Cobertura
Seleção de Casos de Teste: Os casos de teste selecionados cobrem as funcionalidades críticas da aplicação, como operações de carrinho de compras, pesquisa de produtos e fluxo de autenticação de usuário.
Automatização: Todos os casos de teste serão automatizados utilizando Cypress, garantindo que as verificações sejam repetíveis e possam ser executadas frequentemente.
Tempo
Execução de Testes Automatizados: Testes automatizados serão executados a cada commit em um pipeline de Integração Contínua (CI) para garantir feedback rápido sobre a estabilidade do código.
Paralelismo: Execução paralela de testes para otimizar o tempo de execução e reduzir o tempo total necessário para validação.
Possíveis Contingências
=======
Garantia de Cobertura:

Seleção de Casos de Teste: Os casos de teste selecionados cobrem as funcionalidades críticas da aplicação, como operações de carrinho de compras, pesquisa de produtos e fluxo de autenticação de usuário.
Automatização: Todos os casos de teste serão automatizados utilizando Cypress, garantindo que as verificações sejam repetíveis e possam ser executadas frequentemente.
Tempo:

Execução de Testes Automatizados: Testes automatizados serão executados a cada commit em um pipeline de Integração Contínua (CI) para garantir feedback rápido sobre a estabilidade do código.
Paralelismo: Execução paralela de testes para otimizar o tempo de execução e reduzir o tempo total necessário para validação.
Possíveis Contingências:

>>>>>>> ff20163543e15ffeddb2b671db817c4da1aabf05
Falhas de Teste: Em caso de falha nos testes, um alerta será gerado e os logs serão analisados para identificar e corrigir rapidamente as causas.
Ambiente de Teste: Manter um ambiente de teste estável e isolado para evitar interferências externas e inconsistências nos resultados dos testes.
Backup de Dados: Garantir que há um backup dos dados usados durante os testes para restaurar o estado inicial em caso de falhas ou inconsistências.
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias e correções.

Licença
<<<<<<< HEAD
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
=======
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

>>>>>>> ff20163543e15ffeddb2b671db817c4da1aabf05
