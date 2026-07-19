import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
sendEmailVerification
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
ref,
set
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const form=document.getElementById("registerForm");

form.addEventListener("submit",async(e)=>{

e.preventDefault();

const name=document.getElementById("name").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;

try{

const userCredential=
await createUserWithEmailAndPassword(
auth,
email,
password
);

const user=userCredential.user;

await set(
ref(db,"users/"+user.uid),
{
uid:user.uid,
name:name,
email:email,
role:"user",
premium:false,
joinDate:Date.now()
}
);

await sendEmailVerification(user);

alert("Registration Successful. Verify your email.");

window.location.href="login.html";

}catch(err){

alert(err.message);

}

});


