import leia from 'readline-sync'
import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";
import contaCorrente from './ContaCorrente';
import ContaPoupanca from './ContaPoupanca';

export default class Banco{
    private contas: ContaBancaria[] = [];

    public transferir(){
        
        // Buscar a conta de oerigem da transferencia
        //pedir valor da transferencia
        // verificar se tem saldo
        // buscar conta de destino da transferencia

        //sacar conta de origem
        //depositar conta de destino
    }

    public save(conta: ContaBancaria){
        this.contas.push(conta)
        console.log(`conta com ${conta.getNumero()} foi criada com sucesso!`)
    }

    public addAccount(){
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