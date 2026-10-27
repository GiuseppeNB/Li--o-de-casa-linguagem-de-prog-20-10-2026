let nomes = []; 
let emails = [];
let usuarios = [];
let senhas = [];

function cadastrarUsuario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let usuario = document.getElementById("novo-usuario").value;
    let senha = document.getElementById("nova-senha").value;

    if (nome.trim() === "" || email.trim() === "" || usuario.trim() === "" || senha.trim() === "") {
        alert("Cadastro não realizado! Preencha todos os campos abaixo!");
    }
    else {
        nomes.push(nome);
        emails.push(email);
        usuarios.push(usuario);
        senhas.push(senha);

        alert("Cadastro realizado com sucesso!");
    }
}

function entrar() {
    let usuario = document.getElementById("usuario").value.trim();
    let senha = document.getElementById("senha").value;

    let encontrou = false;
    let i;

    if (usuario === "" || senha.trim() === "") {
        alert("Digite todas as informações para entrar!");
        return;
    }

    for (i = 0; i < usuarios.length; i++) {
        if (usuario === usuarios[i]) {
            encontrou = true;
            break;
        }
    }

    if (encontrou === true) {
        if (senha === senhas[i]) {
            alert("Login realizado com sucesso!");
            
            sessionStorage.setItem("nomeUsuarioLogado", nomes[i]);

            window.location.href = "dashboard.html";
        }
        else {
            alert("Senha incorreta! Tente novamente.");
        }

    }
    else {
        alert("Usuário não encontrado! Verifique as informações.");
    }
}


function exibirNome() {
    let elementoNome = document.getElementById("nome-usuario");

    if (elementoNome !== null) {
        let nomeLogado = sessionStorage.getItem("nomeUsuarioLogado");

        if (nomeLogado !== null) {
            elementoNome.textContent = nomeLogado;
        }
        else {
            window.location.href = "index.html";
        }
    }
}