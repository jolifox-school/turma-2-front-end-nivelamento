const form = document.getElementById("form");
const searchButton = document.getElementById("search");
const resetButton = document.getElementById("reset");
const cep = document.getElementById("cep");
const rua = document.getElementById("rua");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("uf");
const suggested = document.getElementById("suggested");

searchButton.addEventListener("click", (event) => {
    searchAddress();
})

const searchAddress = async () => {
    suggested.innerHTML = "";
    if (cep.value != "" && cep.value.match(/[0-9]{5}-?[0-9]{3}/g)) {
        let searchResult = "";
        const searchViaCep = await fetch(`http://viacep.com.br/ws/${cep.value}/json/`);
        searchResult = await searchViaCep.json();
        if (searchResult.erro == true) {
            alert("Este CEP não é válido, tente novamente ou tente buscar buscar com a combinação de Rua (Logradouro), Cidade e Estado");
            form.reset.click();
            cep.focus();
        }
        else {
            fillFormWithResults(searchResult);
        }
    }
    else if (rua.value != "" && cidade.value != "" && estado.value != "") {
        let searchResult = "";
        const searchWithRoadCityState = await fetch(`http://viacep.com.br/ws/${estado.value}/${cidade.value}/${rua.value}/json/`);
        searchResult = await searchWithRoadCityState.json();

        if (searchResult.length === 1) {
            if (searchResult.erro == true) {
                alert("Esta combinação de Rua (Logradouro), Cidade e Estado não é válida");
                form.reset.click();
            }
            else {
                console.log(searchResult[0]);
                fillFormWithResults(searchResult[0]);
            }
        }
        else {
            console.log(searchResult);
            suggestOtherAddresses(searchResult)
        }

    }
    else {
        alert("Por favor digite um CEP válido ou a combinação de Rua (Logradouro), Cidade e Estado");
        cep.focus();
    }

};

const fillFormWithResults = (values) => {
    form.cep.value = values.cep;
    form.rua.value = values.logradouro;
    form.complemento.value = values.complemento;
    form.bairro.value = values.bairro;
    form.cidade.value = values.localidade;
    form.uf.value = values.uf;
};

const suggestOtherAddresses = (values) => {
    let suggestions = ""
    values.forEach((item, index) => {
        if (index <= 4) {
            suggestions += `${item.cep} - ${item.logradouro} <br><input type='button' class='btn btn-secondary' onclick="form.reset.click(); suggested.innerHTML= ''; cep.value = '${item.cep}'; searchAddress();" value='Usar Este CEP'> </input> <br>`;
        }
    });
    suggested.innerHTML = suggestions;
}