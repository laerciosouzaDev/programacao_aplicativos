export default class Titular{

    constructor(nome: string, cpf: string, dataNasc: string, telefone: string, endereco: string){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.telefone = telefone;
        this.endereco = endereco;
    }


    nome!: string;
    cpf!: string;
    dataNasc!: string;
    telefone!: string;
    endereco!: string;
}