import leia from 'readline-sync'

type Categoria = {
    nome: string,
    informatica: string,
    bolsas: string
    eletro: string
}


var nome = leia.question("informe o nome da categoria: ")
var info = leia.question("escolha o pc: ")
var bolsa = leia.question("escolha o bolsa: ")
var eletro = leia.question("escolha o eletro: ")

var categoria: Categoria ={
    nome: nome,
    informatica: info,
    bolsas: bolsa,
    eletro: eletro

}

