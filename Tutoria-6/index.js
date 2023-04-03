const search = document.getElementById('btnPesquisar');
const cep = document.getElementById('cep');

search.addEventListener("click", async (e) => {
    e.preventDefault();
    fetchFunc(cep.value);
});

let valueFetch = {};
const fetchFunc = async (value) => {
    const valueFetchIntern = await fetch(`https://viacep.com.br/ws/${value}/json/`)
    valueFetch = await valueFetchIntern.json();
    if (Object.keys(valueFetch).length > 0){
        insertValue(valueFetch);
    }
}

const insertValue = va => {
    document.getElementById("rua").value = va.logradouro;
    document.getElementById("complemento").value = va.complemento;
    document.getElementById("bairro").value = va.bairro;
    document.getElementById("cidade").value = va.localidade;
    document.getElementById("estado").value = va.uf;
}