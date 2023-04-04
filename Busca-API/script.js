const cep = document.getElementById("cep");
const rua = document.getElementById("rua");
const bairro = document.getElementById("bairro");
const cidade = document.getElementById("cidade");
const estado = document.getElementById("estado");

const endereco = [];
endereco.push(rua, bairro, cidade, estado);

const btnBusca = document.querySelector("#btn-busca");
const btnLimpa = document.querySelector("#btn-limpa")

btnBusca.addEventListener("click", (btn) => {
    btn.preventDefault();
    buscarCEP();
})

btnLimpa.addEventListener("click", () => {
    endereco.forEach(element => {
        element.value = ''
    })
})

function buscarCEP(){
    if(cep.value){
        const valorCep = cep.value.replace("-", "");
        try {
            const promise = fetch(`https://viacep.com.br/ws/${valorCep}/json/`, {
                method: "get",
            });
            // a função fetch() retorna uma promise que resolve com um objeto response
            // assim que a resposta HTTP é recebida
            promise.then((response) => {
                const jsonPromise = response.json();
                jsonPromise.then((data) => {
                    if (data.localidade) {
                        estado.value = `${data.uf}`
                        cidade.value = `${data.localidade}`;
                        bairro.value = `${data.bairro}`;
                        rua.value = `${data.logradouro}`;
                    }
                });
            });
        } catch (e) {
            console.error(e);
        } 
    }
}