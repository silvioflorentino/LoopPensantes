let decisao = prompt("Vc deseja cadastrar as notas dos aluno? \n 1-Sim \n 2-Não");
let matricula = 0;
let nota1 = 0;
let nota2 = 0;
let nota3 =0;
let frequencia = 0;
let media =0;
let sitFreq = 0;
let resultado = 0;
let tAlunoRepFalta = 0;
let tAlunoRepNota = 0;
let aluno = "";
let tAlunoAprovado =0;
let tAlunosReprovados = 0;
let tMediaTurma = 0;
let tAlunos = 0;
let mediaMaior = 0;
let mediaMenor = 10;
let situacaoAluno = '';

while (decisao =="1" ) {
matricula = prompt("Digite a matricula do aluno.");
nota1 = Number(prompt("Digite a nota do aluno."));
nota2 = Number(prompt("Digite a nota do aluno."));
nota3 = Number(prompt("Digite a nota do aluno."));
frequencia = Number(prompt("Digite a frequência do aluno.(32 máximo)"));
media = (nota1 + nota2 + nota3)/3;

if(frequencia >= 25){
    sitFreq = 1;
}else{
    sitFreq = 2;
    tAlunoRepFalta++;
}

if (media >=7) {
    sitMedia = 1;
} else {
    sitMedia = 2;
    tAlunoRepNota++;
}
if(sitFreq == 1 && sitMedia == 1){
    situacaoAluno =  "Aprovado";
    tAlunoAprovado++;
}else{
    situacaoAluno = "Reprovado";
    tAlunosReprovados++;
}

tAlunos++;
tMediaTurma += media;
tMediaTurma = tMediaTurma /  tAlunos;

if (media < mediaMenor) {
    mediaMenor = media;
}

if (media > mediaMaior) {
    mediaMaior = media;
}

aluno += "</br> Matricula: " + matricula + " - Média: "+ media + " - Situação: " + situacaoAluno;

decisao = prompt("Vc deseja cadastrar as notas dos aluno? \n 1-Sim \n 2-Não");
}

document.getElementById("alunos").innerHTML = aluno;
document.getElementById("mediaTurma").innerHTML = tMediaTurma;
document.getElementById("maiorMediaTurma").innerHTML = mediaMaior;
document.getElementById("menorMediaTurma").innerHTML = mediaMenor;
document.getElementById("totalAprovados").innerHTML = tAlunoAprovado;
document.getElementById("totalReprovadosFalta").innerHTML = tAlunoRepFalta;
document.getElementById("totalReprovadosNota").innerHTML = tAlunoRepNota;