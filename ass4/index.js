let sst
let flag = 0;

let chk=0
let count =1;
let min = document.getElementById("min")
let sec = document.getElementById("sec")

let lplus = document.getElementById("lplus")
let lminus = document.getElementById("lminus")
let rplus = document.getElementById("rplus")
let rminus = document.getElementById("rminus")

let sb = document.getElementById("sb")
let lremtime = document.getElementById("lremtime")
let rremtime = document.getElementById("rremtime")

let start = document.getElementById("start")
let pause = document.getElementById("pause")
let reset = document.getElementById("reset")


lplus.addEventListener("click", linc)

function linc() {
    lremtime.innerHTML++;
    if(lremtime.innerHTML<10){
        lremtime.innerHTML="0"+lremtime.innerHTML
    }


}

lminus.addEventListener("click", ldec)
function ldec() {
    lremtime.innerHTML--;
    if(lremtime.innerHTML<10){
        lremtime.innerHTML="0"+lremtime.innerHTML
    }
}

rplus.addEventListener("click", rinc)
function rinc() {
    rremtime.innerHTML++
    if(rremtime.innerHTML<10){
        rremtime.innerHTML="0"+rremtime.innerHTML
    }
}

rminus.addEventListener("click", rdec)
function rdec() {
    rremtime.innerHTML--
    if(rremtime.innerHTML<10){
        rremtime.innerHTML="0"+rremtime.innerHTML
    }
}

start.addEventListener("click", startf)

function startf() {
    lplus.removeEventListener("click",linc)
    lminus.removeEventListener("click",ldec)
    rplus.removeEventListener("click",rinc)
    rminus.removeEventListener("click",rdec)
    start.setAttribute("style", "display:none")
    pause.setAttribute("style", "display:block")
    if(chk==0){

        min.innerHTML = lremtime.innerHTML
        sec.innerHTML = "00"
        sb.innerHTML = "SESSION"+count
    }
    sst = setInterval(timerdec, 1000)

}

function timerdec() {
    if (sec.innerHTML > 0) {

        if(sec.innerHTML>10)
      {
         sec.innerHTML--}
         else{
            sec.innerHTML--
            sec.innerHTML="0"+sec.innerHTML
         }
        

    }
    else {

        if(min.innerHTML>10)
        {min.innerHTML--;}

        else{min.innerHTML--
            min.innerHTML = "0"+min.innerHTML
        }



        if (min.innerHTML >= 0) {

            sec.innerHTML = 59


        }
        else {
            console.log("here11")

            if (flag == 1) {
                console.log("here12")
        sb.innerHTML = "SESSION"+count
        min.innerHTML = lremtime.innerHTML
        sec.innerHTML = "00"
        flag=0;
            

            }
            else{
            console.log("here14")

            sb.innerHTML = "BREAK!"
            min.innerHTML = rremtime.innerHTML
            sec.innerHTML = "00";
            flag = 1;
        count++

            console.log("here14")
            }


        }



    }

}

pause.addEventListener("click",pausef)

function pausef(){
    start.setAttribute("style", "display:block")
    pause.setAttribute("style", "display:none")
    chk = 1;

    clearInterval(sst)
}

reset.addEventListener("click",resetf)

function resetf(){
    min.innerHTML = "00"
    sec.innerHTML = "00"
    sb.innerHTML = "SESSION!"
    clearInterval(sst)
    start.setAttribute("style", "display:block")
    pause.setAttribute("style", "display:none")
    chk= 0
    flag = 0
    count=1
    lplus.addEventListener("click", linc)
lminus.addEventListener("click", ldec)
rplus.addEventListener("click", rinc)
rminus.addEventListener("click", rdec)




}


