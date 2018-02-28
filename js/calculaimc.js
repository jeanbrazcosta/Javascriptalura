//Criando variável e selecionando titulo da tag h1 da página
var titulo = document.querySelector(".titulo");
//Trocando texto e usando a propriedade textContent
titulo.textContent = "Aparecida nutricionista";
//Selecionando todos os pacientes atráve´s da classe paciente
var pacientes = document.querySelectorAll(".paciente");
//adicionando função para escutar clicke no título
titulo.addEventListener("click", function() {
	console.log("fui clicado")
});
//percorrendo todos os pacientes
for (var i = 0; i<pacientes.length; i++) {
//atribuindo a variável paciente os pacientes
var paciente = pacientes [i];
//selecionando peso
var tdPeso = paciente.querySelector(".info-peso");
//selecionando altura
var tdAltura = paciente.querySelector(".info-altura");
//selecionando imc
var tdImc = paciente.querySelector(".info-imc");
//pegando conteúdo da tag e não tod a tag
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
//variáveis de comparação que será usada no if
var alturaEhValida = true;
var pesoEhValido = true;

if(peso <= 0 || peso > 1000){
    console.log("Peso inválido");
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
	//adicionando classe que foi criado no arquivo css.
	paciente.classList.add("paciente-invalido");
}

if(altura <= 0 || altura >= 3){
    console.log("Altura inválida");
    tdImc.textContent = "Altura inválida!";
    alturaEhValida = false;
	paciente.classList.add("paciente-invalido");
}

if(pesoEhValido && alturaEhValida){
    var imc = peso / ( altura * altura);    
    //trocando conteúdo do imc e fixando para aparecer somente duas casas decimais.
    tdImc.textContent = imc.toFixed(2);
}
}