function Booleana() {
    let periodo = "dia"
    let dia = false

    if (periodo == "dia" || periodo == "tarde" || periodo == "manhã") {
        dia = true
        return <p id="bomDia">Bom dia!!</p>
    } else
        if (periodo == "noite" || periodo == "madrugada") {
            return <p id="boaNoite">Boa noite</p>
        }
}

export default Booleana;