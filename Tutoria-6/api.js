const cep = document.querySelector('#inputCEP')
const endereco = document.querySelector('#inputAddress')
const complemento = document.querySelector('#inputComplemento')
const bairro = document.querySelector('#inputBairro')
const cidade = document.querySelector('#inputCity')
const estado = document.querySelector('#inputEstado')

const buttonGetCep = document.querySelector('#getCEP')
const buttonGetAddress = document.querySelector('#getAddress')
const url = 'https://viacep.com.br/ws'
const options = {
    mode: 'cors',   
    headers: {
        'content-type': 'application/json'
    }
}

buttonGetAddress.addEventListener('click', () => {
    try{
        fetch(`${url}/${cep.value}/json/`,options).then(
            response => response.json()
        ).then(
            data => {
                if(data.erro){
                    alert('Não foi possivel buscar o endereço')
                }
                preencheCamposComCEP(data)
            }
        )
    }catch(err){
        console.log(err)
    }
})

buttonGetCep.addEventListener('click', () => {
    try{
        fetch(`${url}/${estado.value}/${cidade.value}/${endereco.value}/json/`,options).then(
            response => response.json()
        ).then(
            data => {
                if(data.erro){
                    alert('Não foi possivel buscar o cep')
                }
                preencheCEPComCampos(data[0])
            }
        )
    }catch(err){
        console.log(err)
    }
})

async function preencheCEPComCampos(data) {
    cep.value = data.cep
}
async function preencheCamposComCEP(data) {
    endereco.value = data.logradouro
    complemento.value = data.complemento
    bairro.value = data.bairro
    cidade.value = data.localidade
    estado.value = data.uf
}