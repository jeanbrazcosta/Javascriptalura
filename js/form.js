//selecionando botão
var botaoadicionar = document.querySelector("#adicionar-paciente");
//criando função para escutar evento do botão
botaoadicionar.addEventListener("click", function (event) {
	//função para modificar comportamento padrão do botão
	event.preventDefault();
	//selecionando formulário
	var form = document.querySelector("#form-adiciona");
	//capturando valores dos campos.
	var nome = form.nome.value;
	var peso = form.peso.value;
	var altura = form.altura.value;
	var gordura = form.gordura.value;
	//criando Tr
	var pacienteTr = document.createElement("tr");
	//criando td
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    //trocando conteúdo dos elementos
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    //adicionando Td na Tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    //selecionando tabela paciente
    var tabela = document.querySelector("#tabela-pacientes");
    //adicionando tr dentro da tabela paciente
    tabela.appendChild(pacienteTr);
});
