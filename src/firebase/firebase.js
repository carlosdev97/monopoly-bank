// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDNEmKXxZ0WmN71yaNo-SZ7UnFeXnB65E",
  authDomain: "monopoly-bank-3981c.firebaseapp.com",
  projectId: "monopoly-bank-3981c",
  storageBucket: "monopoly-bank-3981c.firebasestorage.app",
  messagingSenderId: "889178058588",
  appId: "1:889178058588:web:cab856e6f0aa85f8301b99"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);
const auth = getAuth(appFirebase);

export default {appFirebase, db, auth};

export function nameDatabase() {
    console.log ("nameDatabase" + db.app.name);
}


export const onChangeUser = (setUsuario) => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        const usuario = user ? user.displayName || user.email : null
        setUsuario(usuario)
    })
}

export const onSingOut = () => {
    const auth = getAuth()
    signOut( auth )
}

export const registerUsuario = (email, password, username) => {
    const auth = getAuth()

    if (!email || !password) 
    return
    

    createUserWithEmailAndPassword(auth, email, password)
    .then((result) => console.log(result))
    .catch((err) => alert(handleError(err.code, err.message)))
}

export const loginUsuario = (email, password) => {
    const auth = getAuth()

    if (!email || !password) 
    return

    signInWithEmailAndPassword(auth, email, password)
    .then((result) => console.log(result))
    .catch((err) => alert(handleError(err.code, err.message)))
}

function handleError(code, message) {
    switch (code) {
        case 'auth/invalid-email':
            return 'El correo electrónico no es válido.'
        case 'auth/user-not-found':
            return 'El usuario no existe.'
        case 'auth/wrong-password':
            return 'La contraseña es incorrecta.'
        case 'auth/weak-password':
            return 'La contraseña debe tener al menos 6 caracteres.'
        case 'auth/email-already-in-use':
            return 'El correo electrónico ya está en uso.'
        case 'auth/invalid-credential':
            return 'Los credenciales no son válidos.'    
        default:
            return message
    }
}