import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQV7JO_IxkFalanvSIai9yXQ4usYnRP08",
  authDomain: "createdbooking.firebaseapp.com",
  projectId: "createdbooking",
  storageBucket: "createdbooking.appspot.com",
  messagingSenderId: "953240544449",
  appId: "1:953240544449:web:adf250a581e2ab1773e040"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth=getAuth();

const submit=document.getElementById('submit');
submit.addEventListener("click",
    function(event){
        event.preventDefault()
        const email=document.getElementById('email').value;
            const password=document.getElementById('password').value;

            signInWithEmailAndPassword(auth,email,password)
            .then((userCredential)=>{
                const user=userCredential.user;
                window.location.href="teacherDashbord.html";
            })
            .catch((error)=>{
                const errorCode=error.code;
                const errorMessage=error.message;
                alert(errorMessage)
            });

    }
)