/*
function calculartamanhototalcasaemm2(
  sala,
  cozinha,
  banheiro,
  quarto
) {
  const tamanhototal =sala + quarto + cozinha + banheiro;
  console.log(`O tamanho da casa é de ${tamanhototal}m²`);
  return tamanhototal
  
}calculartamanhototalcasaemm2(
  casa.sala,
  casa.cozinha,
  casa.banheiro,
  casa.quarto)*/
 

 let casa = {
cor: 'white',
sala: 15,
cozinha: 10,
banheiro: 8,
quarto: 20,
 calculartamanhototalcasaemm2: function () {
  const tamanhototal = this.sala + this.cozinha + this.banheiro + this.quarto;
  console.log(`O tamanho da casa é de ${tamanhototal}m²`);
    return tamanhototal}
};
casa.calculartamanhototalcasaemm2();


let a = 2.000000001;
console.log(a);
console.log(a.toFixed(3));
console.log(a.toString());

let b = 'internacional é legal' ;
console.log(b.concat(' mas nem todo lugar'));
console.log(b.split('é'));
console.log(b.charAt(2));
console.log(b.split(' '));
console.log(b.length);


let c = '10110';
console.log(Number.parseInt(c));
console.log(Number.parseInt());
console.log(Number.isNaN(Number.parseFloat(b)));

const listanotas = [
  {nome: 'daniel', nota: 5},
  {nome: 'pedro', nota: 15},
  {nome: 'lucas', nota: 12},
  {nome: 'fabricio', nota: 16},
  {nome: 'izabella', nota: 18},
  {nome: 'nathalia', nota: 20},
  {nome: 'amanda', nota: 0},
  {nome: 'joão', nota: 20},
  {nome: 'sergio', nota: 12},
  {nome: 'douglas', nota: 12}

]
const alunosaprovados = listanotas.filter(function (aluno) {
  return aluno.nota >= 15;
  
})
console.log(alunosaprovados);

const alunoreprovado = listanotas.filter(function (aluno){
  return aluno.nota === 0;
})
console.log(alunoreprovado);

const nomealunos = alunosaprovados.map(function (aluno){
  return aluno.nome;
})
console.log(nomealunos);




