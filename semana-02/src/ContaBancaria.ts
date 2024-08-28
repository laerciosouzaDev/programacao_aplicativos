import Titular from "./Titular";

export default class ContaBancaria{

    constructor(titular: Titular, chavepix: string){
        this.titular = titular;
        this.chavePix = chavepix;
        this.dataCriacao = new Date();
        this.saldo = 0;
        this.numero = String(Math.floor(Math.random() * 89999) + 10000);
    }

    numero!: string;
    saldo: number;
    titular: Titular;
    chavePix: string;
    dataCriacao: Date;

    mostrarDadosConta(){
        console.log(`Nome Titular: ${this.titular.nome }`)
        console.log(`CPF: ${this.titular.cpf }` )
        console.log(`Data nascimento: ${this.titular.dataNasc }`)
        console.log(`numero telefone: ${this.titular.telefone }`)
        console.log(`endereco: ${this.titular.endereco }`)
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