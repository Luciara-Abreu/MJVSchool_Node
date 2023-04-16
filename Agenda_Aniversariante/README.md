AGENDA DE ANIVERSARIANTES.

Será uma agenda onde apenas o administrador, poderá cadastrar, listar atualizar e deletar aniversariantes ele também terá a como criar, listar, atualizar, deletar mensagens de felizitações para esses aniversariantes cadastrados. terá também como listar todas as mensagens já adicionadas para um usuário, pesquisando dentro de postagem por um id de um usuário.

Em resuumo, o usuário administrador terá que estar autenticado na aplicação para poder efetuar alguma ação dentro da aplicação.

---

- De onde surgiu a ideia para esse projeto?

---

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

Algumas formulas e filtros para atingir os resultados no Excel.

<div alin="center">
<img src='https://user-images.githubusercontent.com/36546342/232256492-0fb82f91-cb56-426f-9b02-5ffbbcc635c6.JPG'/>
</div>
<div alin="center">
<img src='https://user-images.githubusercontent.com/36546342/232256641-9c9f2248-c71c-482e-9ac7-c8586a838224.JPG'/>
</div>
<div alin="center">
<img src='https://user-images.githubusercontent.com/36546342/232256651-bdb305fc-6af7-424b-beba-ace70cb063e2.JPG'/>
</div>

---

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

Minha segunda tentativa foi com o Mysql e fui desenvolver a api com videos e tutoriais.... Criei todo o crud, aprendi a usar o sequelise e salvar tudo certinho no banco, mas li que o postgres era top então fiquei curiosa e desenvolvi outra Api rest básica para aprender mais e ai usei o typeorm e lá conheci o repository, ameiiii.
Estava começando a aprender a consumir minha Api com o postgres quando conheci o curso MJVSchool_Node e resolvi aprender com voces, nesse curso magnifico, de como criar uma API com MongoDB e quem sabe conquistar a confiança de vocês para uma futura vaga de jr.
Sobre o curso, Simplismente amei! é top de linha!! 

Meu contato com node é recente, mas confesso estar apaixonada e cada vez mais as coisas ficam mais claras e faceis. Acho que isso se deve a minhas inumeras tentativas de fazer acontecer e não desistir.
Obrigada a todos os envolvidos, Só tenho a agradecer!! 

<div alin="center">
<img src='https://user-images.githubusercontent.com/36546342/232255585-ceb4f1ac-79ba-4e70-9a8c-7421e4236201.JPG'/>
</div>

---

---

**\*** Para rodar a minha API é ==> npm run dev

---

---

Projeto Final DevSchool Node MJV
Você deverá criar um projeto de back-end com tema de livre escolha, porém deverá seguir as regras abaixo:

Utilizar boas práticas de criação de pastas/estruturação do projeto;
Utilizar typescript para escrever o código;
Utilizar express para roteamento da aplicação;
Criar no mínimo um CRUD(Create, Read, Update e Delete) completo de alguma funcionalidade conectado com banco de dados MongoDB;
Criar um endpoint para autenticação dos usuários da sua aplicação e devolver um token com expiração para 1 Hora;
Criar no mínimo 1 endpoint que só pode ser acessado por um usuário autenticado.
Você deve subir o projeto no seu github e enviar para o professor Nathan via discord assim que finalizar.

## PRAZO PARA ENTREGA FINAL DO PROJETO SERÁ ATÉ DIA 18/04 ÁS 23h59.

## \*\* Aqui vou colocar alguns links que usei para facilitar a instalação de bibliotecas, banco e outros

---

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

/\_ formantação de data => https://momentjs.com/docs/
lib Moment == https://www.npmjs.com/package/moment

moment().utc().subtract(3, 'hour')
const getDateToday = () => moment().utc().subtract(3, 'hour');
getDateToday.toDate()
\_/

---
O que leva um ser humano ser quem ele é?

Não sei escrever muito bem, não tive recursos no meu desenvolvimento, vim de família pobre e preconceituosa e muito ignorante.
Não recebi incentivos na leitura, o único incentivo que recebia era uma ameaça que se eu não estudasse, teria que ser cuidadora de idosos. Sim, meus pais achavam deprimente cuidar de pessoas idosas, naquele tempo não se exigia estudos para isso, ao contrário de hoje que para cuidar de idosos, é necessário um curso técnico (Graças a Deus).
Como nasci em uma família de conhecimento precário assim como muitos, eles não tinham muito a nos ensinar. Mas eu nasci com três dons, um o de pensar o outro de analisar as situações e a teimosia. Com meu dom de analisar, e um pouquinho de leitura, sei que até a forma como me porto em uma entrevista ou em uma empresa é de certa forma um reflexo do meu desenvolvimento como ser humano.
Fomos ensinadas que não poderíamos questionar os mais velhos, ou perguntar, mesmo que se fosse para aprender. Meus pais viam isso como um método de criar filhos educados. E hoje vejo a lacuna que isso causou no meu desenvolvimento, no nosso que no caso éramos em três filhas eu sendo a filha do meio. Só para exemplificar o que quero dizer vou contar um fato que ocorreu com minha irmã mais nova. Certa vez minha mãe a levou a um dentista que ao fazer um tal procedimento quebrou o dente dela, ele terminou o procedimento e não arrumou o dente que ele quebrou. Ela saiu de lá como se nada tivesse ocorrido, pois ela também não podia questionar um adulto, quanto menos uma pessoa com diploma, um médico, um doutor. Só ficamos sabendo anos depois quando o dente veio a dar problemas.
Com essa família problemática, pai alcoólatra, tive doença dos nervos (seborreia e psoríase) quando criança e por alguns períodos baixada no hospital, eu perdia as aulas na quinta série e reprovei, e foi aos trancos até a sétima quando parei porque tinha vergonha pois sofria preconceito na escola e nos ônibus, perdi alguns anos e quando voltei para a escola, sim eu voltei para a sétima serie com 16 anos, eu já era mais velha, estudei com crianças 12 anos e foi Ilário, elas gostavam de mim e eu já não me importava tanto com a minha condição e daí eu não parei mais e consegui completar o ensino médio. A faculdade na época era surreal e eu não tinha condições de pagar, quanto menos meus pais. 
Mas eu com meus três dons, não parei mais de estudar e consegui me formar agora depois dos 40, muitos diziam para eu desistir porque já sou velha. Eu sou teimosa e não acho que sou velha. Lógico que estou resumindo muito a minha história pois depois do ensino médio comeceu a trabalhar, e estudar quando conseguia juntar dinheiro para pagar alguns cursos até que surgiram os cursos no youtube, as faculdades EAD...... Mas posso contar em outra oportunidade  Nessa vou me abster ao desenvolvimento de uma criança com pouca ou quase nada de incentivos.

Com isso quero dizer que sei o quanto esse curso é importante para mim e para outras pessoas que tiveram o que tive ou ainda menos do que eu.
Sei o que você está fazendo, pretendo passar a diante o que aprender, pois tenho essa mesma ânsia de mudar o mundo, de ajudar as pessoas. Moro em uma cidade chamada Alvorada -RS, bem pobre e aqui o ensino é muito fraco, os pais sem amparo familiar, sem base, não tiveram o básico para passar para seus filhos e os filhos terão menos ainda para repassar a seus filhos... Sei que o ensino é transformador, sei o quanto ele muda as pessoas, o quanto abre a mente.
Em resumo, o que me levou a ser quem eu sou é o dom de pensar e de questionar, junto com a carga de informações que mal ou bem meus familiares me repassaram e a tal teimosia. 
Sendo assim, o que leva um ser humano ser quem ele é, basicamente são as condições do meio que o influênciam em seus comportamentos.

E não é porque tenho um filho pequeno que quero um mundo mais amoroso e justo, isso já queria quando tinha meus 12 anos de idade. 
Eu desejo o melhor para mim e para os que aqui estão compartilhando a existência nesse planeta lindo. 