// Importe as funções necessárias das bibliotecas Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

// Sua configuração Firebase para o aplicativo da web
const firebaseConfig = {
    apiKey: "AIzaSyByDQm_wd5iGBUK-V-IlL439tV7rqiJgog",
    authDomain: "artwork-5ac19.firebaseapp.com",
    projectId: "artwork-5ac19",
    storageBucket: "artwork-5ac19.appspot.com",
    messagingSenderId: "495276044369",
    appId: "1:495276044369:web:2639af587284b7b596c870"
  };
  
// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

// Capture elementos HTML
var email = document.getElementById("Email");
var senha = document.getElementById("senha");

function verificarLogin(e) {
    e.preventDefault();
    var obj = {
      email: email.value,
      senha: senha.value
    };
  
    // Tentar fazer login com email e senha
    signInWithEmailAndPassword(auth, obj.email, obj.senha)
      .then((userCredential) => {
        // Login bem-sucedido, redirecionar para a página principal.html
        console.log("Usuário autenticado:", userCredential.user);
        window.location.href = "principal"; // Supondo que principal.html está no mesmo diretório
      })
      .catch((error) => {
        // Lidar com erros de autenticação aqui
        console.error("Erro de autenticação:", error);
  
        // Exibir uma mensagem de erro para o usuário
        var mensagemErro = document.getElementById("mensagemErro");
        mensagemErro.textContent = "Usuário não cadastrado. Verifique seu email e senha.";
      });
  }

// Associar a função "verificarLogin" a um evento, como o clique em um botão
Exemplo: document.getElementById("loginButton").addEventListener("click", verificarLogin);
