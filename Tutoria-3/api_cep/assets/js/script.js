const botao_pesquisar = document.querySelector('.botao_pesquisar')

botao_pesquisar.addEventListener("click", ()=>{
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
