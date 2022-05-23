const yaml = require('js-yaml');

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

const toYAML = yaml.dump(cadastro);

console.log(toYAML);