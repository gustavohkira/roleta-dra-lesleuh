const temas = [
{
titulo:"❤️ Mito ou Verdade",
texto:"Nem toda cólica é normal. Se a dor for intensa ou limitar suas atividades, procure avaliação médica."
},

{
titulo:"🤰 Gestação",
texto:"O pré-natal deve começar assim que a gravidez for confirmada."
},

{
titulo:"🌸 Saúde Íntima",
texto:"Evite automedicação. Alterações como corrimento, dor ou coceira devem ser avaliadas por um profissional."
},

{
titulo:"🩺 Preventivo",
texto:"O exame preventivo é uma importante ferramenta para detectar alterações precocemente."
},

{
titulo:"👶 Planejamento Familiar",
texto:"Existem diferentes métodos contraceptivos. O ideal é escolher o mais adequado junto ao ginecologista."
},

{
titulo:"💡 Curiosidade",
texto:"Muitas doenças ginecológicas podem evoluir sem sintomas. Consultas periódicas são importantes."
},

{
titulo:"👩‍⚕️ Dica da Dra. Lesley",
texto:"Cuidar da saúde hoje é investir na sua qualidade de vida amanhã."
},

{
titulo:"🎁 Surpresa",
texto:"Parabéns! Continue acompanhando nossos conteúdos e cuide sempre da sua saúde."
}
];

const roda = document.getElementById("wheel");
const botao = document.getElementById("center");

let girando = false;
let angulo = 0;

botao.addEventListener("click", ()=>{

if(girando) return;

girando = true;

const sorteio = Math.floor(Math.random()*temas.length);

angulo += 1800 + (360/8)*sorteio;

roda.style.transition="transform 5s ease-out";
roda.style.transform=rotate(${angulo}deg);

setTimeout(()=>{

alert(
temas[sorteio].titulo +
"\n\n" +
temas[sorteio].texto
);

girando=false;

},5000);

});
