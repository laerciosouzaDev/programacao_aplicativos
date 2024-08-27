import Cachorro from "./Cachorro";

export default class Dono{
    constructor(nome: string, telefone: string, cachorro: Cachorro){
        this.nome = nome;
        this.telefone = telefone;
        this.cachorro = cachorro;
    }
    nome: string;
    telefone: string;
    cachorro: Cachorro;

    
}