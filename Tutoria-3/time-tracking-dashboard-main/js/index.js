/* 
*  1 -  Usar a variável "valores" para inserir os dados nos cards, em cada período somar os valores de 
*       cada categoria.
*  2 - Adicionar o evento "click" no menu, onde ao clicar as informações nos cards mudem de acordo com 
*       o período escolhido
*/

const valores = [
    {
        "periodo": "daily",
        "card": [
            {
                "titulo": "work",
                "valor": 4
            },
            {
                "titulo": "play",
                "valor": 6
            },
            {
                "titulo": "study",
                "valor": 8
            },
            {
                "titulo": "exercise",
                "valor": 6
            },
            {
                "titulo": "social",
                "valor": 2
            },
            {
                "titulo": "selfCare",
                "valor": 7
            }
        ]
    },
    {
        "periodo": "weekly",
        "card": [
            {
                "titulo": "work",
                "valor": 3
            },
            {
                "titulo": "play",
                "valor": 6
            },
            {
                "titulo": "study",
                "valor": 8
            },
            {
                "titulo": "exercise",
                "valor": 2
            },
            {
                "titulo": "social",
                "valor": 8
            },
            {
                "titulo": "selfCare",
                "valor": 7
            }
        ]
    },
    {
        "periodo": "monthly",
        "card": [
            {
                "titulo": "work",
                "valor": 4
            },
            {
                "titulo": "play",
                "valor": 4
            },
            {
                "titulo": "study",
                "valor": 8
            },
            {
                "titulo": "exercise",
                "valor": 6
            },
            {
                "titulo": "social",
                "valor": 2
            },
            {
                "titulo": "selfCare",
                "valor": 7
            }
        ]
    },
]

const list = ["Daily", "Weekly", "Monthly"];

const createList = () => {
    list.forEach(item => {
        const ul = document.querySelector(".ul-lista");
        const itemDaLista = document.createElement("li");
        itemDaLista.classList.add("item-lista");
        itemDaLista.textContent = item;
        ul.appendChild(itemDaLista)
    });
}

createList();

const cardsSuperiores = ["Work", "Play", "Study"];
const cardInferiores = ["Exercise", "Social", "Self-Care"];
const superior = document.querySelector(".cards-superiores");
const inferior = document.querySelector(".cards-inferiores");

const createCard = (arrayCard, elementoPai) => {

    for(i = 0; i < arrayCard.length; i++) {
        const card = `
            <div class="card card-${arrayCard[i]}">
                <header class="header-card">
                    <span class="titulo-card">${arrayCard[i]}</span>
                    <span class="opcao-card">°°°</span>
                </header>
                <div class="body-card">
                    <span class="hora-inicio">32hrs</span>
                </div>
                <footer class="rodape-card">
                    <span class="resumo-atividade">Last Week - 36hrs</span>
                </footer>
            </div>
        `
        const containerCard = document.createElement("div");
        containerCard.classList.add("container-card");
        containerCard.classList.add(`container-card-${arrayCard[i]}`);
        containerCard.innerHTML = card;
        elementoPai.appendChild(containerCard);
    }
}

createCard(cardsSuperiores, superior);
createCard(cardInferiores, inferior);

const funcaoClick = () => {
    const lista = document.querySelectorAll(".item-lista");
    lista.forEach(itemAlvo => {
        itemAlvo.addEventListener("click", ()=> {
            console.log("elemento clicado", itemAlvo.textContent)
        });
    });
}
funcaoClick();





