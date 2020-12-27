## Desafio Zappts - CRUD
- Fellipe Nunes


## Stacks utilizadas

# Backend
- Node.js
- Javascript
- NoSQL

# Frontend
- React


## Frameworks utilizados

# Backend
- Express.js
- Jsonwebtoken

# Frontend
- bootstrap


## Acessando o APP 

# Acessando os endpoints da aplicação via Heroku
- https://zappts.herokuapp.com/
- https://zappts.herokuapp.com/user
- https://zappts.herokuapp.com/carta

# Acessando os endpoints da aplicação via Postman
- Execute o comando 'npm install' no terminal para instalar as dependências 
- Modifique os paramentros do arquivo './config/exemplo.default.json' com as credenciais de conexão enviadas por email
- Renomear o arquivo 'exemplo.default.json' para 'default.json'
- Executar o comando 'node server start' para rodar a aplicação
- Excutar os endpoints via Postman
- 'http://localhost:3001/auth' - endpoint para gerar o token de acesso via Postman
- 'http://localhost:3001/carta' - endpoint para listar, deletar, criar e editar as cartas
- 'http://localhost:3001/user' - endpoint para listar, deletar, criar e editar os usuários 

# Executando o Frontend localmente para consumo da api
- Execute o comando 'npm install' no terminal para instalar as dependências do frontend
- Executar o comando 'node server start' para iniciar o DB
- Excutar o comando 'npm run start' para iniciar o frontend