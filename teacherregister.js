import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
import { getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";


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
        const id100=document.getElementById('id100').value;
        const password=document.getElementById('password').value;

            createWithEmailAndPassword(auth,email,password)
            .then(()=>{
               set(ref(database,'teachers/'+id100),{
                Email:email,
                Id_No:id100,
                Password:password
               })
               alert("Account Created Successfully")
            })
            .catch((error)=>{
                const errorMessage=error.message;
                alert(errorMessage)
            });

    }
)