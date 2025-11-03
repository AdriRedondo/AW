try {
    con++
}
catch (e) {
    console.log(e.name)
    console.log(e.message)
}
finally {
    console.log("Intento de acceso a variable no definidia")
}