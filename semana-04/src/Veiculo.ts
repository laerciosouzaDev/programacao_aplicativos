



export default class Veiculo{

    constructor(marca: String, modelo: String, ano: Number, valor: Number, ){

        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

        
    }
    private marca: String;
    private modelo: String;
    private ano: Number;
    private valor: Number;
    private disponivel: Boolean;
    private historicoTransferencia: String;
}



