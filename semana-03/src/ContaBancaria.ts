import Titular from "./Titular";
import contaCorrente from "./ContaCorrente";
//classe conta bancaria
export default class ContaBancaria{
    //metodo construtor é executado sempre que chamado passar as informações em (new atributo)
    constructor(titular: Titular, chavepix: string){
        //preencher os valores das seguintes informações
        // o this é para se referir ao atributo da classe
        this.titular = titular;
        this.chavePix = chavepix;
        this.dataCriacao = new Date();
        this.saldo = 0;
        this.numero = String(Math.floor(Math.random() * 89999) + 10000);
    }
    //atributos
    // private deixa o atributo particular acessivel apenas na classe em questão
    // protected acessivel somente no mesmo arquivo
    private numero: string;
    private saldo: number;
    private titular: Titular;
    private chavePix: string;
    private dataCriacao: Date;

    public getNumero():string{
        return this.numero
    }

    public setSaldo(): number{
        return this.saldo
    }

    public getSaldo(): number{
        return this.saldo
    }

    public setNumero(numero:string): void{
        this.numero = numero;
    }

    //metodos ou (funçoes)
    mostrarDadosConta(){
        console.log(`Nome Titular: ${this.titular.getNome }`)
        console.log(`CPF: ${this.titular.getCpf }` )
        console.log(`Data nascimento: ${this.titular.getDataNasc }`)
        console.log(`numero telefone: ${this.titular.getTelefone }`)
        console.log(`endereco: ${this.titular.getEndereco }`)
        console.log(`numero da conta: ${this.numero }`)
        console.log(`data da criacao: ${this.dataCriacao }`)
        console.log(`Saldo da conta: ${this.saldo }`)
        console.log(`Chave-pix: ${this.chavePix }`)
    }

    depositar(valor:number) {
        if(valor <= 0){
            console.log("Valor do deposito é invalido.")
        }
        else{this.saldo += valor; 
            //this.saldo = this.saldo + valor (+=)
        console.log(`deposito de R$ ${valor} Realizado com sucesso. O saldo atual e; ${this.saldo}`)
        }
        
    }

    sacar(valor: number) {
        if(valor > this.saldo || valor <= 0){
            console.log("Saldo insuficiente para esta operacao.")
            return;
        }
        this.saldo -= valor;
        console.log(`saque de R$ ${valor} Realizado com sucesso. O saldo atual e e ${this.saldo}`)
    }

    consultaSaldo(){
        console.log(`Seu saldo é R$ ${this.saldo}`)
    }

    consultarSaldo(){
        console.log(`Seu saldo e R$: ${this.saldo}`)
    }
}