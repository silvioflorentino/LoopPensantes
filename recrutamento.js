let candidato = Number(prompt("Deseja cadastrar um novo Candidato?  \n 1-Sim \n2-Não"));
let idadeMedia = 0;
let qtdCandidato = 0;
let candidatoAprovado = "";
let totalIdade = 0;
let totalCandid = 0;

while (candidato == 1) {
    let numCand = Number(prompt("Digite o número do candidato(a)."));
    let idadeCand = Number(prompt("Digite a idade do candidato(a)."));
    let sexoCand = prompt("Digite o sexo do candidato(a).\n F-Feminino \n M-Masculino");
    let expCand = Number(prompt(" O candidato(a) possui experiência profissional. \n 1-Sim \n2-Não"));

    totalIdade += idadeCand; 
    totalCandid++;

    idadeMedia = totalIdade / totalCandid;

    if(expCand == 1 && idadeCand >= 18){
        candidatoAprovado += numCand + " - " + idadeCand + " - " + sexoCand +"</br>";
    }

    candidato = Number(prompt("Deseja cadastrar um novo Candidato?  \n 1-Sim \n2-Não"));

}

document.getElementById("idade-media").innerHTML = idadeMedia;
document.getElementById("qtd-candi").innerHTML = totalCandid;
document.getElementById("cand-apv").innerHTML = candidatoAprovado;




