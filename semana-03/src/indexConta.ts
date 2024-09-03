import leia from "readline-sync"
import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";
import contaCorrente from "./ContaCorrente";

var nome = leia.question("Digite o nome do titular:");
var cpf = leia.question("Digite o cpf: ");
var chavePix = leia.question("digite a chave pix: ")
var dataNasc = leia.question("digite o nascimento: ")
var endereco = leia.question("digite o endereco: ")
var telefone = leia.question("digite o telefone: ")

var t1 = new Titular(nome, cpf, dataNasc,endereco,telefone);
var c1 = new ContaBancaria(t1, chavePix);
c1.getNumero();

var cc = new contaCorrente(t1, chavePix);
cc.getLimite();

c1.consultaSaldo();
c1.depositar(100);
c1.sacar(40);

console.log("--------------------------------------")

c1.mostrarDadosConta();