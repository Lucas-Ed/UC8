//--------------------------Inicio--parte 1----------------------------
var data = 3
var dataevento = 20
var idade = 31

if (data < dataevento){
console.log ("Pode prosseguir com o cadastro !")

}else console.log ("Não  pode prosseguir com o cadastro, por data inválida")

//--------------------------------------------------------------------------
//Inicio- parte 2
if (idade > 18){
console.log("Cadastro Permitido !")
} else console.log("Cadastro não permitido pela idade ser < de 18 anos")
//--------------------------------------------------------------------------
//Inicio- parte 3
let participantes = ["Lucas", "João", "Mariane","Camila","Natalina","Benedita"]
//let quantidadeDeparticipantes = participantes.join(",")
let quantidadeDeparticipantes = participantes.length
console.log(quantidadeDeparticipantes, "Participantes")

//-Palestrantes
let palestrantes = ["Alex", "Tainá", "Alice"]
let quantidadeDepalestrantes = palestrantes.length
console.log(quantidadeDepalestrantes, "Palestrantes")

//Confirma se a qtd de participantes é < que 100
if (quantidadeDeparticipantes <=100) {
console.log ("Cadastro Permitido !")// exibe mensagem console.log
}else console.log ("Não será permitido, excedeu o limite")
//------------------------Fim-----------------------------------