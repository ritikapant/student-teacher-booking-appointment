 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 import { 
    getDatabase,
    ref,
    child,
    get,
    set,
    update,
    remove,
 } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

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

 const addbtn=document.getElementById("add-teacher-btn");
 addbtn.addEventListener("click",function(event){
    event.preventDefault();

    let name=document.getElementById("name").value;
    let idno=document.getElementById("id-no").value;
    let dept=document.getElementById("depertment").value;
    let sub=document.getElementById("subject").value;

    set(ref(db,"TeacherList/"+idno),{
        Id_No:idno,
        Name:name,
        Depertment:dept,
        Subject:sub,
    })
    .then(()=>{
        alert("Teacher Added Successfully");
    })
    .catch((error)=>{
        alert("Unsuccessfull");
        console.log(error);
    });
    });

    const updatebtn=document.getElementById("update-teacher-btn");

    updatebtn.addEventListener("click",function(event){
        event.preventDefault();

        let name=document.getElementById("name1").value;
        let idno=document.getElementById("id-no1").value;
        let dept=document.getElementById("depertment1").value;
        let sub=document.getElementById("subject1").value;

        
        update(ref(db,"TeacherList/"+idno),{
            Id_No:idno,
            Name:name,
            Depertment:dept,
            Subject:sub,
        })
        .then(()=>{
            alert("Teacher Updated Successfully");
        })
        .catch((error)=>{
            alert("Unsuccessfull");
            console.log(error);
        });
    });

    const deletebtn=document.getElementById("delete-teacher-btn");

    deletebtn.addEventListener("click",function(event){
        event.preventDefault();
        let idno=document.getElementById("id-no2").value;

        remove(ref(db,"TeacherList/"+ idno))
        .then(()=>{
            alert("Teacher Deleted Successfully");
        })
        .catch((error)=>{
            alert("Unsuccessfull");
            console.log(error);
    });
 });
