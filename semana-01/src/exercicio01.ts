import leia from 'readline-sync'

var nomes: string[] = [];
var idades: number[] = [];

var nomeNova: String;
var idadeNova: number;

var nomeVelha: String;
var idadeVelha: number;


function pedirInfoUsuario(qtd: number){
    for(var i = 0; i < qtd; i++){
        var nome = leia.question("Infome o nome: \n");
        nomes.push(nome);
        var idade = leia.questionInt("Informe a idade: \n");
        idades.push(idade);
    }

}
function pessoaMaisNova(){
    for(var i = 0; i < idades.length; i++){
        if(idadeNova === undefined || idades[i] < idadeNova){
            idadeNova = idades[i];
            nomeNova = nomes[i];
        }
    }
    console.log(`A pessoa mais nova e: ${nomeNova} com ${idadeNova} Anos `)
}

function pessoaMaisVelha(){
    idades.forEach((idade, index) => {
        if(idadeVelha === undefined || idades[index] > idadeVelha){
                     idadeVelha = idade;
                     nomeVelha = nomes[index];
                 }
    })
    console.log(`A pessoa mais velha e: ${nomeVelha} com ${idadeVelha} Anos `)
}
    // for(var i = 0; i < idades.length; i++){
    //     if(idadeVelha === undefined || idades[i] > idadeVelha){
    //         idadeVelha = idades[i];
    //         nomeVelha = nomes[i];
    //     }
    // }

pedirInfoUsuario(4);
pessoaMaisNova();
pessoaMaisVelha();



