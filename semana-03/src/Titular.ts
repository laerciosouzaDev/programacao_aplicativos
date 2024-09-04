export default class Titular{
    //ao criar uma classe ela se torna um TIPO de dado
    constructor(nome: string, cpf: string){
        this.nome = nome;
        this.cpf = cpf;
        
    }


    private nome: string;
    private cpf: string;

    public getNome() :string{
        return this.nome;
}

public getCpf(): string{
    return this.cpf;
}


}

