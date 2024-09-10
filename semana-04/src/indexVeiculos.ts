import leia from "readline-sync"
import Veiculo from "./Veiculo"

var marca = leia.question("Digite qual veiculo deseja: ")

var modelo = leia.question("o modelo do carro: ")

var ano = leia.question("ano do carro: ")

var v1 = new Veiculo(marca, modelo, ano)

var c1 = new Carro(v1, qtdPortas)