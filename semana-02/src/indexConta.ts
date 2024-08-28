import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";

var t1 = new Titular("Laercio", "000.000.000.00","23/09/1988","9999-9999", "Rua nova")
var c1 = new ContaBancaria(t1, "jhsagdhgashdfhf-hjsafgsg");


c1.consultaSaldo();
c1.depositar(100);
c1.sacar(40);

console.log("--------------------------------------")

c1.mostrarDadosConta();