***** Para rodar a minha API é ==> npm run dev


AGENDA DE ANIVERSARIANTES.
Resumo.:

O que terá nessa App de Agenda de Aniversariantes?
Funcionalidades de administrador.:

A Agenda de aniversariantes é uma aplicação que estou desenvolvendo para enviar felicitações aos aniversariantes do dia. Esse envio pode ser por e-mail ou uma mensagem pelo WhatsApp.
Ela pode substituir um Excel e através dela podemos validar que uma mesma pessoa, não receba a mesma mensagem todos os anos. 
Nela teremos os aniversariantes, os administradores e as postagens de mensagens cadastradas.

O administrador, será o responsável por adicionar, alterar, listar e excluir nossos aniversariantes bem como a mensagem ou apenas uma felicitação a um aniversariante, terá também como listar todas as mensagens já adicionadas para um determinado aniversariante, pesquisando dentro de postagem por um id de um usuário.
Para tais acessos, o administrador terá que estar logado na aplicação.

Seu acesso é com e-mail e senha. 
Exemplo de um adm que criei.
"email": "luciara.abreu@gmail.com",
  "password": "155155"

Caso o administrador se esqueça da senha, poderá solicitar o envio de um token por e-mail para criar nova senha.
Ao receber o e-mail, o mesmo deve copiar o token e criar nova senha.

Exemplo.: 
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2lhcmEuYWJyZXVAZ21haWwuY29tIiwiaWQiOiI2NDMxZWU2MTNhNzg0YzhlYjA1ZDQxMzIiLCJpYXQiOjE2ODE3ODI1MzYsImV4cCI6MTY4MTc4NjEzNn0.iVWjxiCKgDNdzcf1dsl1rh6M8ikFAcBlg6y6UZBp3Ss",
"password":"123456",
"passwordConfirmation": "123456"
}


- De onde surgiu a ideia para esse projeto?
Pensei em criar uma API baseada em uma planilha de Excel que criei a algum tempo atrás onde eu tinha três abas principais.:
A capa, ou o primeiro dashboard que me listava por semana todos os aniversariantes do mês. 

<div alin="center">
<img src='https://user-images.githubusercontent.com/36546342/232254975-3209fa19-7fc3-440d-ae3a-46d290302e2c.JPG'/>
</div>

O segundo me trazia o top 10 ou seja os próximos 10 aniversariantes do mês. Nesse mesmo dashboard,
era apresentado outros dados sobre o aniversariante.

<div alin="center">
<img src='https://user-images.githubusercontent.com/36546342/232255011-e9fc1887-34bc-47b5-9eb9-53d2331f7a7c.JPG'/>
</div>

A terceira aba me dava a possibiidade de consultar os aniversariantes pelo mês pesquisado.
Ao listar um determondo mês, me tazia os aniversariantes daque mês com alguns dados sobre esse aniversariante.

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
Apesar de eu amar Excel, eu achei muito interessante fazer uma API evoluindo essa ideia, e foi então que comecei a estudar como transforma-la em uma API.

Primeiramente, fiz ela junto com o front-end no firebase usando firestore, mas como não achei muitos materiais, e ninguém que pudesse me dar umas dicas eu resolvi dar um stop no projeto com firebase.

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

Minha segunda tentativa foi com o Mysql e fui desenvolver a api com suporte de vídeos do Youtube e tutoriais. 
Criei uma API Rest simples, aprendi a usar o sequelise, celebrate, etc... porém, li que com postgres era top, então fiquei curiosa e resolvi criar outra Api Rest mas com postgres, typeorm e lá conheci o repository, ameiiii. 
Com o postgres consegui enviar mensagens para meu WhatsApp, com uma biblioteca chamada venom-bot. 
A Aplicação estava quase pronta e eu estava começando a aprender a consumir minha Api quando conheci o curso MJVSchool_Node, fui selecionada (Obrigada!!!!!), nesse curso magnifico, de como criar uma API Rest com MongoDB e quem sabe conquistar a confiança de vocês para uma futura vaga de jr ou trainee.

Sobre os cursos que fiz, sem querer puxar saco de ninguém, eu nunca tinha feito um curso tão bom, tão bem explicado de forma fácil.
Eu não sei se ficou mais fácil porque eu já havia praticado antes mas com outras ferramentas, mas de qualquer forma, o professor explica bem e eu amei kkkkkk.

Apesar de eu ter feito 3 vezes crud, digo três pois com Firebase é diferente, apensar do banco também não ser relacional, tive que criar as coleções no Firestore mas não criei os cruds.... acho que por isso não consegui evoluir...  
Mas como estava dizendo, meu contato com node é recente, e confesso estar apaixonada e cada vez mais as coisas ficam mais claras e fáceis.

Obrigada Nathan,
Obrigada Ieda,
Obrigada outra moça do RH que me entrevistou. (Me perdoe, esqueci seu nome),
Obrigada Alan,
Obrigada Colegas pela troca de conhecimento. 
Obrigada a todos os envolvidos, Só tenho a agradecer!!


<div alin="center">
<img src='https://user-images.githubusercontent.com/36546342/232255585-ceb4f1ac-79ba-4e70-9a8c-7421e4236201.JPG'/>
</div>


Minha apresentação 
//1:29:51 1:47:56

