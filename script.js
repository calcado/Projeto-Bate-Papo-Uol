let nomeUser = {};
let nome;

let ultimaMensagem = document.querySelector('ul').lastChild;

function enviarNome(){
    const participantes = axios.get('https://mock-api.driven.com.br/api/v6/uol/participants');
    nome = prompt('Qual seu lindo nome?');
    console.log(nome)
    let nomeUser = {name: nome};
    const requisicao = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nomeUser);
    
    requisicao.then(manterConexao);
    requisicao.catch(resolverProblema);
    console.log(nomeUser)
}

enviarNome();
setInterval(manterConexao, 5000)

function manterConexao(){
let conexao = axios.post("https://mock-api.driven.com.br/api/v4/uol/status", nome);

}
function pegarMensagem(){
    const resposta = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    resposta.then(renderizarMensagens);
    
}
pegarMensagem();

setInterval(pegarMensagem, 3000);
function renderizarMensagens(mensagens){
   
    const ulmensagens = document.querySelector('ul');
    ulmensagens.innerHTML = '';
    for (i = 0; i < mensagens.data.length; i++ ){
       ulmensagens.innerHTML += `<li class = "${mensagens.data[i].type}">
      <p><span class = "time"> (${mensagens.data[i].time})</span> <span class = "from"> ${mensagens.data[i].from} </span> <span class = "text">${mensagens.data[i].text}</span></p></li>`
      
   }
   atualizarChat()
}
let objeto;
function enviarMensagem(){
   let texto = document.querySelector("input").value;
   objeto = {
      from: nome,
      to: "todos",
      text: texto,
      type: "message", 
   }
   let promessaEnvio = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', objeto);
   promessaEnvio.then(renderizarMinhaMensagem);
   document.querySelector("input").value = "";
   
}

function renderizarMinhaMensagem(){
   const ulMensagens = document.querySelector('ul');
   ulMensagens.innerHTML += `<li class = "${mensagens.data[i].type}">
   <p> <span class = "from"> ${mensagens.data[i].from}
    </span> <span class = "text">${mensagens.data[i].text}</span></p></li>`
   
  
   
}
console.log(renderizarMensagens)

function atualizarChat(){

   const ultimaMensagem = document.querySelector('ul').lastChild;
   ultimaMensagem.scrollIntoView();

}



function resolverProblema(){
   alert("Por favor, escolher outro nome");
   enviarNome();
      
}

