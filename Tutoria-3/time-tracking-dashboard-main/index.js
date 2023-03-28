/*
 *  1 -  Usar a variável "valores" para inserir os dados nos cards, em cada período somar os valores de
 *       cada categoria.
 *  2 - Adicionar o evento "click" no menu, onde ao clicar as informações nos cards mudem de acordo com
 *       o período escolhido
 */
"use strict";

const valores = [
  {
    periodo: "daily",
    card: [
      {
        titulo: "work",
        valor: 4,
      },
      {
        titulo: "play",
        valor: 6,
      },
      {
        titulo: "study",
        valor: 8,
      },
      {
        titulo: "exercise",
        valor: 6,
      },
      {
        titulo: "social",
        valor: 2,
      },
      {
        titulo: "selfCare",
        valor: 7,
      },
    ],
  },
  {
    periodo: "weekly",
    card: [
      {
        titulo: "work",
        valor: 3,
      },
      {
        titulo: "play",
        valor: 6,
      },
      {
        titulo: "study",
        valor: 8,
      },
      {
        titulo: "exercise",
        valor: 2,
      },
      {
        titulo: "social",
        valor: 8,
      },
      {
        titulo: "selfCare",
        valor: 7,
      },
    ],
  },
  {
    periodo: "monthly",
    card: [
      {
        titulo: "work",
        valor: 4,
      },
      {
        titulo: "play",
        valor: 4,
      },
      {
        titulo: "study",
        valor: 8,
      },
      {
        titulo: "exercise",
        valor: 6,
      },
      {
        titulo: "social",
        valor: 2,
      },
      {
        titulo: "selfCare",
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

// ------ Melhorar aqui conforme arquivo da tutoria
// const lista = document.querySelectorAll(".item-lista");

// lista.forEach(itemAlvo => {
//     itemAlvo.
// })

// Change selected period
function changeHours(tag, toRemove1, toRemove2) {
  document.getElementById(toAdd).classList.add("selected");
  document.getElementById(toRemove1).classList.remove("selected");
  document.getElementById(toRemove2).classList.remove("selected");
}

// When "Daily" button is pressed
document.querySelector("#daily").addEventListener("click", function () {
  // Add the class "selected" in daily and removes from the other
  changeState("daily", "weekly", "monthly");
});

// When "weekly" button is pressed
document.querySelector("#weekly").addEventListener("click", function () {
  // Add the class "selected" in weekly and removes from the other
  changeState("weekly", "daily", "monthly");
});

// When "monthly" button is pressed
document.querySelector("#monthly").addEventListener("click", function () {
  // Add the class "selected" in monthly and removes from the other
  changeState("monthly", "daily", "weekly");
});
