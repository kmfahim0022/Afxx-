import { auth, db } from "./firebase.js";

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
ref,
onValue
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

// Login Check
onAuthStateChanged(auth,(user)=>{

if(!user){

window.location.href="login.html";

return;

}

// Load Dashboard
loadUsers();
loadRevenue();
loadDownloads();
loadRecentUsers();
loadRecentPayments();

});

function loadUsers(){

const usersRef = ref(db,"users");

onValue(usersRef,(snapshot)=>{

let totalUsers = 0;
let premiumUsers = 0;

snapshot.forEach((child)=>{

totalUsers++;

const data = child.val();

if(data.premium===true){

premiumUsers++;

}

});

document.getElementById("totalUsers").innerText = totalUsers;

document.getElementById("premiumUsers").innerText = premiumUsers;

drawChart(totalUsers,premiumUsers);

});

}

function loadRevenue(){

const paymentRef = ref(db,"payments");

onValue(paymentRef,(snapshot)=>{

let total = 0;

snapshot.forEach((item)=>{

const pay = item.val();

if(pay.amount){

total += Number(pay.amount);

}

});

document.getElementById("revenue").innerText =
total + " TK";

});

}

function loadDownloads(){

const downloadRef = ref(db,"downloads");

onValue(downloadRef,(snapshot)=>{

let count = snapshot.size || snapshot.numChildren();

document.getElementById("totalDownloads").innerText =
count;

});

}

function drawChart(users,premium){

const ctx = document.getElementById("analyticsChart");

new Chart(ctx,{

type:"bar",

data:{

labels:[
"Users",
"Premium"
],

datasets:[{

label:"Analytics",

data:[
users,
premium
]

}]

}

});

}

function loadRecentUsers(){

const usersBody =
document.getElementById("usersBody");

const usersRef = ref(db,"users");

onValue(usersRef,(snapshot)=>{

usersBody.innerHTML="";

snapshot.forEach((child)=>{

const data = child.val();

usersBody.innerHTML += `

<tr>

<td>${data.name}</td>

<td>${data.email}</td>

<td>${data.premium ? "Yes":"No"}</td>

</tr>

`;

});

});

}

function loadRecentPayments(){

const paymentBody =
document.getElementById("paymentsBody");

const paymentRef = ref(db,"payments");

onValue(paymentRef,(snapshot)=>{

paymentBody.innerHTML="";

snapshot.forEach((child)=>{

const pay = child.val();

paymentBody.innerHTML += `

<tr>

<td>${pay.user}</td>

<td>${pay.amount} TK</td>

<td>${pay.status}</td>

</tr>

`;

});

});

}
