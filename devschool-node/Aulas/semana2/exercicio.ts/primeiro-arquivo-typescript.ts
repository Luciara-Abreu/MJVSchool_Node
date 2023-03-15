const execute1 = () => {
  const printLine: string = "Meu primeiro arquivo typescript1";
  return console.log(printLine);
};

execute1();
//--------------------------Ou-----------------------------------
const informacao: string = "Meu primeiro arquivo typescript2";

const execute2 = (informacao: string) => {
  const printLine = informacao;
  return console.log(printLine);
};

execute2(informacao);
