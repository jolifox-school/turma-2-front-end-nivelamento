const searchByCep = document.getElementById("btnPesquisarCEP");
const searchByAddress = document.getElementById("btnPesquisarEndereco");
let cep = document.getElementById("cep");
let cepNumber;
const endpoint = "https://viacep.com.br/ws/";
const return_format = "/json/";

// Busca por CEP

searchByCep.addEventListener("click", async (e) => {
  e.preventDefault();
  cepNumber = cep.value.replace(/\D/g, ""); // Remove non-numeric characters
  const linkAPI = `${endpoint}${cepNumber}${return_format}`;

  try {
    const response = await fetch(linkAPI); // Async call for the API, "await" makes the function wait for the promisse response
    // Verifies if a response for the API was successful, else sends an error
    if (!response.ok) {
      throw new Error("Erro ao buscar CEP!");
    }
    const data = await response.json(); // For a succesful response, converts the response into json format
    // Check if there is more than 1 value returned (no error)
    if (Object.keys(data).length > 1) {
      // console.log(data);
      insertValues(data);
    } else alert("Verifique se o CEP digitado está correto!");
  } catch (error) {
    if (cepNumber == 0) {
      alert("Prencha o campo CEP!");
    } else alert("Erro no preechimento dos campos!");
    console.error(error);
  }
});

// Search by address
searchByAddress.addEventListener("click", async (e) => {
  e.preventDefault();
  cepNumber = 0;
  let ruaValue = document.getElementById("rua").value;
  let cidadeValue = document.getElementById("cidade").value;
  let estadoValue = document.getElementById("estado").value;

  const linkAPI = `${endpoint}${estadoValue}/${cidadeValue}/${ruaValue}${return_format}`;
  console.log(linkAPI);

  try {
    const response = await fetch(linkAPI);
    if (!response.ok) {
      throw new Error("Erro ao buscar endereço");
    }
    const data = await response.json();
    console.log(data);
    document.getElementById("cep").value = data.cep || "";
  } catch (error) {
    alert("Erro no preechimento dos campos!");
    console.error(error);
  }
});

// Fill the forms with the received data
const insertValues = (data) => {
  document.getElementById("rua").value = data.logradouro || "";
  document.getElementById("complemento").value = data.complemento || "";
  document.getElementById("bairro").value = data.bairro || "";
  document.getElementById("cidade").value = data.localidade || "";
  document.getElementById("estado").value = data.uf || "";
};

const insertCEP = (data) => {};

// Clear button

const clearBtn = document.getElementById("btnLimpar");
const inputs = document.querySelectorAll("input");

clearBtn.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.value = "";
  });
});
