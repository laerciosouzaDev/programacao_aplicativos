export default class Titular{
    //ao criar uma classe ela se torna um TIPO de dado
    constructor(nome: string, cpf: string, dataNasc: string, telefone: string, endereco: string){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.telefone = telefone;
        this.endereco = endereco;
    }


    private nome: string;
    private cpf: string;
    private dataNasc: string;
    private telefone: string;
    private endereco: string;

    public getNome() :string{
        return this.nome;
}

public getCpf(): string{
    return this.cpf;
}

public getDataNasc(): string{
    return this.cpf;
}
public getTelefone(): string{
    return this.cpf;
}

public getEndereco(): string{
    return this.cpf;
}

}

