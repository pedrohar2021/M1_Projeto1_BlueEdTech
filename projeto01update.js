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

listaPerguntas = [
    prompt('Mario BROSS, você foi ajudar na missão? [s/n]: ').toUpperCase(),
    prompt('Mario BROSS, conseguiram concluir a missão? [s/n]: ').toUpperCase(),
    prompt('Mario BROSS, você se despediu de Luigi? [s/n]: ').toUpperCase(),
    prompt('Mario BROSS, vamos voltar pra casa? [s/n]: ').toUpperCase(),
    prompt('Mario BROSS, você chegou em casa? [s/n]: ').toUpperCase()
]
    while (listaPerguntas[i] != 'S' && listaPerguntas[i] != 'N'){
        console.log('Resposta Invalida.');
   
}



