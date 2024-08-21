
export type pessoa = {
    nome: string,
    cpf: string,
    dataNascimento: string,
    contatos: {
        telefones: string[],
        emails: string[]
    },
}

export function cadastroPessoas(parametros:pessoa){
    console.log("pessoas cadastradas no banco de dados")
}