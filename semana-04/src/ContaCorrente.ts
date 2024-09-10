import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";

export default class contaCorrente extends ContaBancaria{
        private limite: number;

        constructor(titular: Titular, chavePix: string){
            super(titular, chavePix);
            this.limite = 1000;            
        } 
        
        public getLimite(): Number{
            return this.limite
        }
        //override metodo de subscrever um metodo ja existente
    public override sacar(valor: number): void {
        var valorDisponivel = this.getSaldo() + this.limite;
        if(valor <= 0 || valor > valorDisponivel){
            console.log("Saldo/limite insuficiente para saque.");
            return
        }

        if(valor > this.getSaldo()){
            var aux = valor - this.getSaldo();
            this.limite = this.limite - aux;
            this.setSaldo(0);
            console.log(`saque de R$ ${valor} Realizado com sucesso.`)
            console.log(`seu saldo e ${this.getSaldo()}!!`)
            console.log(`seu limite e ${this.limite}`)
            return
        }

        var saldo = this.getSaldo();
        this.setSaldo(saldo - valor);
        console.log(`saque de R$ ${valor} Realizado com sucesso.`)
        console.log(`seu saldo e ${this.getSaldo()}!!`)
        console.log(`seu limite e ${this.limite}`)
    }

}
