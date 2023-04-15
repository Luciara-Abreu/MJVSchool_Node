AGENDA DE ANIVERSARIANTES.

Será uma agenda onde apenas o administrador, poderá cadastrar, listar atualizar e deletar aniversariantes ele também terá a como criar, listar, atualizar, deletar mensagens de felizitações para esses aniversariantes cadastrados. terá também como listar todas as mensagens já adicionadas para um usuário, pesquisando dentro de postagem por um id de um usuário.

Em resuumo, o usuário administrador terá que estar autenticado na aplicação para poder efetuar alguma ação dentro da aplicação.


-----------------------------------------------------------------------------------------------------
- De onde surgio o projeto?
-----------------------------------------------------------------------------------------------------
Pensei em criar uma API baseada em uma planilha de Excel que criei a algum tempo onde eu tinha três abas principais.:

A capa, ou o primeiro dashboard que me listava por semama todos os aniversariantes do mês.
<div alin="center">
<img src='https://user-images.githubusercontent.com/36546342/232254975-3209fa19-7fc3-440d-ae3a-46d290302e2c.JPG'/>
</div>

O segundo me trazia o top 10 ou seja os próximos 10 aniversariantes do mês. 
<div alin="center">
<img src='https://user-images.githubusercontent.com/36546342/232255011-e9fc1887-34bc-47b5-9eb9-53d2331f7a7c.JPG'/>
</div>

A terceira aba me da a possibiidade de consultar os aniversariantes pelo mês pesquisado. 
<div alin="center">
<img src='https://user-images.githubusercontent.com/36546342/232255071-f3af2a46-72d4-43ae-847c-e9b09f8d3f1f.JPG'/>
</div>
-----------------------------------------------------------------------------------------------------

Nessa minha planilha tive que desenvolver muitas formulas e filtros complexos para poder chegar a essas funcionalidades.
Apesar de eu amar Excel, eu achei muito interessante fazer uma API evoluindo essa ideia, e foi então que
comecei a estudar como transforma-la em uma API.



Primeiramente, fiz ela junto com o front-end no firebase usando firestore, mas como não achei muitos materiais, e ninguém que podesse me dar umas dicas eu resolvi dar um stop no projeto com firebase, mas ela está assim.
Vou aproveitar o front-end para consumir minhas apis :D


<div alin="center">
<img src='https://user-images.githubusercontent.com/36546342/232255951-7f45fa41-1a1e-490e-abd9-370d6e1197fb.JPG'/>
</div>
<div alin="center">
<img src='https://user-images.githubusercontent.com/36546342/232255981-235fa717-1175-4442-9dc8-855b149c4ef8.JPG'/>
</div>
<div alin="center">
<img src='https://user-images.githubusercontent.com/36546342/232255993-77cf1977-1929-4364-bfa1-7217b23c83c6.JPG'/>
</div>
<div alin="center">
<img src='https://user-images.githubusercontent.com/36546342/232256013-b4721708-4c0f-4316-9c0b-05b22be6b792.JPG'/>
</div>


Minha segunda tentativa foi com o Mysql e fui desenvolver a api com videos e tutoriais.... Criei todo o crud, aprendi a usar o sequelise e salvar tudo certinho no banco, mas li que o postgres era top então fiqui curiosa e desenvolvi outra Api rest básica para aprender mais e ai usei o typeorm e lá conheci o repository, ameiiii.
Eatava começando a aprender a consumir minha Api com o postgres quando conheci o curso MJVSchool_Node e resolvi aprender com voces nesse curso magnifico de como criar uma API com MongoDB e quem sabe conquistar a confiança de vocês para uma futura vaga de jr.sobre o curso, Simplismente amei!
Meu contato com node é recente, mas confesso estar apaixonada e cada vez mais as coisas ficam mais claras e faceis. Acho que isso se deve a minhas inumeras tentativas de fazer acontecer e não desistir.
Obrigada a todos os envolvidos.

<div alin="center">
<img src='https://user-images.githubusercontent.com/36546342/232255585-ceb4f1ac-79ba-4e70-9a8c-7421e4236201.JPG'/>
</div>

-----------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------

***** Para rodar a minha API é ==> npm run dev 


-----------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------
Projeto Final DevSchool Node MJV
Você deverá criar um projeto de back-end com tema de livre escolha, porém deverá seguir as regras abaixo:

Utilizar boas práticas de criação de pastas/estruturação do projeto;
Utilizar typescript para escrever o código;
Utilizar express para roteamento da aplicação;
Criar no mínimo um CRUD(Create, Read, Update e Delete) completo de alguma funcionalidade conectado com banco de dados MongoDB;
Criar um endpoint para autenticação dos usuários da sua aplicação e devolver um token com expiração para 1 Hora;
Criar no mínimo 1 endpoint que só pode ser acessado por um usuário autenticado.
Você deve subir o projeto no seu github e enviar para o professor Nathan via discord assim que finalizar.

PRAZO PARA ENTREGA FINAL DO PROJETO SERÁ ATÉ DIA 18/04 ÁS 23h59.
-----------------------------------------------------------------------------------------------------
## \*\* Aqui vou colocar alguns links que usei para facilitar a instalação de bibliotecas, banco e outros
-----------------------------------------------------------------------------------------------------

[ok] - Instalação do mongodb e sua configuração no windows
https://www.youtube.com/watch?v=PmjTR5FvnuE

---

[] - API REST com Node JS e MongoDB
https://www.youtube.com/watch?v=udWiRvvjElQ

[] - CRUD usando NodeJS e MongoDB + Mongoose
https://www.youtube.com/watch?v=AZ-lgkleUYc

---

startar o mongod
// acessar a pasta ==> C:\Program Files\MongoDB\Server\6.0\bin>
//rodar o comando abaixo
// mongod --dbpath C:\data

---

[] - CARREGAR E RECUPERAR IMAGENS NO MONGODB USANDO MONGOOSE
https://acervolima.com/carregar-e-recuperar-imagens-no-mongodb-usando-mongoose/


---
Dicas do Professor Nathan Carlos Santos Lima

/_ formantação de data => https://momentjs.com/docs/
lib Moment == https://www.npmjs.com/package/moment

moment().utc().subtract(3, 'hour')
const getDateToday = () => moment().utc().subtract(3, 'hour');
getDateToday.toDate()
_/

---
