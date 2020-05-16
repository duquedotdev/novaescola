<h3 align="center">
  Prova Técnica Node.Js (Junior) Nova Escola
</h3>

<p align="center">Esta é a prova técnica que foi solicitada para a vaga de Node.Js (Junior) para Nova Escola.</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :checkered_flag: Rota Principal


    http://64.227.106.156/cliente


A aplicação está instanciada em uma máquina Linux na Digital Ocean. Pode ser acessada pelo link acima.


### **Um pouco sobre as ferramentas**

A aplicação foi criada usando [Express](https://expressjs.com/), além das seguintes ferramentas:

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (com SQLite [Testes] e MySQL [Produção]);
- Sentry + Youch;
- Celebrate;
- Jest + Faker + FactoryGirl (Testes);
- Outros;

### **Funcionalidades**

Abaixo estão descritas as funcionalidades solicitadas na aplicação.

### **1. Cadastro de Usuário**

    [POST]http://64.227.106.156/cliente

Body:

    {
        "nome": "Felipe Souza França Duque",
        "email": "felipe@duque.dev",
        "dataDeNascimento": "1993-07-08"
    }

O resultado esperado é:

    {
      "id": 1,
      "nome": "Felipe Souza França Duque",
      "email": "felipe@duque.dev",
      "dataDeNascimento": "1993-07-08"
    }
    
Adicionalmente criei uma validação de existência de cliente. No caso de uma tentativa de cadastro de um cliente com e-mail já existe, o sistema impede o cadastro e exibe a seguinte mensagem:

    {
      "error": "Este e-mail já pertence a um cliente cadastrado no sistema"
    }

### 2. Indexação de Clientes

    [GET]http://64.227.106.156/cliente

Body:

    Vazio

O resultado esperado é:

    {
      "count": 1,
      "rows": [
        {
          "id": 1,
          "nome": "Felipe Souza França Duque",
          "email": "felipe@duque.dev",
          "dataDeNascimento": "1993-07-08"
        }
      ]
    }


### 3. Visualização de Clientes

    [GET]http://64.227.106.156/cliente/:id

Body:

    Vazio

O resultado esperado é:

    {
      "id": 1,
      "nome": "Felipe Souza França Duque",
      "email": "felipe@duque.dev",
      "dataDeNascimento": "1993-07-08"
    }
    
### 4. Atualização de Clientes

    [PUT]http://64.227.106.156/cliente/:id

Body:

    {
      "nome": "Felipe Duque",
      "email": "felipe@duque.dev",
      "dataDeNascimento": "1993-07-08"
    }
    
Nota: Todos os parâmetros acima são opcionais.

O resultado esperado é:

    {
      "O cliente Felipe Duque foi alterado com sucesso!"
    }

### 5. Exclusão de Clientes

    [DELETE]http://64.227.106.156/cliente/:id

Body:

    Vazio
    
Nota: Todos os parâmetros acima são opcionais.

O resultado esperado é:

    {
      Ok
    }
    
Adicionalmente criei uma validação de tentativa de exclusão de um cliente inexistente.

    {
      "error": "Cliente não encontrado!"
    }


## :white_check_mark: Teste

O projeto contempla 8 testes que atingem 100% dos métodos. Os mesmos foram criados com Jest +  Faker + FactoryGirl.

Para executar os testes rode:

    yarn test
    
    
O resultado esperado a verificação dos testes:
    
    ✓ Se o cliente é cadastrado;
    ✓ Se o endereço de email do cliente já existe, impede o cadastro;
    ✓ Se a rota de indexação de cliente responde e se existe cadastros listados;
    ✓ Se o cliente solicitado não existe;
    ✓ Se o cliente visualizado é o cliente solicitado;
    ✓ Testa a atualização de um cliente;
    ✓ Testa a exclusão de um cadastro existente;
    ✓ Testa a exclusão de um cadastro inexistente ou já excluído;

## :fast_forward: CI/CD

Para integração contínua utilizei o Buddy Works com uma pipeline enxuta. Caso necessário compartilho o acesso.

  1. Commit na branch Master;
  2. Testa a integração;
  3. Faz upload na instância;
  4. Reinicia o serviço PM2;
  5. Envia uma notificação de conclusão;
  
## :no_entry_sign: Gerenciamento de Erros

No caso de erros, implementei o Sentry para monitorar os erros que podemos obter. Caso necessário compartilho o acesso.

---

Feito com ♥ por Felipe Duque. [Visite meu site!](https://duque.dev)
