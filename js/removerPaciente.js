var paciente = document.querySelectorAll("#tabela-pacientes");
paciente.forEach(function (paciente) {
    paciente.addEventListener("dblclick", function (event) {
        event.target.parentNode.classList.add("fadeOut");
        setTimeout(function () {
            event.target.parentNode.remove();
        }, 500)
        alertRemovePaciente(event.target.parentNode.children[0].textContent);
    })
})

function alertRemovePaciente(name) {
    alert("Paciente " + name + " removido com sucesso!")
}




