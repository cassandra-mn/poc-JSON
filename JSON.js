const cadastro = {
    pessoa: {
        dados: {
            nome: "fulano",
            idade: 22,
            email: "tal@gmail.com"
        },
        endereco: {
            rua: "rua tal",
            bairro: "centro",
            cidade: "cidade"
        }
    }
}

const toJSON = JSON.stringify(cadastro);

console.log("JSON", toJSON);