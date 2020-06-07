function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => res.json())
        .then(states => {
            for (const state of states) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            }
        })
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("[name=state]")
    const ufValue = event.target.value
    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    console.log(stateInput)
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelect.innerHTML = `<option value="">Selecione um estado</option>`
    citySelect.disabled = true
    fetch(url)
        .then(res => res.json())
        .then(cities => {
            for (const city of cities) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            citySelect.disabled = false
        })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)

// Itens de coleta
// pegar todos os li`s
const itemsToCollect = document.querySelectorAll(".items-grid li")

for (let item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

// atualizar o campo escondido com os itens selecionado
const collectedItems = document.querySelector("input[name=items]")
let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target
    // adicionar ou remover uma classe com javascript
    // itemLi.classList.add("selected")
    // itemLi.classList.remove("selected")
    itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id
    // verificar se existe itens selecionados, se sim
    // pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex(item => item == itemId) // isso será true ou false
    // se já estiver selecionado
    if (alreadySelected >= 0) {
        // tirar da seleção
        // caso a função anônima que recebe um elemento item retorne um valor 
        // verdadeiro, ela vai adicionar o elemento em um novo array 
        // "filteredItems"
        // no momento em que o retorno for falso ele vai ser removido do array
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })

        selectedItems = filteredItems
        // se não estiver selecionado, adicionar à seleção
    } else {
        selectedItems.push(itemId)
    }
    collectedItems.value = selectedItems
}
