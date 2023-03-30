"use strict";

const content = document.querySelector('.content')

let conteudos_cards = [
    {titulo: "Work", paragrafo: "Last Week - 36hrs", subtitulo: 32},
    {titulo: "Play", paragrafo: "Last Week - 8hrs", subtitulo: 10},
    {titulo: "Study", paragrafo: "Last Week - 7hrs", subtitulo: 4},
    {titulo: "Exercise", paragrafo: "Last Week - 5hrs", subtitulo: 4},
    {titulo: "Social", paragrafo: "Last Week - 10hrs", subtitulo: 5},
    {titulo: "Self Care", paragrafo: "Last Week - 2hrs", subtitulo: 2},
]   

const valores = [
    {
        "periodo": "daily",
        "card": [{"titulo": "work", "valor": 4},
                {"titulo": "play", "valor": 6},
                {"titulo": "study", "valor": 5},
                {"titulo": "exercise", "valor": 7},
                {"titulo": "social", "valor": 3},
                {"titulo": "selfCare", "valor": 17}
        ]
    },
    {
        "periodo": "weekly",
        "card": [
                {"titulo": "work", "valor": 3}, 
                {"titulo": "play", "valor": 9},
                {"titulo": "study","valor": 11},
                {"titulo": "exercise", "valor": 2},
                {"titulo": "social", "valor": 8},
                {"titulo": "selfCare", "valor": 4}
        ]
    },
    {
        "periodo": "monthly",
        "card": [{"titulo": "work", "valor": 12},
                {"titulo": "play", "valor": 4},
                {"titulo": "study", "valor": 8},
                {"titulo": "exercise", "valor": 6},
                {"titulo": "social", "valor": 2},
                {"titulo": "selfCare", "valor": 7}
        ]
    },
]


conteudos_cards.forEach((conteudo, index)=>{
    content.innerHTML += `
    <section class="boxes">
        <section class="box${index + 1}"></section>
        <section class="box_dados">
            <section class="header_content">
                <h2>${conteudo.titulo}</h2>
                <a href="#"><img src="./assets/images/icon-ellipsis.svg" alt=""></a>
            </section>
            <section class="dados_content">
                <h3>${conteudo.subtitulo}hrs</h3>
                <p>${conteudo.paragrafo}</p>
            </section>
        </section>
    <section>
    `
})

const links = document.querySelectorAll('.link')
const subtitulo = document.querySelectorAll('h3')

links.forEach((link)=>{
    link.addEventListener('click',()=>{
        if(link.innerHTML === 'Daily'){
            valores.forEach((valor)=>{
                if(valor.periodo === link.innerHTML.toLowerCase()){
                    valor.card.forEach((item, index)=>{
                        subtitulo[index].innerHTML = `${item.valor}hrs`
                    })
                }
            })
        }
        else if(link.innerHTML === 'Weekly'){
            valores.forEach((valor)=>{
                if(valor.periodo === link.innerHTML.toLowerCase()){
                    valor.card.forEach((item, index)=>{
                        subtitulo[index].innerHTML = `${item.valor}hrs`
                    })
                }
            })
        }
        else if(link.innerHTML === 'Monthly'){
            valores.forEach((valor)=>{
                if(valor.periodo === link.innerHTML.toLowerCase()){
                    valor.card.forEach((item, index)=>{
                        subtitulo[index].innerHTML = `${item.valor}hrs`
                    })
                }
            })
        }
    })
})