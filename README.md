# portal-academico


# Dependências do sistema de login
    npm i passport passport-local express-session bcrypt


### Passport
Doc: http://passportjs.org/docs/downloads/html/
Passport é autenticação middleware para Node. Ele foi projetado para servir
a um propósito singular: autenticar pedidos.
Ao escrver módulos, o encapsulamento é uma virtude, então o passport delega todas as
outras funcionalidades para o aplicativo. Essa separação de preocupações ,antém o código limpo e 
mantenedor, e torna o passport extremamente fácil de integrar em um aplicativo.
O Passport reconhece que cada aplicativo tem requisitos exclusivos de autenticação. Os mecanismos 
de autenticação são conhecidos como "estratégias".


### passport-local
Doc: http://passportjs.org/packages/passport-local/
Uma das estratégias do passport, utiliza para autencticação com o nome de usuario e senha.


### express-session
Quando o cliente faz uma solicitação de login no servidor, o servidor criará uma sessão 
e armazenará no lado do servidor. Quando o servidor responde ao cliente, ele envia um cookie