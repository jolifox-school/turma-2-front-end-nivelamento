const search = document.getElementById("btnPesquisar");
const cep = document.getElementById("cep");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");
const rua = document.getElementById("rua");

search.addEventListener("click", async (e) => {
  e.preventDefault();
  fetchFunc(cep.value, cidade.value, estado.value, rua.value);
});

let valueFetch = {};
const fetchFunc = async (cep, cidade, estado, rua) => {
  let valueFetchIntern = "";
  //Busca por CEP
  if (cep.length > 0) {
    valueFetchIntern = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    valueFetch = await valueFetchIntern.json();
    if (Object.keys(valueFetch).length > 0) {
        insertValueCep(valueFetch);
    }
  }
  //Busca por endereço
  if (cep.length <= 0 && estado.length > 0 && cidade.length > 0 && rua.length > 0) {
    valueFetchIntern = await fetch(`https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`);
    valueFetch = await valueFetchIntern.json();
    if (Object.keys(valueFetch).length > 0) {
      insertValue(valueFetch[0]);
    }
  } 
  //Validação sem dados
  else if (cep.length <= 0 && estado.length <= 0 && cidade.length <= 0 && rua.length <= 0) {
    alert(
      "Por favor, digite o CEP para a busca. \nCaso não saiba informar o CEP, é necessário digitar: Estado, cidade e rua!"
    );
  }
};

const insertValueCep = (va) => {
  document.getElementById("rua").value = va.logradouro;
  document.getElementById("complemento").value = va.complemento;
  document.getElementById("bairro").value = va.bairro;
  document.getElementById("cidade").value = va.localidade;
  document.getElementById("estado").value = va.uf;
};

const insertValue = (va) => {
    document.getElementById("complemento").value = va.complemento;
    document.getElementById("bairro").value = va.bairro;
    document.getElementById("cep").value = va.cep;
  };
