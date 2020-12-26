# Desafio Zappts - CRUD
- Fellipe Nunes


# Stacks utilizadas
- Node.js
- Javascript
- NoSQL

# Frameworks utilizados
- Express.js
- Jsonwebtoken


# Acessando o APP 
1 - Acessando os endpoints da aplicação via Heroku
- https://zappts.herokuapp.com/
- https://zappts.herokuapp.com/user
- https://zappts.herokuapp.com/carta

2 - Acessando os endpoints da aplicação via Postman
- Execute o comando 'npm install' no terminal para instalar as dependências 
- Modifique os paramentros do arquivo 'exemplo.default.json' com as credenciais de conexão enviadas por email
- Renomear o arquivo 'exemplo.default.json' para 'default.json'
- Executar o comando 'node server start' para rodar a aplicação
- Excutar os endpoints via Postman

- 'http://localhost:3001/auth' - endpoint para gerar o token de acesso via Postman
- 'http://localhost:3001/carta' - endpoint para listar, deletar, criar e editar as cartas
- 'http://localhost:3001/user' - endpoint para listar, deletar, criar e editar os usuários 