const xml = require('object-to-xml');

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

const toXML = xml(cadastro);

console.log(toXML);