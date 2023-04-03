"use strict";

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

const menuItems = document.querySelectorAll(".menu-items li");

menuItems.forEach((e) => {
    // console.log(e.innerHTML);
    e.addEventListener("click", updateCards, false);
});

function updateCards() {
    menuItems.forEach((e) => {
        e.classList.remove("active");
    });

    const horaInicioElements = document.querySelectorAll(".hora-inicio");
    let sum = 0;

    this.classList.add("active");
    if (this.innerHTML == "Daily") {
        horaInicioElements.forEach((horaInicioElement, index) => {
            horaInicioElement.innerHTML = valores[0].card[index].valor + "hrs";
        });

        valores[0].card.forEach((e) => {
            sum += e.valor;
        });
        console.log(sum);
    }
    else if (this.innerHTML == "Weekly") {
        horaInicioElements.forEach((horaInicioElement, index) => {
            horaInicioElement.innerHTML = valores[1].card[index].valor + "hrs";
        });

        valores[1].card.forEach((e) => {
            sum += e.valor;
        });
        console.log(sum);
    }
    else {
        horaInicioElements.forEach((horaInicioElement, index) => {
            horaInicioElement.innerHTML = valores[2].card[index].valor + "hrs";
        });

        valores[2].card.forEach((e) => {
            sum += e.valor;
        });
        console.log(sum);
    }
}
