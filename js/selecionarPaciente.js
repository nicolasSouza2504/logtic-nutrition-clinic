var pacientes = document.querySelectorAll("#tabela-pacientes");
pacientes.forEach(function (paciente) {
    paciente.addEventListener("click", function (event) {
        removeSelection(pacientes);
        var test = event.target.parentNode.classList.contains('selected');
        if (!test) {
            event.target.parentNode.classList.add("selected");
        }
    })
})

function removeSelection(pacientes) {
    pacientes.forEach(function(paciente) {
        paciente.childNodes.forEach(function(tr) {
            if (tr.classList) {
                tr.classList.remove("selected");
            }
        });
    })
}


