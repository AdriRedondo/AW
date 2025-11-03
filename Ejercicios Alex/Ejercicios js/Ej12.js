o = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: "34"
}


let p = Object.keys(o)
console.log(p.length)

for (let x of p) {
    console.log(`${x}: ${o[x]}`)
}

