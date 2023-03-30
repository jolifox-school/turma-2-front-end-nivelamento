/*
 *  1 -  Usar a variável "valores" para inserir os dados nos cards, em cada período somar os valores de
 *       cada categoria.
 *  2 - Adicionar o evento "click" no menu, onde ao clicar as informações nos cards mudem de acordo com
 *       o período escolhido
 */
"use strict";

const valores = [
  {
    periodo: "daily", // valores[0].periodo
    card: [
      {
        titulo: "Work",
        valor: 4,
      },
      {
        titulo: "Play",
        valor: 6,
      },
      {
        titulo: "Study",
        valor: 8,
      },
      {
        titulo: "Exercise",
        valor: 6,
      },
      {
        titulo: "Social",
        valor: 2,
      },
      {
        titulo: "Self Care",
        valor: 7,
      },
    ],
  },
  {
    periodo: "weekly", // valores[1].periodo
    card: [
      {
        titulo: "Work",
        valor: 3,
      },
      {
        titulo: "Play",
        valor: 6,
      },
      {
        titulo: "Study",
        valor: 8,
      },
      {
        titulo: "Exercise",
        valor: 2,
      },
      {
        titulo: "Social",
        valor: 8,
      },
      {
        titulo: "Self Care",
        valor: 7,
      },
    ],
  },
  {
    periodo: "monthly", // valores[2].periodo
    card: [
      {
        titulo: "Work",
        valor: 4,
      },
      {
        titulo: "Play",
        valor: 4,
      },
      {
        titulo: "Study",
        valor: 8,
      },
      {
        titulo: "Exercise",
        valor: 6,
      },
      {
        titulo: "Social",
        valor: 2,
      },
      {
        titulo: "Self Care",
        valor: 7,
      },
    ],
  },
];

// Change selected period
function changeState(toAdd, toRemove1, toRemove2) {
  document.getElementById(toAdd).classList.add("selected");
  document.getElementById(toRemove1).classList.remove("selected");
  document.getElementById(toRemove2).classList.remove("selected");
}

// Update the hour values
function updateCards(period) {
  // Seleciona todas as divs com classe "titulo-card" e "hora-inicio"
  const tituloCards = document.querySelectorAll(".titulo-card");
  const horaInicioDivs = document.querySelectorAll(".hora-inicio");

  // percorre todas as divs "titulo-card"
  for (let i = 0; i < tituloCards.length; i++) {
    // percorre todos os valores/indices principais do array "valores"
    for (let j = 0; j < valores.length; j++) {
      // Verifica o periodo selecionado
      if (valores[j].periodo === period) {
        // compara o texto da div "titulo-card" com valores[j].card[k].titulo
        for (let k = 0; k < valores[j].card.length; k++) {
          if (tituloCards[i].innerText === valores[j].card[k].titulo) {
            // preenche o texto da div "hora-inicio" correspondente
            horaInicioDivs[i].innerText = valores[j].card[k].valor + "hrs";
          }
        }
      }
    }
  }
}

// At first moment loading the screen
window.addEventListener("load", function () {
  changeState("daily", "weekly", "monthly");
  updateCards("daily");
});

// When "Daily" button is pressed
document.querySelector("#daily").addEventListener("click", function () {
  // Add the class "selected" in daily and removes from the other
  changeState("daily", "weekly", "monthly");
  updateCards("daily");
});

// When "weekly" button is pressed
document.querySelector("#weekly").addEventListener("click", function () {
  // Add the class "selected" in weekly and removes from the other
  changeState("weekly", "daily", "monthly");
  updateCards("weekly");
});

// When "monthly" button is pressed
document.querySelector("#monthly").addEventListener("click", function () {
  // Add the class "selected" in monthly and removes from the other
  changeState("monthly", "daily", "weekly");
  updateCards("monthly");
});
