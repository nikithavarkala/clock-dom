let hr=document.querySelector('.hr');
let mins=document.querySelector('.min');
let secs=document.querySelector('.sec');
let apm=document.querySelector('.t2');
let msg=document.querySelector('.msgbox');
let gm=document.querySelector('.gm');
let pic=document.querySelector('.pic');
// let pic=document.querySelector('img');


function time(){
    let date=new Date();
    let hrs =date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();
    if (hrs >= 12){
        apm.innerText = "PM";
    } 
    else {
        apm.innerHTML = "AM";
    }   
    if(hrs>12){
        hrs=hrs-12;
    } 
    hr.innerHTML=`${hrs}`;
    mins.innerText=min;
    secs.innerText=sec;
    if(hr.innerText>=8 && hr.innerText<12 && apm.innerText==="AM"){
        msg.innerText=msg.innerText;
    }
    else if(hr.innerText>=12 && hr.innerText<4 && apm.innerText ==="PM"){
        msg.innerHTML="<h1>LET'S HAVE SOME LUNCH !!</h1>";
    }
    else if(hr.innerText>=4 && hr.innerText<7 && apm.innerText==="PM"){
        msg.innerHTML="<h1 >STOP YAWING,GET SOME TEA..ITS JUST EVENING!</h1>";
        // style=font-size:20px;
    }
    else if(hr.innerText>=7){
        if(hr.innerText<=11 && apm.innerText=="PM"){
            msg.innerHTML="<h1>CLOSE YOUR EYES AND GO TO SLEEP</h1>";
        }
        else if(hr.innerText>=12 && hr.innerText<=7 && apm.innerText==="AM"){
            msg.innerHTML="<h1>CLOSE YOUR EYES AND GO TO SLEEP</h1>";
        }
    }
}
setInterval(()=>{
    time();
},1000)

function set(){
    // let btn=document.querySelector('button');
    // btn.innerText="Pary Time!";
    let wakeup=document.querySelector('.wake').options[document.querySelector('.wake').selectedIndex].text;
    let lunch=document.querySelector('.lunch').options[document.querySelector('.lunch').selectedIndex].text;
    let nap=document.querySelector('.nap').options[document.querySelector('.nap').selectedIndex].text;
    let night=document.querySelector('.night').options[document.querySelector('.night').selectedIndex].text;

    document.querySelector('.wt').innerText=wakeup;
    document.querySelector('.lt').innerText=lunch;
    document.querySelector('.nt').innerText=nap;
    document.querySelector('.ngt').innerText=night;

    let date=new Date();
    let hrs =date.getHours();

    const select1=document.querySelector('.wake').value;
    const select2=document.querySelector('.lunch').value;
    const select3=document.querySelector('.nap').value;
    const select4=document.querySelector('.night').value;

    if(hrs===parseInt(select1)){
        // console.log("gm");
        gm.innerHTML="GOOD MORGNING!! WAKE UP !!";
        pic.src="./Component 30 – 1.svg";
    }
    if(hrs===parseInt(select2)){
        gm.innerHTML="GOOD AFTERNOON!! TAKE SOME SLEEP";
        pic.src="./Component 31 – 1.svg";
    }
    if(hrs===parseInt(select3)){
        gm.innerHTML="GOOD EVENINGS !!";
        pic.src="./lunch_image.png";

    }
    if(hrs===parseInt(select4)){
        gm.innerHTML="GOOD NIGHT !!";
        pic.src="./Component 32 – 1.svg";

    }
}

