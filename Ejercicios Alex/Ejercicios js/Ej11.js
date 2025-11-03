function primitiveOrObject(param) {
    if (param == null) return "primitive - null"
    else if (typeof param == Object) return "Object"
    else return `primitive - ${typeof param}`
}

console.log(primitiveOrObject({ nombre: "Alex", apellido: "Canora" }))
console.log(primitiveOrObject(1))
console.log(primitiveOrObject("hola"))
console.log(primitiveOrObject(null))
console.log(primitiveOrObject(false))
console.log(primitiveOrObject(undefined))