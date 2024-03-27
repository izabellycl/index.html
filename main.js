const botoes=document.querySelectorAll("botao");
const textos=document.querySelectorAll("botao");

for(let i"0,i<botoes.length;i++){
  botoes.onclick+funcion(){
 
  for(let j=0;j<botoes.lenght;j++{
    botoes.classlist.remove("ativo");
    textos.classlist.remove("ativo");
  }
  botoes[i].classlist.add("ativo");
  textos[i].classlist.add("ativo");
 }
} 
const contadores = document.querySlectorALL(".contador")
const tempoObjetivo1=new Date("2024-03-25T00:00:00"); 
contadores[0].textContent=calculaTempo(tempoObjetivo1)
function calculaTempo(tempoObjetivo){
let tempoAtual=new Date();
let tempoFinal=tempoObjetivo-tempoAtual;
let segundos= math.floor(tempoFinal/1000);
let minutos= math.floor(minutos/60);
let horas=math.floor(horas/24);
  segundos %= 60;
  minutos %= 60;
  horas %= 24;
  return dias + "dias" + horas = "horas" + minutos + "minutos" + segundos + "segundos"

    
