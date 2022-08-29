let nome = { name:""}
let mensagem = {from: "",
to:"",   
 text: "",
 type: "",
time: ""
}


let ultimaMensagem = document.querySelector('ul').lastChild;
let nomeUser = prompt('Qual seu lindo nome?');

function enviarNome(nome){
    let nome = {name: nomeUser};
    const requisicao = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nome);
    requisicao.then(logou);
    requisicao.catch(resolverProblema);
}

function logou(){
    renderizarMensagens();
    setInterval(manterConexão, 5000);
    setInterval(renderizarMensagens,3000 );

}

function manterConexão()
let conexão = axios.post("https://mock-api.driven.com.br/api/v4/uol/status", nome);

function pegarMensagem(){
    
    const resposta = axio.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    resposta.then(mostrarMensagens);
    resposta.catch(resolverProblema);
    
}
function renderizarMensagens(resposta){
    const mensagens = resposta.data
    const ulmensagens = document.querySelector('ul');
    ulmensagens.innerHTML = '';
    
    
    for(let i = 0; i < mensanges.lenght; i++){
        if(mensagens[i].type === "status"){
            const remetente = mensagens[i].from;
            const texto = mensagens[i].text;
            const hora = mensagens[i].time; 
              
            ulMensagens.innerHTML += `<li class = "status" data-identifier="message">
            <p><span class = "time"> (${hora}) </span> <span class = "from"> ${remetente} </span> <span class = "text">${texto}</span></p>
        </li>`
         }
         if(mensagens[i].type === "message"){
            const remetente = mensagens[i].from;
            const texto = mensagens[i].text;
            const hora = mensagens[i].time;
            const destinatario = mensagens[i].to;
         
         ulMensagens.innerHTML += `<li class = "message" data-identifier="message">
           <p><span class = "time"> (${hora}) </span> <span class = "from"> ${remetente} </span> para <span class = "to"> ${destinatario}:</span> <span class = "text">${texto}</span></p>
        </li>`
         }
         if(mensagens[i].type === "private_message"){
            const remetente = mensagens[i].from;
            const texto = mensagens[i].text;
            const hora = mensagens[i].time;
            const destinatario = mensagens[i].to;
            if(nome.name === destinatario || nome.name === remetente || mensagens[i].to === "Todos"){
               ulMensagens.innerHTML += `<li class = "private_message" data-identifier="message">
               <p><span class = "time"> (${hora}) </span> <span class = "from"> ${remetente} </span> reservadamente para <span class = "to"> ${destinatario}:</span> <span class = "text">${texto}</span></p>
               </li>`
            }
        
         }
      }
      const ultimaMensagem = document.querySelector('ul').lastChild;
         if(ultimaMensagem.innerHTML !== ultimaMensagem.innerHTML){
         ultimaMensagem = document.querySelector('ul').lastChild;
         ultimaMensagem.scrollIntoView();
      }
   } 

function resolverProblema(erro){
    alert("Por favor, escolher outro nome")
    window.location.reload()

}
function enviarMensagem(this){
    
    const mensagemInput = document.querySelector(".divMensagem input");
    mensagem.from = nome.name;
    mensagem.text = mensagemInput.value;
    mensagemInput.value = "";
 
    if(mensagem.to === ""){
       mensagem.to = "Todos";
    }
    if(mensagem.type === ""){
       mensagem.type = "message";
    }
 
    const promessa = axios.post("https://mock-api.driven.com.br/api/v4/uol/messages", mensagem);
    promessa.then(carregarMensagens);
    promessa.catch(tratarErroEnvio);
    }
 
