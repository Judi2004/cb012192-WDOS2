//getting references to interactive elements
const radiotype=document.getElementsByName("ctype");
const txtcnum=document.getElementById("cnum");
const Monthexp=document.getElementById("expMonth");
const Yearexp=document.getElementById("expYear");
const txtcvvnum=document.getElementById("cvvnum");
const txtcardname=document.getElementById("cardname");
const btnContpay=document.getElementById("paybtndis");

//add event listners
txtcnum.addEventListener("input",CardNumber);
Monthexp.addEventListener("change",ExpiryMonth);
Yearexp.addEventListener("change",ExpiryYear);
txtcvvnum.addEventListener("input",CVVCVCnum);
txtcardname.addEventListener("input",CardName);
btnContpay.addEventListener("click",Continueconfirm);
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
    let tot=document.getElementById("Ttotal").innerHTML=localStorage.getItem("Total");
    document.getElementById("paybtndis").value=`Pay $ ${tot}.00`;


}
function CardNumber(){
    const amercard= /^(?:3[47][0-9]{13})$/;
    const visacard=/^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const mastcard=/^(?:5[1-5][0-9]{14})$/;
    let cardno=txtcnum.value;
    if(document.getElementById("american").checked==true){
        if(amercard.test(cardno)){
            txtcnum.classList="filled";
            Validity();
            return true;
            
        }
    }else if(document.getElementById("visa").checked==true){
        if(visacard.test(cardno)){
            txtcnum.classList="filled";
            Validity();
            return true;
        }
    }else if(document.getElementById("master").checked==true){
        if(mastcard.test(cardno)){
            txtcnum.classList="filled";
            Validity();
            return true;
        }
    }else if(txtcnum.value=''){
        txtcnum.classList="required";
        return false;
    }else{
        txtcnum.classList="required"
        return false;
    }

}//complete the above function
const tdate=new Date();
function ExpiryMonth(){
    let todaymonth=tdate.getMonth();
    if(todaymonth!=Monthexp.value){
        Monthexp.classList="filled";
        Validity();
    }


}
function ExpiryYear(){
    let todayYear=tdate.getFullYear();
    if(todayYear!=Yearexp.value){
        Yearexp.classList="filled";
        Validity();

    }


}
function CVVCVCnum(){
    const cvvcvc = /^([0-9])+$/;
    let numcvvcvc=txtcvvnum.value;
    if(cvvcvc.test(numcvvcvc)){
        if(numcvvcvc.length==4||numcvvcvc.length==3){
        txtcvvnum.classList="filled";
        Validity();
        return true;
        }
    }else{
        txtcvvnum.classList="required";
    }

}
//some cards dont have names so this is not required
function CardName(){
    let cn=txtcardname.value;
    const cnRegEx=/^[A-Za-z]+$/;
    if (cnRegEx.test(cn)){
        return true;
    }

}
function Validity(){
    if(txtcnum.classList=="filled"&&txtcvvnum.classList=="filled"&&Monthexp.classList=="filled"&&Yearexp.classList=="filled"){
        btnContpay.id="paybtn";
        btnContpay.disabled=false;

    }
}
function Continueconfirm(){

}