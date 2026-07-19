import { auth } from "./firebase.js";

import {
signInWithEmailAndPassword,
sendEmailVerification
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const form = document.getElementById("loginForm");

form.addEventListener("submit", async(e)=>{

e.preventDefault();

const email=document.getElementById("email").value.trim();
const password=document.getElementById("password").value;

try{

const userCredential =
await signInWithEmailAndPassword(
auth,
email,
password
);

const user = userCredential.user;

if(!user.emailVerified){

await sendEmailVerification(user);

alert("আপনার Email Verify করা হয়নি। নতুন Verification Email পাঠানো হয়েছে।");

return;

}

localStorage.setItem("uid",user.uid);

window.location.href="dashboard.html";

}catch(error){

alert(error.message);

}

});
