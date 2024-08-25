import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
        import { getDatabase,
            ref,
            update,
            remove} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";
       
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyBQV7JO_IxkFalanvSIai9yXQ4usYnRP08",
          authDomain: "createdbooking.firebaseapp.com",
          projectId: "createdbooking",
          storageBucket: "createdbooking.appspot.com",
          messagingSenderId: "953240544449",
          appId: "1:953240544449:web:adf250a581e2ab1773e040"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);

        const updatebtn=document.getElementById("update-appointment");
        updatebtn.addEventListener("click",function(event){
            event.preventDefault();
            let idno=document.getElementById("idno11").value;
            let date11=document.getElementById("date11").value;
            let time11=document.getElementById("time11").value;

            update(ref(db,"AppointmentList/"+idno),{
                Date:date11,
                Time:time11,
            })
            .then(()=>{
                alert("Appointment Update Successfully");
            })
            .catch((error)=>{
                alert("Unsuccessfull");
                console.log(error);
            });
        });

        const cancelbtn=document.getElementById("cancel-appointment");
        cancelbtn.addEventListener("click",function(event){
            event.preventDefault();
            let idno12=document.getElementById("idno11").value;

            remove(ref(db,"AppointmentList/"+idno12))
            .then(()=>{
                alert("Appointment Cancelled");
            })
            .catch((error)=>{
                alert("Unsuccessfull");
                console.log(error);
            });
        });

        const ubtn=document.getElementById("update-profile");
        ubtn.addEventListener("click",function(event){
            event.preventDefault();
            let id21=document.getElementById("idno100").value;
            let email21= document.getElementById("email21").value;
             let pass21=document.getElementById("password21").value;

             update(ref(db,"teachers/"+id21),{
                Email:email21,
                Password:pass21,
             })
             .then(()=>{
                alert("Profile Updated Successfully");
             })
             .catch((error)=>{
                alert("Unsuccessfull");
                console.log(error);
             });

        });

        const delbtn=document.getElementById("delete-message");
        delbtn.addEventListener("click",function(event){
            event.preventDefault();
            let roll121=document.getElementById("roll121").value;
            remove(rel(db,"Messages/"+roll121))
            .then(()=>{
                alert("Message Deleted");
            })
            .catch((error)=>{
                alert("Unsuccessfull");
                console.log(error);
            });
        });
