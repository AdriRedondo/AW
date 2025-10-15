function createObjectWithValues(nombres, valores) {
    let o = {}
    for (let i = 0; i < nombres.length; i++) {
        o[nombres[i]] = valores[i]
    }
    console.log(o)
}

let array1 = ["nombre", "apellido1", "apellido2"]
let array2 = ["Alejandro", "Canora", "Fernández"]
createObjectWithValues(array1, array2)