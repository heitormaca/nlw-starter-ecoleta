// O "document" sempre se refere ao documento que estamos usando. Ele possui um formato de objeto
// que possui propriedades e funcionalidades (métodos).
// "write" seria uma funcionalidade do objeto "document".
// document.write("Hello")

// comments
// document.write("Hello")

// variáveis, tipos de dados, estrutura de dados

// Uma variável serve para registrar um dado na memória que você pode utilizar mais tarde.

// ==================================================================================================

// o var não é muito utilizado atualmente.

// var myvar // undefined
// myvar = "Hello"
// document.write(myvar);

// ==================================================================================================

// const são variáveis que não mudam o seu valor.
// let são variáveis que permitem alterar seu valor dentro do bloco

// var myvar = "Hello"
// const myconst = "He"
// document.write(myconst + myvar);

// ==================================================================================================

// const

// const s1 = "Isso é uma string"
// const s2 = 'Isso também é uma string'
// const s3 =`Isso é uma string também`

// ==================================================================================================

// number

// const n1 = 1
// const n2 = 12
// document.write(n1 + n2) //13

// const n1 = "1"
// const n2 = 12
// document.write(n1 + n2) //112

// ==================================================================================================

// boolen - true ou false

// const bTrue = true
// const bFalse = false
// document.write(bFalse)

// ==================================================================================================

// estrutura de dados
// objetos
// Todos os objetos possuem propriedades e funcionalidades (métodos)

// "altura", "idade" e "solteiro" são propriedades do objeto "pessoa"
// "correr()" é uma funcionalidade (método) do objeto "pessoa"

// const pessoa = {
//   altura: "1,80m",
//   idade: 24,
//   solteiro: true,
//   correr(){
//     return "run Forest"
//   }
// }
// document.write(pessoa.correr())

// ==================================================================================================

// estrutura de dados
// Array - Vetores (é uma coleção de dados)
// const colecaoDeBolinhas = ["blue", "green", 1, {name: "My Name"}]

// document.write(colecaoDeBolinhas[3].name)

// ==================================================================================================

// Funções - Funcionalidades - Atalhos - Reuso de código - Métodos

// registrando uma função
// método recebendo o parâmetro/argumento name
// function sayMyName(name) {
//   document.write(name)
// }

// executando uma função
// sayMyName("Douglas")
// sayMyName("Valeska")
// sayMyName("Kyam")

// ==================================================================================================

// condicionais

// const notaFinal = 4

// if ( notaFinal < 5 ) {
//   // caminho 1 // true
//   document.write("Reprovado")
// } else {
//   // caminho 2 // false
//   document.write("Aprovado")
// }

// ==================================================================================================

// loop repetições

// for (i = 0; i < 10; i++) {
//   utilizando a craze (``) é possível fazer uma interpolação de strings com variáveis 
//   document.write(`<p> ${i} </p>`)
// }

// ==================================================================================================


// seleciona o trecho form do seu documento
//document.querySelector("form")

// ==================================================================================================

// mostra um dado no console do navegador
// console.log("Hello")

// ==================================================================================================

// fetch é um método que possuí um parâmetro e ele vai retornar uma Promise. A promisse vai atender a sua requisição, 
// mas ela não garante que lhe entregará o dado que você espera, ela promete que vai apenas buscar o dado da requisição.
// fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
// then é um método que executa alguma ação seguinte. No caso estamos criando uma função "res" que armazena todo contexto
// anterior nela e ela recebe um método json, isso significa que agora o resultado da função "res" pode ser visto como um 
// arquivo json. 
    // .then(function(res){ return res.json() })
// por ultimo, guardamos o arquivo "res.json" dentro de uma nova função chamada "data" e mostramos no console a função "data".
    // .then(function(data){ console.log(data) })

// ==================================================================================================

//retorna o select dentro do codigo HTML com o parâmetro ["name" = uf]
// document.querySelector("select[name=uf]")

//esta funcionalidade vai ficar "ligada" sempre "ouvindo" algum evento. Um dos eventos e o "change". Que é justamente o tipo 
// de evento que busca alterações no nosso select. O primeiro parâmetro do método é o tipo do evento. O segundo parâmetro 
// executa uma ação (método) caso o método .addEventListener ative o primeiro parâmetro. O segundo parâmetro é uma arrow function
// que e uma função anônima. Com ela podemos criar uma função que não possui um nome específico e a execute dentro da própria 
// função .addEventListener document.addEventListener("change", () => {
    // console.log("mudei")
// })

// ==================================================================================================

// caso você se depare com um único parâmetro retornando um único tipo de dado, como o exemplo mostrado abaixo 
// .then( (res) => { return res.json() })
// você pode transformar para uma forma mais simples.
// Isso é apenas uma função anônima que está retornando um valor.
// .then( res => res.json() )

// ==================================================================================================

// .innerHTML é uma propriedade de elementos HTML que insere um elemento HTML.

// ==================================================================================================

// i++ 
// é a mesma coisa que 
// i = i + 1
// que é a mesma coisa que
// i += 1

// ==================================================================================================

//Você está recebendo o evento que foi passado para a função getCities no "change" da função anterior.
// function getCities(event) {
//     const citySelect = document.querySelector("select[name=city]")
// o objeto "event" que é "change" vai traser várias informações, uma delas que foi setada é o ".target", que vai dizer onde
// esse evento foi executado, que no caso, ele foi executado no "select[name=uf]"
//     console.log(event.target)

// }

// document
//     .querySelector("select[name=uf]")
//     // nao coloque () em "getCity" porque se não, você executa o método imediatamente, e você só quer executa-lá quando
//     // ela o parâmetro "change" for acionado.
//     .addEventListener("change", getCities)

// ==================================================================================================

// function populateUFs() {
//     const ufSelect = document.querySelector("select[name=uf]")
//     fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
//     .then( res => res.json() )
//     .then( states => {
//         //assume os objetvos que tem dentro do json "states" com o nome "state"
//         for( const state of states) {
//             ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
//         }
//     } )
// }







