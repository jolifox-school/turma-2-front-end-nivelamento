const valores = [
    {
        "periodo": "daily",
        "card": [
            {
                "titulo": "work",
                "valor": '4hrs'
            },
            {
                "titulo": "play",
                "valor": '6hrs'
            },
            {
                "titulo": "study",
                "valor": '8hrs'
            },
            {
                "titulo": "exercise",
                "valor": '6hrs'
            },
            {
                "titulo": "social",
                "valor": '2hrs'
            },
            {
                "titulo": "selfCare",
                "valor": '9hrs'
            }
        ]
    },
    {
        "periodo": "weekly",
        "card": [
            {
                "titulo": "work",
                "valor": '13hrs'
            },
            {
                "titulo": "play",
                "valor": '16hrs'
            },
            {
                "titulo": "study",
                "valor": '18hrs'
            },
            {
                "titulo": "exercise",
                "valor": '12hrs'
            },
            {
                "titulo": "social",
                "valor": '18hrs'
            },
            {
                "titulo": "selfCare",
                "valor": '17hrs'
            }
        ]
    },
    {
        "periodo": "monthly",
        "card": [
            {
                "titulo": "work",
                "valor": '34hrs'
            },
            {
                "titulo": "play",
                "valor": '30hrs'
            },
            {
                "titulo": "study",
                "valor": '38hrs'
            },
            {
                "titulo": "exercise",
                "valor": '36hrs'
            },
            {
                "titulo": "social",
                "valor": '32hrs'
            },
            {
                "titulo": "selfCare",
                "valor": '27hrs'
            }
        ]
    },
]


const cursor = document.querySelectorAll('.item-lista')
cursor.forEach(item => {
    item.addEventListener('mouseover',() => {
        item.style.cursor = 'pointer';
})
})

//console.log(valores[0].card[0].valor)

const funcaoClick = () => {
    const lista = document.querySelectorAll(".item-lista");
    lista.forEach(itemAlvo => {
        itemAlvo.addEventListener("click", () => {
            let clicouEm = itemAlvo.textContent

            if(clicouEm == "Daily"){
                let horaInicio = document.querySelectorAll('.hora-inicio')
                for(let i = 0; i < valores[0].card.length; i++ ){
                    let novoValor = valores[0].card[i].valor
                    horaInicio[i].textContent = novoValor
                    }
            }

            if(clicouEm == "Weekly"){
                let horaInicio = document.querySelectorAll('.hora-inicio')
                for(let i = 0; i < valores[1].card.length; i++ ){
                    let novoValor = valores[1].card[i].valor
                    horaInicio[i].textContent = novoValor
                    }
            }

            if(clicouEm == "Monthly"){
                let horaInicio = document.querySelectorAll('.hora-inicio')
                for(let i = 0; i < valores[2].card.length; i++ ){
                    let novoValor = valores[2].card[i].valor
                    horaInicio[i].textContent = novoValor
                    }
            }
        });
    });
}
funcaoClick();

// console.log(valores[1].card[3])