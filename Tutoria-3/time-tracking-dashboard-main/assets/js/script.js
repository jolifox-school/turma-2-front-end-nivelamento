"use strict";

const content = document.querySelector('.content')

let conteudos_cards = [
    {titulo: "Work", paragrafo: "Last Week - 36hrs", subtitulo: "32hrs"},
    {titulo: "Play", paragrafo: "Last Week - 8hrs", subtitulo: "10hrs"},
    {titulo: "Study", paragrafo: "Last Week - 7hrs", subtitulo: "4hrs"},
    {titulo: "Exercise", paragrafo: "Last Week - 5hrs", subtitulo: "4hrs"},
    {titulo: "Social", paragrafo: "Last Week - 10hrs", subtitulo: "5hrs"},
    {titulo: "Self Care", paragrafo: "Last Week - 2hrs", subtitulo: "2hrs"},
]

conteudos_cards.forEach((conteudo, index)=>{
    content.innerHTML += `
    <div class="boxes">
        <div class="teste${index + 1}"></div>
        <div class="teste_bottom">
            <div class="header_content">
                <h2>${conteudo.titulo}</h2>
                <a href="#"><img src="./assets/images/icon-ellipsis.svg" alt=""></a>
            </div>
            <div class="dados_content">
                <h3>${conteudo.subtitulo}</h3>
                <p>${conteudo.paragrafo}</p>
            </div>
        </div>
    <div>
    `
})

    



