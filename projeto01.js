console.clear();
const prompt = require('prompt-sync')();

let respostaSim = 0

console.log('----------------------------------------');
console.log('<<<- PROJETO 1 - A JORNADA DO HERÓI ->>>');
console.log('----------------------------------------');
console.log(' SUPER MARIO BROSS - DE VOLTA PRA CASA');
console.log('----------------------------------------');
console.log(`    O SUPER MARIO DEVE AJUDAR O LUIGI
  EM UMA MISSÃO, E DEPOIS DE CONCLUIR... 
    VOLTAR PRA CASA, QUE TAL AJUDA-LO?`);
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
console.log();
console.log('VAMOS LÁ...');
console.log();
console.log(`Nesse GAME, você é o personagem "Mario".
Seu objetivo é ajudar o Liugi e voltar pra casa.
Utilize respostas [S] ou [N] para as perguntas realizadas.
A cada pergunta respondida você acumula pontos,
No final veremos se seu objetivo foi concluido.`)
console.log();
console.log('PRESS ENTER START GAME')
prompt()
// ----------------------------------------------------------------------- //

console.log('<<- FASE 01 ->>');
let perguntaUm = prompt('Mario BROSS, você foi ajudar na missão? [s/n]: ').toUpperCase()
while (perguntaUm != 'S' && perguntaUm != 'N'){
  console.log('Resposta Invalida.');
  perguntaUm = prompt('Mario BROSS, você foi ajudar na missão? [s/n]: ').toUpperCase()
}
if (perguntaUm == 'S'){
  console.log(`A resposta foi: ${perguntaUm}IM, você ganhou 1 ponto.`);
  respostaSim ++
}else{
  console.log(`A resposta foi: ${perguntaUm}ÃO, você ganhou 0 pontos.`);
}
console.log();

// ----------------------------------------------------------------------- //
console.log('<<- FASE 02 ->>');
let perguntaDois = prompt('Mario BROSS, conseguiram concluir a missão? [s/n]: ').toUpperCase()
while (perguntaDois != 'S' && perguntaDois != 'N'){
  console.log('Resposta Invalida.');
  perguntaDois = prompt('Mario BROSS, conseguiram concluir a missão? [s/n]: ').toUpperCase()
}
if (perguntaDois == 'S'){
  console.log(`A resposta foi: ${perguntaDois}IM, você ganhou 1 ponto.`);
  respostaSim ++
}else{
  console.log(`A resposta foi: ${perguntaDois}ÃO, você ganhou 0 pontos.`);
}
console.log();

// ----------------------------------------------------------------------- //

console.log('<<- FASE 03 ->>');
let perguntaTres = prompt('Mario BROSS, você se despediu de Luigi? [s/n]: ').toUpperCase()
while (perguntaTres != 'S' && perguntaTres != 'N'){
  console.log('Resposta Invalida.');
  perguntaTres = prompt('Mario BROSS, você se despediu de Luigi? [s/n]: ').toUpperCase()
}
if (perguntaTres == 'S'){
  console.log(`A resposta foi: ${perguntaTres}IM, você ganhou 1 ponto.`);
  respostaSim ++
}else{
  console.log(`A resposta foi: ${perguntaTres}ÃO, você ganhou 0 pontos.`);
}
console.log();

// ----------------------------------------------------------------------- //

console.log('<<- FASE 04 ->>');
let perguntaQuatro = prompt('Mario BROSS, vamos voltar pra casa? [s/n]: ').toUpperCase()
while (perguntaQuatro != 'S' && perguntaQuatro != 'N'){
  console.log('Resposta Invalida.');
  perguntaQuatro = prompt('Mario BROSS, vamos voltar pra casa? [s/n]: ').toUpperCase()
}
if (perguntaQuatro == 'S'){
  console.log(`A resposta foi: ${perguntaQuatro}IM, você ganhou 1 ponto.`);
  respostaSim ++
}else{
  console.log(`A resposta foi: ${perguntaQuatro}ÃO, você ganhou 0 pontos.`);
}
console.log();

// ----------------------------------------------------------------------- //

console.log('<<- FASE 05 ->>');
let perguntaCinco = prompt('Mario BROSS, você chegou em casa? [s/n]: ').toUpperCase()
while (perguntaCinco != 'S' && perguntaCinco != 'N'){
  console.log('Resposta Invalida.');
  perguntaCinco = prompt('Mario BROSS, você chegou em casa? [s/n]: ').toUpperCase()
}
if (perguntaCinco == 'S'){
  console.log(`A resposta foi: ${perguntaCinco}IM, você ganhou 1 ponto.`);
  respostaSim ++
}else{
  console.log(`A resposta foi: ${perguntaCinco}ÃO, você ganhou 0 pontos.`);
}
console.log();

// ----------------------------------------------------------------------- //

console.log('<<<- FIM DO JOGO! ->>> ');
console.log();

if (respostaSim == 0){
console.log('      [0]PONTOS \n\nVocê falhou miseravelmente.');
}else if (respostaSim == 1 || respostaSim == 2){
  console.log('      [1 ou 2]PONTOS \n\nVocê falha, mas ainda consegue fazer algo.');
}/*else if (respostaSim == 2 ){
  console.log('      [2]PONTOS \n\nVocê falha, mas ainda consegue fazer algo.');
}*/else if (respostaSim == 3){
  console.log('      [3]PONTOS \n\nVocê chega perto de conseguir alcançar seu objetivo, \nmas acaba falhando por pouco.');
}else if (respostaSim == 4){
  console.log('      [4]PONTOS \n\nDepois de muito esforço você conquista seu objetivo, \nembora não de maneira perfeita.');
}else if (respostaSim == 5){
  console.log('      [5]PONTOS \n\nVocê triunfa de maneira inquestionável.');
}

console.log('----------------------------------------');




