// Importe as funções necessárias do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
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
const firestore = getFirestore();  // Obtenha uma referência para o Firestore

// Captura elementos HTML
var nomecompleto = document.getElementById("NomeCompleto");
var email = document.getElementById("Email");
var telefone = document.getElementById("Telefone");
var cpf = document.getElementById("cpf");
var senha = document.getElementById("senha");
var tipoUser1 = document.getElementById("tipoUser1");
var tipoUser2 = document.getElementById("tipoUser2");
var genero1 = document.getElementById("genero1");
var genero2 = document.getElementById("genero2");
var genero3 = document.getElementById("genero3");

// Função para registrar os dados
window.registrar = function (e) {
  e.preventDefault();

  // Verifica qual tipo de usuário foi selecionado
  var tipoUser = tipoUser1.checked ? "Artista" : "Usuario";

  // Verifica qual gênero foi selecionado
  var genero = genero1.checked ? "Masculino" : (genero2.checked ? "Feminino" : "Outro");

  // Cria um objeto com os dados do usuário
  var obj = {
    nomecompleto: nomecompleto.value,
    email: email.value,
    telefone: telefone.value,
    cpf: cpf.value,
    senha: senha.value,
    tipoUser: tipoUser,
    genero: genero
  };

  // Cria um usuário com email e senha no Firebase Authentication
  createUserWithEmailAndPassword(auth, obj.email, obj.senha)
    .then((userCredential) => {
      // Usuário registrado com sucesso no Firebase Authentication
      console.log("Usuário registrado com sucesso:", userCredential.user);

      // Adiciona dados ao Firestore
      addDoc(collection(firestore, "usuarios"), {
        nomecompleto: obj.nomecompleto,
        email: obj.email,
        telefone: obj.telefone,
        cpf: obj.cpf,
        tipoUser: obj.tipoUser,
        genero: obj.genero,
        userId: userCredential.user.uid
      })
      .then((docRef) => {
        // Documento adicionado com sucesso ao Firebase Firestore
        console.log("Documento adicionado com ID: ", docRef.id);

        // Redireciona para a página de login (ou para a página inicial, ajuste conforme necessário)
        window.location.href = "/";
      })
      .catch((error) => {
        // Trata erros ao adicionar documento ao Firestore
        console.error("Erro ao adicionar documento ao Firestore: ", error);
      });
    })
    .catch((error) => {
      // Trata erros ao registrar usuário no Firebase Authentication
      console.error("Erro ao registrar usuário:", error);
    });
}
