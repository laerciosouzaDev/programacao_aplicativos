import leia from 'readline-sync'

type Categoria = {
    nome: string,
    informatica: string,
    bolsas: string
    eletro: string
}


var nome = leia.question("informe o nome da categoria: ")
var descricao = leia.question("descrição: ")


var categoria: Categoria ={
    nome: nome,
    
    

}

