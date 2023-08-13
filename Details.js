// getting refernces to interactive elements
const txtfname=document.getElementById("fname");
const selectmnum=document.getElementById("phone");
const txtmnum=document.getElementById("Mnum");
const txtemail=document.getElementById("email");
const txtCemail=document.getElementById("Cemail");
const selectgender=document.getElementById("Gender");
const btnCont=document.getElementById("paybtndis");

//add event listners
txtfname.addEventListener("input",FullName);
selectmnum.addEventListener("change",Countrycode);
txtmnum.addEventListener("input",MobileNumber);
txtemail.addEventListener("input",Email);
txtCemail.addEventListener("input",ConfirmEmail);
selectgender.addEventListener("change",Gender);
btnCont.addEventListener("click",Continue);
window.addEventListener("load",init);

// functions
//init
function init(){
    document.getElementById("disdate").innerHTML=localStorage.getItem("PickedDate");
    document.getElementById("duraT").innerHTML=localStorage.getItem("Duration");
    document.getElementById("timeT").innerHTML=localStorage.getItem("TimeRange");
    document.getElementById("calSAT").innerHTML=localStorage.getItem("SAcharge");
    document.getElementById("calSCT").innerHTML=localStorage.getItem("SCcharge");
    document.getElementById("calFAT").innerHTML=localStorage.getItem("FAcharge");
    document.getElementById("calFCT").innerHTML=localStorage.getItem("FCcharge");
    document.getElementById("calIT").innerHTML=localStorage.getItem("Icharge");
    document.getElementById("Ttotal").innerHTML=localStorage.getItem("Total");


}
function FullName(){
    let fn=document.getElementById("fname").value;
    const fnRegEx=/^[A-Za-z\s]+$/;
    if (fn==""){
        txtfname.placeholder="Please fill out this field";
        txtfname.classList="required";
        return false;
    }else if(!fnRegEx.test(fn)){
        txtfname.classList="required";
        
    }
    else{
        txtfname.classList="filled";
        localStorage.setItem("FullName",fn);
        Validity();
        return true;
    }

}
function Countrycode(){
    let code=selectmnum.value;
    localStorage.setItem("Code",code);
    selectmnum.classList="filled";
    localStorage.setItem("CountryCode",code);
}
function MobileNumber(){
    let mn=txtmnum.value;
    const mnRegEx=/^([0-9]{9})+$/;
    if(mn==''){
        txtmnum.classList="required";
        return false;
    }else if(!mnRegEx.test(mn)){
        txtmnum.classList="required";
        return false;
    }else{
        txtmnum.classList="filled";
        localStorage.setItem("MobileNumber",mn);
        Validity();

    }

}
function Email(inputText){
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let em=txtemail.value;
    if(em==''){
        txtemail.classList="required";
        return false;
    }else if(!mailformat.test(em)){
        txtemail.classList="required";
    }
    else{
        txtemail.classList="filled";
        localStorage.setItem("Email",em);
        Validity();
        
    }

}

function ConfirmEmail(){
    let Cem=txtCemail.value;
    if(Cem==""){
        txtCemail.classList="required";
    }else if(Cem==txtemail.value){
        txtCemail.classList="filled";
        localStorage.setItem("ConfirmEmail",Cem);
        Validity();
    }else{
        txtCemail.classList="required"; 
    }

}
function Gender(){
    // add local storage here
    let gen=document.getElementById("Gender").value;
    localStorage.setItem("Gender",gen);

}
function Validity(){
    if(txtfname.classList=="filled"&&txtmnum.classList=="filled"&&txtemail.classList=="filled"&&txtCemail.classList=="filled"){
        btnCont.id="paybtn";
        btnCont.disabled=false;

    }
}

function Continue(){
    

}