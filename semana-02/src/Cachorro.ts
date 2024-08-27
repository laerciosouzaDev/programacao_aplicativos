import Dono from "./Dono";

export default class Cachorro{
    //função dentro da classe(chamada metodo)
    constructor(nome: string, raca: string, cor: string, dono: Dono){
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.dono = dono;
    }

    nome: string;
    raca: string;
    cor: string;
    dono: Dono
    //metodo dentro de uma classe(Outra função dentro de uma classe)
    exibirCachorro(){
        console.log(`o cachorro ${this.nome} e um ${this.raca} de cor ${this.cor}`);
    }
    exibirDono(){
        console.log(`dono do ${this.nome} e ${this.dono.nome} seu telefone e ${this.dono.telefone}`)
    }
}