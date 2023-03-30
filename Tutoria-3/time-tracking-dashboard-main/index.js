import info from './card-information.js'

const cardContainer = document.querySelector('.cards-container')
const buttons = document.querySelectorAll('input[type=radio]')

const constroiCard = (info) => {
    const card = document.createElement("div")
    card.id = info.id
    card.classList.add('card')
    card.innerHTML = cardTemplate(info)
    return card
}

const cardTemplate = (info) => {
   return(`
        <div class="card-content">
            <h2>${info.type}</h2>
            <h3>${info.time}</h3>
            <span>${info.last}</span>
        </div>    
    `)
}

let checked = 'Daily'
const buttonsArray = [...buttons]
info[checked].forEach(elementoInfo => cardContainer.appendChild(constroiCard(elementoInfo)))
buttonsArray.forEach( button => button.addEventListener('click', () => {
    checked = button.dataset.name
    cardContainer.innerHTML = ''
    info[checked].forEach(elementoInfo => cardContainer.appendChild(constroiCard(elementoInfo)))
}))
