let nomeUser = {};
let nome;

// let ultimaMensagem = document.querySelector('ul').lastChild;

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

setInterval(pegarMensagem, 3000)
function renderizarMensagens(mensagens){
   
    const ulmensagens = document.querySelector('ul');
    ulmensagens.innerHTML = '';
    for (i = 0; i < mensagens.data.length; i++ ){
       ulmensagens.innerHTML += `<li class = "${mensagens.data[i].type}">
      <p><span class = "time"> (${mensagens.data[i].time})</span> <span class = "from"> ${mensagens.data[i].from} </span> <span class = "text">${mensagens.data[i].text}</span></p></li>`
    }
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
   promessaEnvio.catch(resolverProblema);
}

function renderizarMinhaMensagem(){
   const ulMensagens = document.querySelector('ul');
   minhaMensagem = `<li class="message"> <span> ${objeto.nome} </span>
   <span>${objeto.to}</span>
   <span>${objeto.texto}</span>
   </li>`;
   
   ulMensagens += minhaMensagem;
   
}
console.log()
// function atualizarChat(){

//    const ultimaMensagem = document.querySelector('.ul').lastChild;
//    ultimaMensagem.scrollIntoView();
// }
// atualizarChat()


function resolverProblema(erro){
          alert("Por favor, escolher outro nome");
          enviarNome();
      
      }

      // function enviarMensagem(this){
    
      //        const mensagemInput = document.querySelector(".divMensagem input");
      //        mensagem.from = nome.name;
      //        mensagem.text = mensagemInput.value;
      //        mensagemInput.value = "";
          
      //        if(mensagem.to === ""){
      //           mensagem.to = "Todos";
      //        }
      //        if(mensagem.type === ""){
      //           mensagem.type = "message";
      //        }
          
      //        const promessa = axios.post("https://mock-api.driven.com.br/api/v4/uol/messages", mensagem);
      //        promessa.then(carregarMensagens);
      //        promessa.catch(tratarErroEnvio);
      //        }

// function logou(){
//     renderizarMensagens();
//     setInterval(manterConexão, 5000);
//     setInterval(renderizarMensagens,3000 );

// }




    
// }
// function renderizarMensagens(resposta){
//     const mensagens = resposta.data
//     const ulmensagens = document.querySelector('ul');
//     ulmensagens.innerHTML = '';
    
    
//     for(let i = 0; i < mensanges.lenght; i++){
//         if(mensagens[i].type === "status"){
//             const remetente = mensagens[i].from;
//             const texto = mensagens[i].text;
//             const hora = mensagens[i].time; 
              
//             ulMensagens.innerHTML += `<li class = "status" data-identifier="message">
//             <p><span class = "time"> (${hora}) </span> <span class = "from"> ${remetente} </span> <span class = "text">${texto}</span></p>
//         </li>`
//          }
//          if(mensagens[i].type === "message"){
//             const remetente = mensagens[i].from;
//             const texto = mensagens[i].text;
//             const hora = mensagens[i].time;
//             const destinatario = mensagens[i].to;
         
//          ulMensagens.innerHTML += `<li class = "message" data-identifier="message">
//            <p><span class = "time"> (${hora}) </span> <span class = "from"> ${remetente} </span> para <span class = "to"> ${destinatario}:</span> <span class = "text">${texto}</span></p>
//         </li>`
//          }
//          if(mensagens[i].type === "private_message"){
//             const remetente = mensagens[i].from;
//             const texto = mensagens[i].text;
//             const hora = mensagens[i].time;
//             const destinatario = mensagens[i].to;
//             if(nome.name === destinatario || nome.name === remetente || mensagens[i].to === "Todos"){
//                ulMensagens.innerHTML += `<li class = "private_message" data-identifier="message">
//                <p><span class = "time"> (${hora}) </span> <span class = "from"> ${remetente} </span> reservadamente para <span class = "to"> ${destinatario}:</span> <span class = "text">${texto}</span></p>
//                </li>`
//             }
        
//          }
//       }
//       const ultimaMensagem = document.querySelector('ul').lastChild;
//          if(ultimaMensagem.innerHTML !== ultimaMensagem.innerHTML){
//          ultimaMensagem = document.querySelector('ul').lastChild;
//          ultimaMensagem.scrollIntoView();
//       }
//    } 

// 
//
 
