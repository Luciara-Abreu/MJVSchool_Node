const Soma = () => {
  const n1 = 2;
  const n2 = 2;

  const result = n1 + n2;
  return result;
};

const soma = Soma();

const execute1 = () => {
  const printLine: string = "Meu primeiro arquivo typescript1 no node";

  return console.log(printLine, soma);
};

execute1();
//--------------------------Ou-----------------------------------
const informacao: string = "Meu primeiro arquivo typescript2 no node";

const execute2 = (informacao: string) => {
  const printLine = informacao;
  return console.log(printLine, soma);
};
execute2(informacao);
