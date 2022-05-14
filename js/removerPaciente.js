var btnRemove = document.querySelector("#button-excluir");

btnRemove.addEventListener("click", function (event) {
    var pacientes = document.querySelectorAll("#tabela-pacientes");
    removeSelected(pacientes);
});

function alertRemovePaciente(name) {
    alert("Paciente " + name + " removido com sucesso!")
}

function removeSelected(pacientes) {
    pacientes.forEach(function(pct) {
        pct.childNodes.forEach(function (tr) {
            console.log(tr.textContent)
            if (tr.classList && tr.classList.contains("selected")) {
                tr.classList.remove("selected");
                tr.classList.add("fadeOut");
                setTimeout(function () {
                    tr.remove();
                }, 500)
                var pacienteName = tr.parentNode.children[0].children[0].textContent;
                alertRemovePaciente(pacienteName);
            }
        });
    })

}




