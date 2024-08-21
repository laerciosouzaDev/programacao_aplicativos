import leia from 'readline-sync'
import { cadastroCelular,celular} from './repository/celularRepository'
import { cadastroPessoas,pessoa} from './repository/pessoaRepository'




var cor = leia.question("digite a cor do celular: ")
var marca = leia.question("digite a marca : ")
var tamanho = leia.questionFloat("digite o tamanho de tela: ")

var celular: celular ={
    cor: cor,
    marca: marca,
    tamanhoTela:tamanho
}


let nome = leia.question("digite o nome do cliente: ")
let cpf = leia.question("digite o CPF: ")
let dtNascimento= leia.question("data nasc: ")
let telefone = leia.question("digite o telefone: ")
let email = leia.question("digite o email: ")

const pessoa: pessoa = {
    nome: nome,
    cpf: cpf,
    dataNascimento: dtNascimento,
    contatos: {
        telefones: [telefone],
        emails: [email]
    }
}

cadastroCelular(celular);
cadastroPessoas(pessoa);

// let obj1: celular = {
//     tamanhoTela: 7.6,
//     marca: "samsung",
//     cor: "Rosa",
// }

// let obj2: celular = {
//     tamanhoTela: 5.6,
//     marca: "xiaomi",
//     cor:"preto"
// }