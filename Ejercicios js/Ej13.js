function createObject(param) {
    let o = {}
    for (let p of param) {
        o[p] = ""
    }
    console.log(o)
}

let properties = ["nombre", "apellido1", "apellido2"];
createObject(properties);