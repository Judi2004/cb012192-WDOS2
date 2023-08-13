// get refernces to intercative elements
let tfullname=document.getElementById("fnamerow");
let tdate=document.getElementById("daterow");
let ttime=document.getElementById("timerow");
let tduration=document.getElementById("durationrow");
let tmobile=document.getElementById("mobilerow");
let temail=document.getElementById("emailrow");
let tgender=document.getElementById("genderrow");
let tSA=document.getElementById("calSAT");
let tSC=document.getElementById("calSCT");
let tFA=document.getElementById("calFAT");
let tFC= document.getElementById("calFCT");
let tIT=document.getElementById("calIT");
let tot=document.getElementById("Ttotal");
let tco=document.getElementById("spancode");

//set items from local storage
tfullname.innerHTML=localStorage.getItem("FullName");
tdate.innerHTML=localStorage.getItem("PickedDate");
ttime.innerHTML=localStorage.getItem("TimeRange");
tduration.innerHTML=localStorage.getItem("Duration");
tmobile.innerHTML=localStorage.getItem("MobileNumber");
temail.innerHTML=localStorage.getItem("Email");
tgender.innerHTML=localStorage.getItem("Gender");
tSA.innerHTML=localStorage.getItem("SAcharge");
tSC.innerHTML=localStorage.getItem("SCcharge");
tFA.innerHTML=localStorage.getItem("FAcharge");
tFC.innerHTML=localStorage.getItem("FCcharge");
tIT.innerHTML=localStorage.getItem("Icharge");
tot.innerHTML=localStorage.getItem("Total");
tco.innerHTML=`+ ${localStorage.getItem("Code")} `;
