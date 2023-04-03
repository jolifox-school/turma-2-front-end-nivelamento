const search = document.getElementById('btn-pesquisar');
const cep = document.getElementById('cep');
let cepNumber;
const api = `https://viacep.com.br/ws/${cep}/json/`;

search.addEventListener("click", async (e)=> {
  e.preventDefault();
  const search = await fetchFunc(cep.value);
});

let valueFetch = {};

const fetchFunc = async (value) => {
  const valueFetchIntern = await fetch(`https://viacep.com.br/ws/${value}/json/`)
  valueFetch = await valueFetchIntern.json();
  if(Object.keys(valueFetch).length > 0) {
    insertValue(valueFetch);
  }
}

const insertValue = va => {
  document.getElementById("logradouro").value = va.logradouro;
  document.getElementById("bairro").value = va.bairro;
  document.getElementById("localidade").value = va.localidade;
  document.getElementById("uf").value = va.uf;
}
