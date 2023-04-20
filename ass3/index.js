let i=1
let x 
let sec = document.getElementById("sec")
    let min = document.getElementById("min")
    let hrs = document.getElementById("hrs")
let msec = document.getElementById("msec")

let lc=1;
let prevlap = 0;




let button2 = document.getElementById("button2")
let buttond = document.getElementsByClassName("buttond")
let buttone = document.getElementsByClassName("buttone")
let button1 = document.getElementById("button1")
let button3 = document.getElementById("button3")

let laptime = document.getElementById("laptime")
let lapcount = document.getElementById("lapcount")


button3.addEventListener("click",printlap)

function printlap(){
    let lapc = document.createElement("div")
    lapc.innerHTML = lc + ":"
    lc++;
    // lapcount.appendChild(lapc)
    lapcount.insertBefore(lapc,lapcount.firstChild)
    let lap = document.createElement("div")

    let hours = parseInt(hrs.innerHTML)
    let minutes = parseInt(min.innerHTML)
    let seconds = parseInt(sec.innerHTML)
    let miliseconds = parseInt(msec.innerHTML)

    let currlap = (hours*60*60*100) + (minutes*60*100)+(seconds*100)+(miliseconds)
    let timetkn = currlap - prevlap;
    prevlap = currlap

    let mlsec = timetkn%100;
    timetkn = parseInt(timetkn/100)
    let ssec = timetkn%60;
    timetkn = parseInt(timetkn/60)
    let mmin = timetkn%60;
    timetkn = parseInt(timetkn/60)
    let hhrs = timetkn%60;

    if(mlsec<10){
      mlsec = "0"+mlsec
    }
    if(ssec<10){
      ssec = "0"+ssec
    }
    if(mmin<10){
      mmin = "0"+mmin
    }
    if(hhrs<10){
      hhrs = "0"+ hhrs
    }
    
    lap.innerHTML = hhrs+":"+mmin+":"+ssec+":"+mlsec
    // laptime.appendChild(lap)
    laptime.insertBefore(lap,laptime.firstChild)




}

button1.addEventListener("click",reset)

function reset(){
    hrs.innerHTML="00"
    min.innerHTML="00"
    sec.innerHTML="00"
    msec.innerHTML="00"
    lapcount.innerHTML=null
    laptime.innerHTML=null
    prevlap = 0;
    lc = 1
}

button2.addEventListener("click",changebutt)

function changebutt(){
    console.log(buttond)
    for(let button of buttond){
        button.setAttribute("style","display:block")

    }

    console.log(buttone)
    for(let button of buttone){
        button.setAttribute("style","display:none")

    }
    x = setInterval(showtime,10)

}

function showtime(){
   

    // console.log(i++)

    if(i>=100){
        msec.innerHTML ="00"
        i=0;
        if(sec.innerHTML++<9)
        {sec.innerHTML = "0"+sec.innerHTML}
        else
        {
            sec.innerHTML= sec.innerHTML
        }
    }
    else{
        if(i<10){
            msec.innerHTML = "0"+i
        }
        else{
            msec.innerHTML=i
        }
    }

    

    if(sec.innerHTML>=60){
            sec.innerHTML = "00";
        if(min.innerHTML++<10)
        {min.innerHTML= "0"+min.innerHTML}
        else
        {min.innerHTML= min.innerHTML}

    }
    

    if(min.innerHTML>=60){
        min.innerHTML = "00";
        if(hrs.innerHTML++<10){
            hrs.innerHTML="0"+hrs.innerHTML
        }
        else{
            hrs.innerHTML=hrs.innerHTML
        }
    }


    button4.addEventListener("click",stoptime)

    i++
    

}

function stoptime(){
    clearInterval(x)

    for(let button of buttond){
        button.setAttribute("style","display:none")

    }

    console.log(buttone)
    for(let button of buttone){
        button.setAttribute("style","display:block")

    }

}
