var campoFiltro = document.querySelector("#filtrar-tabela");
//adicionando evento imput que escuta quando usuário está digitando
campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");
//if para saber se existe algo digitado se não houver não entra no for
    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            //Criando variavel com a expressão regular e testa se é case 
            var expressao = new RegExp(this.value, "i");
//. test serve para testar se o que foi idigitado é igual a expressão regular ou seja com o que está na tabela
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});
