const o2x = require('object-to-xml');

const obj = {
    teste: {
        name: "teste",
        type: "teste"
    },
    outroTeste: {
        name: "teste2",
        type: "outro"
    }
}

console.log("objeto", obj);

console.log(o2x(obj));