const hourel = document.getElementById("hour")
const minuitel = document.getElementById("minutes")
const secondel = document.getElementById("seconds")


function updayedate(){
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();


    document.getElementById("hour").innerText=h
    minuitel.innerText=m;
    secondel.innerText=s
}

updayedate()