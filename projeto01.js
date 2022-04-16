console.clear();
const prompt = require('prompt-sync')();
for (game =  0; game <1; game++){

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
  console.log(`Nesse GAME, você é o personagem "Mario".\nSeu objetivo é ajudar o Liugi e voltar pra casa.
Utilize respostas [S] ou [N] para as perguntas realizadas.\nA cada pergunta respondida você acumula pontos,
No final veremos se seu objetivo foi concluido.`)
  console.log();
  console.log('PRESS ENTER START GAME')
  prompt()

  // ----------------------------------------------------------------------- //
  let perguntas = []
  let perguntaUm = '<<- FASE 01 ->> Mario BROSS, você foi ajudar na missão? [s/n]: '
  let perguntaDois = '<<- FASE 02 ->> Mario BROSS, conseguiram concluir a missão? [s/n]: '
  let perguntaTres = '<<- FASE 03 ->> Mario BROSS, você se despediu de Luigi? [s/n]: '
  let perguntaQuatro = '<<- FASE 04 ->> Mario BROSS, vamos voltar pra casa? [s/n]: '
  let perguntaCinco = '<<- FASE 05 ->> Mario BROSS, você chegou em casa? [s/n]: '
  perguntas.push(perguntaUm, perguntaDois, perguntaTres, perguntaQuatro, perguntaCinco)

  let respostas = []
  let respostaSim = 0
  for (i = 0; i < perguntas.length; i++) {
    console.log();
      while (true) {
        respostas[i] = prompt(perguntas[i]).toUpperCase();
        if (respostas[i] !== "S" && respostas[i] !== "N"){
          console.log("Resposta inválida! responda [S] ou [N].");
          console.log();
        }else if (respostas[i] == 'S'){
          console.log('A resposta foi: SIM, você ganhou 1 ponto.');
          respostaSim++
          break
        }else if (respostas[i] == 'N'){
          console.log('A resposta foi: NÃO, você ganhou 0 pontos.');
          break
        }
    }
  }
  console.log();
  console.log('<<<------------------ FIM DO JOGO! ------------------>>> ');
  console.log()

  if (respostaSim == 0){
  console.log('RESULT: [0]PONTOS \n\nVocê falhou miseravelmente.');
  }else if (respostaSim == 1 || respostaSim == 2){
    console.log('RESULT: [1 ou 2]PONTOS \n\nVocê falha, mas ainda consegue fazer algo.');
  }else if (respostaSim == 3){
    console.log('RESULT: [3]PONTOS \n\nVocê chega perto de conseguir alcançar seu \nobjetivo, mas acaba falhando por pouco.');
  }else if (respostaSim == 4){
    console.log('RESULT: [4]PONTOS \n\nDepois de muito esforço você conquista seu \nobjetivo, embora não de maneira perfeita.');
  }else if (respostaSim == 5){
    console.log('RESULT: [5]PONTOS \n\nVocê triunfa de maneira inquestionável.');
  }
  console.log();
  console.log('----------------------------------------------------');

  let jogarNovamente = prompt("Gostaria de jogar novamente? [S/N] ").toUpperCase();

  while(jogarNovamente != "N" && jogarNovamente != "S"){
  console.log("Resposta inválida! responda [S] ou [N].");
  jogarNovamente = prompt("Gostaria de jogar novamente? [S/N] ").toUpperCase();
  }    
  if(jogarNovamente == "S"){
      game = -1;
  }
}