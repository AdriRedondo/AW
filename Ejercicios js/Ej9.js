function func(param) {
    console.log(typeof param)
}
let x
let o = {
    nombre: "alex",
    apellidos: "canora fernández"
}
func("hola")
func(12)
func(false)
func(x)
func(func)
func(o)