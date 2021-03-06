bplist00�_WebMainResource�	
_WebResourceData_WebResourceMIMEType_WebResourceTextEncodingName^WebResourceURL_WebResourceFrameNameO><html><head><meta charset="UTF-8"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;"># AssociaÃ§Ã£o Nova Escola - Vaga para Desenvolvedor (Desafio Tecnico)

## Contexto
Neste desafio tÃ©cnico queremos uma api REST e uma interface para usuÃ¡rios cadastrarem dados de clientes. VocÃª poderÃ¡ lanÃ§ar mÃ£o de tÃ©cnicas, bibliotecas e frameworks que julgar adequados. NÃ£o Ã© obrigatÃ³rio executar todas as etapas do teste, mas quanto mais vocÃª fizer melhor serÃ¡ avaliado.

___
## O que serÃ¡ analisado no desafio tÃ©cnico

- Projeto
    - legibilidade do cÃ³digo
    - estruturaÃ§Ã£o do cÃ³digo
    - documentaÃ§Ã£o
    - se estÃ¡ disponivel online (subir em algum servidor)
    - facilidade de rodar a aplicaÃ§Ã£o localmente

- Testes Automatizados
    - se existem
    - quais tipos
    - cobertura

- AutomaÃ§Ãµes (opcional)
    - integraÃ§Ã£o contÃ­nua
    - docker

___
## Requisitos tÃ©cnicos

- __Frontend__:
    - React com Material UI
- __Backend__:
    - Java (v8 ou maior) - Se vocÃª estiver aplicando para vaga de Java.
    - Javascript (Typescript desejÃ¡vel) - NodeJS v10.x ou maior - Se vocÃª estiver aplicando para vaga de NodeJS.
- __Banco de Dados__: MySQL

___
## ServiÃ§o de Cliente (backend - obrigatÃ³rio)
O serviÃ§os da _api_ devem seguir a especificaÃ§Ã£o abaixo. NÃ£o se preocupe com seguranÃ§a (autorizaÃ§Ã£o, login, etc); a _api_ pode ficar aberta mesmo.

### Cadastro do cliente
\[`POST`\] `/cliente`

Corpo: JSON com dados do cliente a serem cadastrados

    Atributos:
        - nome: string
        - email: string
        - dataDeNascimento: date

Exemplo de corpo
```json
{
    "nome": "JosÃ©",
    "email": "jose@email.com",
    "dataDeNascimento": "01/01/2000"
}
```

Resposta: JSON com dados do cliente acrescido do id (atributo identificador)

    CÃ³digo da resposta: 201
```json
{
    "id": 1,
    "nome": "JosÃ©",
    "email": "jose@email.com",
    "dataDeNascimento": "01/01/2000"
}
```

### Listagem do cliente
\[`GET`\] `/cliente?limite={numero}&amp;pagina={numero}`

    Parametros Opcionais:
        - limite: valor que define quantidade maxima a ser retornada
            caso nÃ£o seja enviado na requisiÃ§Ã£o, usar valor padrao igual a 10
        - pagina: paginaÃ§Ã£o da listagem baseado no total
            caso nÃ£o seja enviado na requisiÃ§Ã£o, usar valor padrao igual a 1

Corpo: _vazio_

Resposta: lista com objetos cadastrados na base limitados pelo parametro `limite` acrescido com o total de dados existente na base (usado para paginaÃ§Ã£o do frontend)

Exemplo de resposta de requisiÃ§Ã£o com `limite` igual a 1

    CÃ³digo da resposta: 200
```json
{
    "total": 2039,
    "lista": [
        {
            "id": 1,
            "nome": "JosÃ©",
            "email": "jose@email.com",
            "dataDeNascimento": "01/01/2000"
        }
    ]
}
```

### Detalhamento do cliente
\[`GET`\] `/cliente/{id}`

    Parametro ObrigatÃ³rio:
        - id: identificador do cliente a ser retornado

Corpo: _vazio_

Resposta: objeto com dados do cliente

Exemplo de resposta da requisiÃ§Ã£o

    CÃ³digo: 200
```json
{
    "id": 1,
    "nome": "JosÃ©",
    "email": "jose@email.com",
    "dataDeNascimento": "01/01/2000"
}
```

### AlteraÃ§Ã£o do cliente
\[`PUT`\] `/cliente/{id}`

    Parametro obrigatÃ³rio:
    - id: identificador do cliente a ser atualizado

Corpo: dados a serem atualizados do cliente

Exemplo do corpo
```json
{
    "nome": "JosÃ© da Silva"
}
```

Resposta: objeto com dados do cliente

Exemplo da resposta

    CÃ³digo da resposta: 200
```json
{
    "id": 1,
    "nome": "JosÃ© da Silva",
    "email": "jose@email.com",
    "dataDeNascimento": "01/01/2000"
}
```

### RemoÃ§Ã£o do cliente
\[`DELETE`\] `/cliente/{id}`

    Parametro obrigatÃ³rio:
        - id: identificador do cliente a ser removido

Corpo: _vazio_

Resposta: _vazio_

    CÃ³digo da resposta: 200


## Interface para usuÃ¡rio (frontend - opcional)

    Usando React + Material UI desenvolver o frontend do CRUD de clientes especificado acima.

</pre></body></html>]text/markdownUUTF-8_�https://s3.amazonaws.com/gupy5/production/companies/856/emails/1588956838808/52056a10-914c-11ea-8242-3b93a8ca1224/prova-tecnica.mdP    ( : P n } ����o             
              p