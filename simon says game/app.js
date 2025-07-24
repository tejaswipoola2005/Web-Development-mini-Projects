let started=false;
let level=0;
let highscore=0;
let gameseq=[];
let userseq=[];
let fail=false;
let allcolors=["green","yellow","red","violet"];

document.addEventListener("click",(e)=>{
    if(!started){
        started=true;
          setTimeout(()=>{
             levelup();
           },200);
       
    }
});

let btns=document.querySelectorAll("button");
for(btn of btns){
    btn.addEventListener("click",(e)=>{
        usercheck(e);
    })
}


function levelup(){
    if(highscore<level){
        highscore=level;
    }
      level++;
   
     let h3=document.querySelector('h3');
     h3.innerHTML=`Level ${level}`;
let color=allcolors[Math.floor((Math.random())*4)];
gameseq.push(color);
    setTimeout(()=>{colorchange(color)},1000);
 
}

function colorchange(color){
let btn=document.getElementById(color)
    btn.style.backgroundColor="white";
setTimeout(()=>{
    btn.style.backgroundColor=color;
},200);
}
 let h1=document.createElement('h1');
function usercheck(e){

 if(e.target.nodeName=="BUTTON"){
    let color=e.target.id;

    colorchange(color);
    userseq.push(color);
  
     console.log(color,gameseq[userseq.length-1])
    if(color==gameseq[userseq.length-1]){
    if(userseq.length==level){ 
        userseq=[];
        levelup();
    }
    }else{ 
            h1.innerHTML="Game failed! Resarted to level 1</br>click anywhere to restart";
            console.dir(h1);
            let body=document.querySelector('body');
            body.appendChild(h1);
            body.style.backgroundColor="red";
          
            setTimeout(()=>{
                reset();
                h1.innerText="";
                body.style.backgroundColor="white";
            },2000);
        
    
    }
    
 }   
}

function reset(){
gameseq=[];
userseq=[];
level=0;
started=false;
let h2=document.querySelector('h2');
h2.innerHTML=`Highest Score ${highscore}`;
}




