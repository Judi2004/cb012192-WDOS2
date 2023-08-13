//getting refernces to interactive elements
// date
const btnDate=document.getElementById("mydate");
// guests
const btnSAplus=document.getElementById("SAplus");
const btnSAminus=document.getElementById("SAminus");
const btnSCplus=document.getElementById("SCplus");
const btnSCminus=document.getElementById("SCminus");
const btnFAplus=document.getElementById("FAplus");
const btnFAminus=document.getElementById("FAminus");
const btnFCplus=document.getElementById("FCplus");
const btnFCminus=document.getElementById("FCminus");
const btnIplus=document.getElementById("Iplus");
const btnIminus=document.getElementById("Iminus");
// duration
const btnduration=document.getElementById("time");
//main button
const btnConttic=document.getElementById("paybtndis");


// add event listners
btnDate.addEventListener("change",displaydate);
btnSAplus.addEventListener("click", SAadd);
btnSAminus.addEventListener("click",SAminus);
btnSCplus.addEventListener("click", SCadd);
btnSCminus.addEventListener("click",SCminus);
btnFAplus.addEventListener("click",FAadd);
btnFAminus.addEventListener("click",FAminus);
btnFCplus.addEventListener("click",FCadd);
btnFCminus.addEventListener("click",FCminus);
btnIplus.addEventListener("click",SFIadd);
btnIminus.addEventListener("click",SFIminus);
btnduration.addEventListener("change",displayduration);
window.addEventListener("load",init);
btnConttic.addEventListener("click",ContinueDetails);


// functions
//init
function init(){
    localStorage.setItem("FullName",null);
    localStorage.setItem("PickedDate",null);
    localStorage.setItem("Duration","1hrs(01 Normal: 00 Peak)");
    localStorage.setItem("TotalHours",1);
    localStorage.setItem("MobileNumber",0);
    localStorage.setItem("Normal",1);
    localStorage.setItem("Peak",0);
    localStorage.setItem("Email",null);
    localStorage.setItem("TimeRange","7.00 am-8.00 am");
    localStorage.setItem("ConfirmEmail",null);
    localStorage.setItem("Total",10);
    localStorage.setItem("SAcharge",0);
    localStorage.setItem("SCcharge",0);
    localStorage.setItem("FAcharge",10);
    localStorage.setItem("FCcharge",0);
    localStorage.setItem("Icharge","free");


}
//date
function displaydate(){
    let x = document.getElementById("mydate").value;
    let y=document.getElementById("disdate");
    y.innerHTML=x;
    localStorage.setItem("PickedDate",x);
    btnConttic.id="paybtn";
    btnConttic.disabled=false;
}
//guests
//SriLankanAdult
let SAperson=0;
function SAadd(){
    SAperson+=1;
    let SAper=document.getElementById("SA").innerHTML=SAperson;
    SAtable=document.getElementById("SAT").innerHTML=`${SAperson} Sri Lankan Adult`;
    SAChargetable=document.getElementById("calSAT").innerHTML=SAChargesfunc();
    document.getElementById("Ttotal").innerHTML=TotalCal();
}
function SAminus(){
    if(SAperson>0){
        SAperson-=1;
        let SAper=document.getElementById("SA").innerHTML=SAperson;
        SAtable=document.getElementById("SAT").innerHTML=`${SAperson} Sri Lankan Adult`;
        SAChargetable=document.getElementById("calSAT").innerHTML=SAChargesfunc();
        document.getElementById("Ttotal").innerHTML=TotalCal();
        
    }
}
//SriLankanChild
let SCperson=0;
function SCadd(){
    SCperson+=1;
    let SCper=document.getElementById("SC").innerHTML=SCperson;
    SCtable=document.getElementById("SCT").innerHTML=`${SCperson} Sri Lankan Child`;
    SCChargetable=document.getElementById("calSCT").innerHTML=SCChargesfunc();
    document.getElementById("Ttotal").innerHTML=TotalCal();
    
}
function SCminus(){
    if(SCperson>0){
        SCperson-=1;
        let SCper=document.getElementById("SC").innerHTML=SCperson;
        SCtable=document.getElementById("SCT").innerHTML=`${SCperson} Sri Lankan Child`;
        SCChargetable=document.getElementById("calSCT").innerHTML=SCChargesfunc();
        document.getElementById("Ttotal").innerHTML=TotalCal();
    }
}
//ForeignAdult
let FAperson=1;
let FAtable;
function FAadd(){
    FAperson+=1;
    let FAper=document.getElementById("FA").innerHTML=FAperson;
    FAtable=document.getElementById("FAT").innerHTML=`${FAperson} Foreign Adult`;
    FAChargetable=document.getElementById("calFAT").innerHTML=FAChargesfunc();
    document.getElementById("Ttotal").innerHTML=TotalCal();
   
}
function FAminus(){
    if(FAperson>0){
        FAperson-=1;
        let FAper=document.getElementById("FA").innerHTML=FAperson;
        FAtable=document.getElementById("FAT").innerHTML=`${FAperson} Foreign Adult`;
        FAChargetable=document.getElementById("calFAT").innerHTML=FAChargesfunc();
        document.getElementById("Ttotal").innerHTML=TotalCal();
    }
}
//ForeignChild
let FCperson=0;
function FCadd(){
    FCperson+=1;
    let FCper=document.getElementById("FC").innerHTML=FCperson;
    FCtable=document.getElementById("FCT").innerHTML=`${FCperson} Foreign Child`;
    FCChargetable=document.getElementById("calFCT").innerHTML=FCChargesfunc();
    document.getElementById("Ttotal").innerHTML=TotalCal();
    
}
function FCminus(){
    if(FCperson>0){
        FCperson-=1;
        let FCper=document.getElementById("FC").innerHTML=FCperson;
        FCtable=document.getElementById("FCT").innerHTML=`${FCperson} Foreign Child`;
        FCChargetable=document.getElementById("calFCT").innerHTML=FCChargesfunc();
        document.getElementById("Ttotal").innerHTML=TotalCal();
        
    }
}
//Infant
let SFIperson=0;
function SFIadd(){
    SFIperson+=1;
    let SFIper=document.getElementById("SFI").innerHTML=SFIperson;
    SFItable=document.getElementById("IT").innerHTML=`${SFIperson} Infant`;
}
function SFIminus(){
    if(SFIperson>0){
        SFIperson-=1;
        let SFIper=document.getElementById("SFI").innerHTML=SFIperson;
        SFItable=document.getElementById("IT").innerHTML=`${SFIperson} Infant`;
    }
}
// duration
let lengthNormal=1;
let lengthPeak=0;
function displayduration(){
    const sleopt=btnduration.selectedOptions;
    const arrayselopt=Array.from(sleopt,Option=>Option.value);

    const first=arrayselopt[0];
    const left=Math.floor(first);

    const last=arrayselopt[arrayselopt.length-1];
    const right=Math.ceil(last);
    let rangetime;
    if(left>=7 && left<=11 && right>=8 && right<=11){
        rangetime=`${left}:00am - ${right}:00am`;
        localStorage.setItem("TimeRange",rangetime);
    }else if(left>=12 && left<=17 && right>=12 && right<=18){
        rangetime=`${left}:00pm - ${right}:00pm`;
        localStorage.setItem("TimeRange",rangetime);
    }else{
        rangetime=`${left}:00am - ${right}:00pm`;
        localStorage.setItem("TimeRange",rangetime);
    }
    document.getElementById("timeT").innerHTML=localStorage.getItem("TimeRange");

    let count=0;
    for(let i of sleopt){
        if(i.id==="peak"){
            count++;
        }
    }
    lengthPeak=count;
    let totalhours=arrayselopt.length;
    lengthNormal=totalhours-lengthPeak;
    localStorage.setItem("Peak",lengthPeak);
    localStorage.setItem("Normal",lengthNormal);
    localStorage.setItem("TotalHours",totalhours);

    const durationcal=`${totalhours}hrs(0${lengthNormal} Normal:0${lengthPeak} Peak)`;
    localStorage.setItem("Duration",durationcal);
    document.getElementById("duraT").innerHTML=localStorage.getItem("Duration");
//updating the charges again
    document.getElementById("calSAT").innerHTML=SAChargesfunc();
    document.getElementById("calSCT").innerHTML=SCChargesfunc();
    document.getElementById("calFAT").innerHTML=FAChargesfunc();
    document.getElementById("calFCT").innerHTML=FCChargesfunc();
    document.getElementById("Ttotal").innerHTML=TotalCal();

}


//calculating charges
let SAcharge=0;
function SAChargesfunc(){
    SAcharge=(((lengthNormal*4)+(lengthPeak*6))*SAperson);
    localStorage.setItem("SAcharge",SAcharge);
    return SAcharge;
}
let SCcharge=0;
function SCChargesfunc(){
    SCcharge=(((lengthNormal*2)+(lengthPeak*3))* SCperson);
    localStorage.setItem("SCcharge",SCcharge);
    return SCcharge;
    
}
let FAcharge=10;
function FAChargesfunc(){
    FAcharge=(((lengthNormal*10)+(lengthPeak*13))* FAperson);
    localStorage.setItem("FAcharge",FAcharge);
    return FAcharge;
}
let FCcharge=0;
function FCChargesfunc(){
    FCcharge=(((lengthNormal*5)+(lengthPeak*8))* FCperson);
    localStorage.setItem("FCcharge",FCcharge);
    return FCcharge;
}
function TotalCal(){
    let totalcalulated=SAcharge+SCcharge+FAcharge+FCcharge;
    localStorage.setItem("Total",totalcalulated);
    return totalcalulated;
}
function ContinueDetails(){

}



