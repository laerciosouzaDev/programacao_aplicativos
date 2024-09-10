import leia from 'readline-sync'
import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";
import contaCorrente from './ContaCorrente';
import ContaPoupanca from './ContaPoupanca';

export default class Banco{
    private contas: ContaBancaria[] = [];

    public transferir(){
        // var i = this.contas.findIndex(conta => conta.getNumero()=== numeroOrigem);
        //var indexDestino;
        // for(var i = 0;i < this.contas.length; i++){
        //     if(numeroConta === this.contas[i].getNumero()){
        //         indexDestino = i;
        //     }
        // }

        // Buscar a conta de origem da transferencia
        var numeroContaOrigem = leia.question("Digite o numero da sua conta: ")

        var indexOrigem;
        for(var i = 0; i < this.contas.length; i++){
            if(this.contas[i].getNumero() === numeroContaOrigem){
                indexOrigem = i;
            }
        }

        if(indexOrigem === undefined){
            console.log("A conta que voce digitou nao existe ")
            return;
        }
        // buscar conta de destino da transferencia

        var numeroContaDestino = leia.question("Informe a conta de destino: ")
        var indexDestino = this.contas.findIndex(conta => conta.getNumero()=== numeroContaDestino);
        if(indexDestino === -1){
            console.log("A conta de destino nao existe!");
            return;
        }
        

        //pedir valor da transferencia

        var valor = leia.questionFloat("Digite o valor para transferencia: ")

        if(valor > this.contas[indexOrigem].getSaldo()){
            console.log("Voce não tem saldo suficiente! ")
            return;
        }

        this.contas[indexOrigem].sacar(valor);
        this.contas[indexDestino].depositar(valor);
        console.log("Transferencia feita com sucesso!!")
        // verificar se tem saldo
        //sacar conta de origem
        //depositar conta de destino
    }

    public save(conta: ContaBancaria){
        this.contas.push(conta)
        console.log(`conta com ${conta.getNumero()} foi criada com sucesso!`)
    }

    public addAccount(){
        console.log("-----------criando conta--------------------")
        var nome = leia.question("digite seu nome: ")
        var cpf = leia.question("digite seu cpf: ")
        var chavePix = leia.question("digite a chave-pix: ")
        var tipoConta = leia.keyInSelect(["Corrente ", "Poupança"]) + 1;

        var titular = new Titular(nome, cpf)

        var conta: ContaBancaria;

        if(tipoConta === 1){
            conta = new contaCorrente(titular, chavePix);
        }else{
            conta = new ContaPoupanca(titular, chavePix);
        }

        this.save(conta);
    }

    public mostrarContas(){
        console.table(this.contas);
    }

    public removeConta(){
        console.log("----------Deletar Conta ----------")

        var numeroConta = leia.question("digite a conta que quer deletar")
        var contaOrigem
        for(var i = 0; i < this.contas.length; i++){
            if( numeroConta === this.contas[i].getNumero()){
                this.contas.splice(i, 1);
                console.log(`conta com numero ${numeroConta} excluida com sucesso!!`)
                //logica de deletar
                return;
            }
        }
        console.log(`nao foi encontrado nenhuma conta com o numero ${numeroConta}`)
        //encontrar conta(numero)
        // removo do array

    }
    // recurso javascript
    // var contaExiste = this.contas.find(conta => conta.getnumero() === numeroConta )
    // if(contaExitente){

    //}
}