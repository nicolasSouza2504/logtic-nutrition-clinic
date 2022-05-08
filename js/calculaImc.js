var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = paciente.querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdimc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);


    if (!pesoValido) {

        alert("Peso inválido");
        tdimc.textContent = ("Peso inválido !");
        paciente.classList.add("paciente-invalido");

    }
    if (!alturaValida) {

        alert("Altura inválida");
        alturaValida = false;
        tdimc.textContent = ("Altura inválida!");
        paciente.classList.add("paciente-invalido");
    }

    if (alturaValida && pesoValido) {

        var imc = calculaImc(peso, altura);
        tdimc.textContent = imc;


    }

}


function validaPeso(peso) {

    if (peso > 0 && peso <= 500) {

        return true;
    } else {

        return false;
    }

}

function validaAltura(altura) {

    if (altura < 3.00 && altura > 0.5) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {

    var imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);

}


