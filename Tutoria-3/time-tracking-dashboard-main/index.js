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
        titulo: "Work",
        valor: 4,
        resumo: "Last Day - 3hrs"
      },
      {
        titulo: "Play",
        valor: 6,
        resumo: "Last Day - 5hrs"
      },
      {
        titulo: "Study",
        valor: 8,
        resumo: "Last Day - 12hrs"
      },
      {
        titulo: "Exercise",
        valor: 6,
        resumo: "Last Day - 2hrs"
      },
      {
        titulo: "Social",
        valor: 2,
        resumo: "Last Day - 4hrs"
      },
      {
        titulo: "Self-care",
        valor: 7,
        resumo: "Last Day - 10hrs"
      },
    ],
  },
  {
    periodo: "weekly",
    card: [
      {
        titulo: "Work",
        valor: 30,
        resumo: "Last Week - 34hrs"
      },
      {
        titulo: "Play",
        valor: 10,
        resumo: "Last Week - 14hrs"
      },
      {
        titulo: "Study",
        valor: 28,
        resumo: "Last Week - 20hrs"
      },
      {
        titulo: "Exercise",
        valor: 12,
        resumo: "Last Week - 11hrs"
      },
      {
        titulo: "Social",
        valor: 8,
        resumo: "Last Week - 9hrs"
      },
      {
        titulo: "Self-care",
        valor: 17,
        resumo: "Last Week - 5hrs"
      },
    ],
  },
  {
    periodo: "monthly",
    card: [
      {
        titulo: "Work",
        valor: 24,
        resumo: "Last Month - 34hrs"
      },
      {
        titulo: "Play",
        valor: 24,
        resumo: "Last Month - 22hrs"
      },
      {
        titulo: "Study",
        valor: 28,
        resumo: "Last Month - 40hrs"
      },
      {
        titulo: "Exercise",
        valor: 36,
        resumo: "Last Month - 34hrs"
      },
      {
        titulo: "Social",
        valor: 22,
        resumo: "Last Month - 18hrs"
      },
      {
        titulo: "Self-care",
        valor: 27,
        resumo: "Last Month - 29hrs"
      },
    ],
  },
];

const cardsSection = document.querySelector(".cards-section");

const primaryCards = document.createElement("section");
primaryCards.classList.add("primary-cards");

const secundaryCards = document.createElement("section");
secundaryCards.classList.add("secundary-cards");

cardsSection.appendChild(primaryCards);
cardsSection.appendChild(secundaryCards);

for (let index = 0; index < 3; index++) {
  const containerCards = document.createElement("section");
  containerCards.classList.add("container-card");
  containerCards.innerHTML = `
  <img class="icon-card" alt="">
        <div class="card">
            <header class="header-card">
                <span class="card-title"></span>
                <img class="card-options" src="./assets/images/icon-ellipsis.svg">
            </header>
            <div class="body-card">
                <span class="hour-card"></span>
            </div>
            <footer class="footer-card">
                <span class="review-card"></span>
            </footer>
        </div>
    `;
  primaryCards.appendChild(containerCards);
}

for (let index = 0; index < 3; index++) {
  const containerCards = document.createElement("section");
  containerCards.classList.add("container-card");
  containerCards.innerHTML = `
  <img class="icon-card" alt="">
        <div class="card">
            <header class="header-card">
                <span class="card-title"></span>
                <img class="card-options" src="./assets/images/icon-ellipsis.svg">
            </header>
            <div class="body-card">
                <span class="hour-card"></span>
            </div>
            <footer class="footer-card">
                <span class="review-card"></span>
            </footer>
        </div>
    `;
  secundaryCards.appendChild(containerCards);
}

function changeSelection(element, time) {
  const activeClass = "active";
  const listItems = document.querySelectorAll(".item-list");
  listItems.forEach((item) => item.classList.remove(activeClass));
  element.classList.add(activeClass);

  changeCards(time);
}

function changeCards(time) {
  valores.forEach((item) => {
    if (item.periodo == time) {
      const contentByPeriod = item.card;
        createCardHeader(contentByPeriod);
    }
  });
}

function createCardHeader(info) {
  const header = document.querySelectorAll(".hour-card");
  const title = document.querySelectorAll(".card-title");
  const rewiewCard = document.querySelectorAll(".review-card");
  const img = document.querySelectorAll(".icon-card");
  for (let index = 0; index < info.length; index++) {
    img[index].setAttribute("src", `./assets/images/icon-${info[index].titulo}.svg`);
    title[index].textContent = `${info[index].titulo}`;
    header[index].textContent = `${info[index].valor}hrs`;
    rewiewCard[index].textContent = `${info[index].resumo}`;
}
}
const daily = document.querySelector(".item-list")
changeSelection(daily, "daily")