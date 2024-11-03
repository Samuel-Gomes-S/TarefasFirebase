import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmVZV86ovekWaMaj4WoRwBSOW549an1sM",
    authDomain: "tarefas-4b5d8.firebaseapp.com",
    projectId: "tarefas-4b5d8",
    storageBucket: "tarefas-4b5d8.firebasestorage.app",
    messagingSenderId: "58914819891",
    appId: "1:58914819891:web:c2ba577ba46ee774bf7846",
    measurementId: "G-WT79RW6SSY"
};

const firebaseApp = initializeApp(firebaseConfig) // configuração do firebase

const db = getFirestore(firebaseApp) // conexão com o banco

const auth = getAuth(firebaseApp) // conexão para a autenticação

export { db, auth }