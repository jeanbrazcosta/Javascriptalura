//selecionando campo
var campoFiltro = document.querySelector("#filtrar-tabela");
//evento para escutar quando usuário está digitando
campoFiltro.addEventListener("input", function() {
//selecionando todos os pacientes
    var pacientes = document.querySelectorAll(".paciente");
//identificando se existe algo digitado se não, não entrará no for
    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            
            var expressao = new RegExp(this.value, "i");
//comparando se o que foi digitado bate com o que tem na tabela
            if (expressao.test(nome)) {
                paciente.classList.remove("invisivel");            } else {
                paciente.classList.add("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});


