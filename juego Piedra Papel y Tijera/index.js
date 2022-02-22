
var partidasJugadas = "0";
var PartidasGanasCPU = "0";
var PartidasEmpatadas = "0";
var PartidasGanadasUsuario = "0";

function Jugar(eleccionJugador) {

    partidasJugadas++
    if (eleccionJugador == "piedra") { document.getElementById('eleccionJugador').src = "imagenes/piedra.png"; }
    if (eleccionJugador == "papel") { document.getElementById('eleccionJugador').src = "imagenes/papel.png"; }
    if (eleccionJugador == "tijeras") { document.getElementById('eleccionJugador').src = "imagenes/tijeras.png"; }
    var eleccionCpu = "";
    var aleatorio = Math.random() * 100;
    if (aleatorio <= 33) 
    {
        document.getElementById('eleccionCpu').src = "imagenes/piedra.png";
        eleccionCpu = "piedra"
    }
    else {
        if (aleatorio <= 66) {
            document.getElementById('eleccionCpu').src = "imagenes/papel.png";
            eleccionCpu = "papel"
        }
        else {
            document.getElementById('eleccionCpu').src = "imagenes/tijeras.png";
            eleccionCpu = "tijeras"
        }
    }


    if (eleccionJugador == eleccionCpu) { document.getElementById('resultadoPartida').innerHTML = "Empate"; PartidasEmpatadas++ }
    else if ((eleccionJugador == 'piedra' && eleccionCpu == 'tijeras') || (eleccionJugador == 'tijeras' && eleccionCpu == 'papel') || (eleccionJugador == 'papel' && eleccionCpu == 'piedra')) { document.getElementById('resultadoPartida').innerHTML = "Ganas Tu"; PartidasGanadasUsuario++ } else { document.getElementById('resultadoPartida').innerHTML = "Gana La Maquina"; PartidasGanasCPU++ }

    document.getElementById("partidasJugadas").innerHTML = partidasJugadas;
    document.getElementById("humano").innerHTML = PartidasGanadasUsuario;
    document.getElementById("cpu").innerHTML = PartidasGanasCPU;
    document.getElementById("empate").innerHTML = PartidasEmpatadas;



}
function ReiniciarPartida() {
    document.getElementById('eleccionJugador').src = "imagenes/nada.png"
    document.getElementById('eleccionCpu').src = "imagenes/nada.png"
    document.getElementById('resultadoPartida').innerHTML = "..."

}
