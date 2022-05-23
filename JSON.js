const obj = {
    teste: {
        name: "teste",
        type: "teste"
    }
}

const toJSON = JSON.stringify(obj);

console.log("objeto", obj);
console.log("JSON", toJSON);

const toObj = JSON.parse(toJSON);

console.log("obj", toObj);