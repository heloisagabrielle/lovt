//console.log('JS externo funcionou!');
//console.log(window);

//alert('Seja bem vinde!'); // mensagem para usuário

//let adulto = confirm('Você tem mais de 18 anos?'); // retorna booleano

//let nomeUsuario = prompt('Qual seu nome?'); // retorna texto inserido pelo usuario
let nomeUsuario = 'Hendy'; 

let elementHeader = document.querySelector('.olaUsuario'); // seleciona o elemento html
console.log(elementHeader);

//elementHeader.innerText = `Olá, ${nomeUsuario}`; // atribui conteudo ao elemento selecionado
elementHeader.innerHTML += `<strong>Olá, ${nomeUsuario}</strong>`;


let logo = document.getElementById('logo');
console.log(logo);

logo.style.color = "orange";

const toggleMode = () => {
    document.body.classList.toggle("dark-mode");
}

setTimeout(() => {
    document.querySelector('.modal').style.display = "flex";
}, 5000)

const btnClose = () => {
    document.querySelector('.modal').style.display = "none";
}


// document.querySelector("#btn-submit-contact").addEventListener("click", (evento) => {
//     evento.preventDefault(); // cancelando o envio temporariamente

//     let nomeValue = document.querySelector("#input_nome").value;
//     let emailValue = document.querySelector("#input_email").value;

//     console.log(nomeValue);
//     console.log(emailValue);
// });

let formContact = document.querySelector("#form_contact");

formContact.addEventListener("submit", (evento) => {
    // interrompo o envio do formulário
    evento.preventDefault();

    let nomeValue = document.querySelector("#input_nome").value;
    let emailValue = document.querySelector("#input_email").value;
    let telValue = document.querySelector("#input_telefone").value;
    let mensValue = document.querySelector("#mensagem").value;

    // validar se todos os campos estão preenchido
    if (nomeValue && emailValue && telValue && mensValue){
        console.log("Campos preenchidos");
    }

    // validar se nome tem 2 ou mais caracteres
    if(nomeValue.length >= 2){
        console.log("Nome contém 2 ou mais caracteres");
    }
   
    // validar se telefone tem no minimo 8 caracteres
    if(telValue.length >= 8){
        console.log("Telefone tem no mínimo 8 caracteres");
    }else{
        console.log("Telefone contém menos que 8 caracteres");
    }

    // validar se o campo email tem @ (Google - validação email com regex)
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    testeRegex = regex.test(emailValue);
    //console.log(testeRegex); 

    if (testeRegex == false) {
        console.log("Email não existe");
    } else {
        console.log("Email válido");
    }

});