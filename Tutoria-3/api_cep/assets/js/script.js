const botao_por_cep = document.querySelector('.botao_por_cep')
const botao_por_cidade = document.querySelector('.botao_por_cidade')

// PEGAR OS DADOS DA CIDADE A PARTIR DO CEP
botao_por_cep.addEventListener("click", ()=>{
    let cep = document.querySelector("#cep").value;
  
    if (cep.length !== 8) {
      alert("CEP Inválido!");
  
      return;
    }
  
    let url = `https://viacep.com.br/ws/${cep}/json/`;
  
    fetch(url).then((response) => {
      response.json().then(mostrarEndereco);
    });
  })

// MOSTRAR OS DADOS DA CIDADE A PARTIR DO CEP
function mostrarEndereco(dados) {
  let rua = document.querySelector("#rua");
  let complemento = document.querySelector("#complemento");
  let bairro = document.querySelector("#bairro");
  let cidade = document.querySelector("#cidade");
  let estado = document.querySelector("#estado");

  console.log(dados);
  rua.value = dados.logradouro;
  complemento.value = dados.complemento;
  bairro.value = dados.bairro;
  cidade.value = dados.localidade;
  estado.value = dados.uf;
}

// PEGAR E MOSTRAR OS DADOS DA CIDADE A PARTIR DO ESTADO, CIDADE E RUA
botao_por_cidade.addEventListener('click', (e)=>{
  e.preventDefault()

  let estado = document.querySelector('#estado').value
  let cidade = document.querySelector('#cidade').value
  let rua = document.querySelector('#rua').value

  if(estado.length >= 2 && cidade.length >= 3 && rua.length >= 3){
    fetch(`https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`)
    .then(response => response.json())
    .then((dados)=>{
    let cep = document.querySelector("#cep");
    let bairro = document.querySelector('#bairro')

    cep.value = dados[0].cep
    bairro.value = dados[0].bairro
    console.log(dados)

  })
  }
  else{
    alert('Verifique se todos os campos estão preenchidos corretamente!')
  }

  
})

