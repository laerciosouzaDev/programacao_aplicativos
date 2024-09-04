import leia from "readline-sync"
import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";
import contaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";

var nome = leia.question("Digite o nome do titular:");
var cpf = leia.question("Digite o cpf: ");
var chavePix = leia.question("digite a chave pix: ")


var t1 = new Titular(nome, cpf);
var c1 = new ContaBancaria(t1, chavePix);
console.log("Conta normal")
c1.depositar(100);
c1.sacar(200);
//get retorno de atributos

// set setar uma nova informação para o atributo
console.log("Conta corrente")
var cc = new contaCorrente(t1, chavePix);
cc.depositar(100);
cc.sacar(200);

var cp = new ContaPoupanca(t1, chavePix);
console.log("Conta poupança");
cp.depositar(200);
cp.sacar(200)
cp.getSaldo
