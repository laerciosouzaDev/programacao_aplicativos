import leia from 'readline-sync'
import Veiculo from './Veiculo'

import default class Carro extends Veiculo {
    constructor(marca: marca , modelo: modelo, ano: ano ) {
        super (marca,modelo,ano)
        this.qtdPortas = 4;
        
    }
    private qtdPortas: Number;
    
    public getqtdPortas() : String{
        return this.qtdPortas;
}

    }
    