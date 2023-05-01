let sbutt = document.getElementById("sbutton")
let newqb = document.getElementById("newq")

let searchb = document.getElementById("sq")

searchb.addEventListener("input",searchf)

function searchf(event){

    console.log(event)
    console.log(searchb.value)

    let temparr = document.getElementsByClassName("nqb")

    console.log(temparr)

    for(let item of temparr){
        console.log(item.children[0])
        let question = item.children[0].children[1]
        let questionText = item.children[0].children[1].textContent.toLowerCase()
        if(questionText.indexOf(searchb.value)>-1){
            console.log("ohyeah")
            // if(item.classList.contains("hidden")){
            //     item.classList.remove("hidden")
            // }
            item.style.display = "";
            // item.children[0].children[0].style.display = "";
            // item.children[0].children[1].style.display = "";
            // item.children[1].style.display = "";
               // highlight the searched text
               let regex = new RegExp(searchb.value, 'gi');
               let highlightedText = questionText.replace(regex, (match) => {
                 return `<span class="highlight">${match}</span>`;
               });
               question.innerHTML = highlightedText;
   
        }
        else{
            // console.log("ohno")
            // item.classList.add("hidden")
            // item.setAttribute("class","hidden")
            item.style.display = "none";

            // item.children[0].children[0].style.display = "none";
            // item.children[0].children[1].style.display = "none";
            // item.children[1].style.display = "none";

        }

    }

}


newqb.addEventListener("click", newqueblk)

let count = 0;
let respid;

retrieve();

function retrieve() {
    if (localStorage.getItem("qlist")) {

        console.log("here")

        let qarr = JSON.parse(localStorage.getItem("qlist"))
        console.log(qarr)
        length = qarr.length
        console.log(length)
        if (length == 0) {
            count = 0
            return
        }
        count = qarr[length - 1][0]
        count++

        let qlist = document.getElementById("qlist")
        qlist.innerHTML = null;

        for (let i = 0; i < qarr.length; i++) {
            if (qarr[i][3][0] == 1) {

                let nqb = document.createElement("div")
                let nqb1 = document.createElement("div")
                let sub = document.createElement("div")
                let des = document.createElement("div")
                let nqb2 = document.createElement("label")
                nqb2.innerHTML = "&#9733"
                let nqb3 = document.createElement("label")

                nqb3.setAttribute("class","timeclass")
                nqb3.setAttribute("id",qarr[i][3][1])

                if ((qarr[i][3][0]) == 1) {

                    nqb2.setAttribute("value", "1")
                    nqb2.setAttribute("class", "star")
                }

                else {
                    nqb2.setAttribute("value", "0")
                }


                des.setAttribute("class", "twrap")
                nqb1.setAttribute("class", "nqb1")

                sub.innerHTML = qarr[i][1]
                des.innerHTML = qarr[i][2]
                nqb.setAttribute("id", qarr[i][0])
                nqb1.appendChild(sub)
                nqb1.appendChild(des)
                nqb.appendChild(nqb1)
                nqb.appendChild(nqb3)
                nqb.appendChild(nqb2)

                // let brk = document.createElement("hr")
                // console.log(brk)
                // nqb.appendChild(brk)
                console.log(count)
                sub.setAttribute("class", "sub")
                nqb.setAttribute("class", "nqb")
                nqb.setAttribute("onclick", "qclick(this)")
                qlist.appendChild(nqb)

                console.log(nqb2.value)

                nqb2.setAttribute("onclick", "starf(this,this.parentElement)")

            }

            else {
                continue
            }

        }

        for (let i = 0; i < qarr.length; i++) {

            if (qarr[i][3][0] == 0) {


                let nqb = document.createElement("div")
                let nqb1 = document.createElement("div")
                let sub = document.createElement("div")
                let des = document.createElement("div")
                let nqb2 = document.createElement("label")
                nqb2.innerHTML = "&#9733"

                let nqb3 = document.createElement("label")

                nqb3.setAttribute("class","timeclass")
                nqb3.setAttribute("id",qarr[i][3][1])

                if ((qarr[i][3][0]) == 1) {

                    nqb2.setAttribute("value", "1")
                    nqb2.setAttribute("class", "star")
                }

                else {
                    nqb2.setAttribute("value", "0")
                }


                des.setAttribute("class", "twrap")
                nqb1.setAttribute("class", "nqb1")

                sub.innerHTML = qarr[i][1]
                des.innerHTML = qarr[i][2]
                nqb.setAttribute("id", qarr[i][0])
                nqb1.appendChild(sub)
                nqb1.appendChild(des)
                nqb.appendChild(nqb1)
                nqb.appendChild(nqb3)
                nqb.appendChild(nqb2)

                // let brk = document.createElement("hr")
                // console.log(brk)
                // nqb.appendChild(brk)
                console.log(count)
                sub.setAttribute("class", "sub")
                nqb.setAttribute("class", "nqb")
                nqb.setAttribute("onclick", "qclick(this)")
                qlist.appendChild(nqb)

                console.log(nqb2.value)

                nqb2.setAttribute("onclick", "starf(this,this.parentElement)")

            }

            else {
                continue
            }
        }


        // for(let i=0; i<qarr.length;i++){

        //     let nqb = document.createElement("div")
        //     let nqb1 = document.createElement("div")
        //     let sub = document.createElement("div")
        //     let des = document.createElement("div")
        //     let nqb2 = document.createElement("label")
        //     nqb2.innerHTML = "&#9733"

        //     if((qarr[i][3])==1){

        //         nqb2.setAttribute("value","1")
        //         nqb2.setAttribute("class","star")
        //     }

        //     else{
        //         nqb2.setAttribute("value","0")
        //     }


        //     des.setAttribute("class","twrap")
        //     nqb1.setAttribute("class","nqb1")

        //     sub.innerHTML=qarr[i][1]
        //     des.innerHTML=qarr[i][2]
        //     nqb.setAttribute("id",qarr[i][0])
        //     nqb1.appendChild(sub)
        // nqb1.appendChild(des)
        // nqb.appendChild(nqb1)
        // nqb.appendChild(nqb2)

        //     // let brk = document.createElement("hr")
        // // console.log(brk)
        // // nqb.appendChild(brk)
        // console.log(count)
        // sub.setAttribute("class","sub")
        // nqb.setAttribute("class","nqb")
        // nqb.setAttribute("onclick","qclick(this)")
        // qlist.appendChild(nqb)

        // console.log(nqb2.value)

        // nqb2.setAttribute("onclick","starf(this,this.parentElement)")



        // }

    }
    else {
        console.log("here1")
        count = 0;
    }
}




sbutt.addEventListener("click", add_data)

function add_data(event) {

    let qlist = document.getElementById("qlist")
    console.log(qlist)

    let nqb = document.createElement("div")
    let nqb1 = document.createElement("div")
    let nqb2 = document.createElement("label")
    let sub = document.createElement("div")
    let des = document.createElement("div")
    let subj = document.getElementById("textb")
    let desc = document.getElementById("texta")
    let nqb3 = document.createElement("label")

    nqb3.setAttribute("class","timeclass")
    let time = new Date().getTime()

    nqb3.setAttribute("id",time)




    if (subj.value.trim() == "" || desc.value.trim() == "") {
        return
    }

    console.log(subj)
    console.log(desc)

    sub.innerHTML = subj.value
    des.innerHTML = desc.value

    des.setAttribute("class", "twrap")


    nqb1.appendChild(sub)
    nqb1.appendChild(des)
    nqb.appendChild(nqb1)
    nqb.appendChild(nqb3)
    nqb.appendChild(nqb2)

    nqb.setAttribute("class", "nqb")
    nqb1.setAttribute("class", "nqb1")

    nqb2.innerHTML = "&#9733"
    nqb2.setAttribute("value", "0")


    subj.value = ""
    desc.value = ""

    // let brk = document.createElement("hr")
    // console.log(brk)
    // nqb.appendChild(brk)
    console.log(count)
    sub.setAttribute("class", "sub")
    nqb.setAttribute("id", count)
    nqb.setAttribute("onclick", "qclick(this)")
    count++;
    qlist.appendChild(nqb)
    console.log(nqb)
    console.log(nqb.id)
    console.log(nqb2)
    console.log(nqb2.getAttribute("value"))
    nqb2.setAttribute("onclick", "starf(this,this.parentElement)")

    lstore(nqb)



}

function starf(starbutt, node) {
    console.log("yah hu me")
    console.log(starbutt)
    console.log(starbutt.getAttribute("value"))
    console.log(node)
    if (starbutt.getAttribute("value") == 0) {
        console.log("inhererere")
        starbutt.setAttribute("value","1")
        console.log(starbutt.getAttribute("value"))
        starbutt.setAttribute("class", "star")
        lupdate(node)
    }
    else if (starbutt.getAttribute("value") == 1) {
        console.log("inhererere1")
        starbutt.setAttribute("value", "0")
        console.log(starbutt.classList)
        starbutt.classList.remove("star")
        console.log(starbutt)
        lupdate(node)
    }

}

function qclick(node) {

    respid = 0;

    console.log("here")
    console.log(node)
    let item = node.id
    console.log(item)
    let rcont = document.getElementById("rcont")
    rcont.setAttribute("class", "hidden")
    let rcont1 = document.getElementById("rcont1")
    rcont1.setAttribute("class", "row")

    let sub = document.createElement("div")
    let des = document.createElement("div")
    // console.log(node.children[0].innerHTML)
    // console.log(node.children[1].innerHTML)



    // sub.innerHTML = node.children[0].children[0].innerHTML
    // des.innerHTML = node.children[0].children[1].innerHTML
    // let text = node.children[0].children[1].innerHTML




    let descreption = document.getElementById("Descriptionn")
    descreption.innerHTML = null
    descreption.appendChild(sub)
    descreption.appendChild(des)

    let sbutt1 = document.getElementById("sbutton1")
    // sbutt1.value = node.id


    let response = document.getElementById("respon")
    response.innerHTML = null

    let qarr = JSON.parse(localStorage.getItem("qlist"))
    let length = qarr.length



    for (let i = 0; i < length; i++) {
        if (node.id == qarr[i][0]) {
            let names;
            let responses;
            sub.innerHTML = qarr[i][1]
            des.innerHTML = qarr[i][2]
            for (let j = 4; j < qarr[i].length; j++) {
                names = qarr[i][j][1]
                responses = qarr[i][j][2]

                let nrb = document.createElement("div")
                let nam = document.createElement("div")
                let res = document.createElement("div")
                let butholder = document.createElement("div")
                butholder.setAttribute("class", "butholder")
                let upbutton = document.createElement("button")
                let downbutton = document.createElement("button")
                let like = document.createElement("label")
                let dislike = document.createElement("label")

                upbutton.setAttribute("class", "buttons")
                upbutton.setAttribute("id", "upbuttons")
                downbutton.setAttribute("class", "buttons")
                downbutton.setAttribute("id", "downbuttons")

                like.setAttribute("for", "upbuttons")
                dislike.setAttribute("for", "downbuttons")

                let timlab = document.createElement("label")
                timlab.setAttribute("class","timeclass")
                timlab.setAttribute("id",qarr[i][j][5])

                nam.innerHTML = names
                res.innerHTML = responses
                like.innerHTML = qarr[i][j][3]
                dislike.innerHTML = qarr[i][j][4]



                nrb.appendChild(nam)
                nrb.appendChild(res)
                butholder.appendChild(upbutton)
                butholder.appendChild(like)
                butholder.appendChild(downbutton)
                butholder.appendChild(dislike)
                nrb.appendChild(butholder)
                nrb.appendChild(timlab)

                nrb.setAttribute("id", qarr[i][j][0])

                let hr = document.createElement("hr")
                nrb.append(hr)
                response.appendChild(nrb)

                upbutton.setAttribute("onclick", `inccount(${item},${qarr[i][j][0]})`)
                downbutton.setAttribute("onclick", `deccount(${item},${qarr[i][j][0]})`)
                respid++;


            }
        }
    }


    console.log(item)
    sbutt1.setAttribute("onclick", `addres(${item})`)

    let rbutt = document.getElementById("rbutton")

    rbutt.setAttribute("onclick", `resolvef(${item})`)



}

function inccount(pid, cid) {

    console.log(pid, cid)

    let qarr = JSON.parse(localStorage.getItem("qlist"))
    length = qarr.length

    for (let i = 0; i < length; i++) {

        console.log(qarr[i][0])
        if (pid == qarr[i][0]) {

            console.log("here")
            // console.log(length)

            for (let j = 4; j < qarr[i].length; j++) {
                console.log(j)
                console.log(qarr[i][j][0])
                console.log(cid)
                if (cid == qarr[i][j][0]) {
                    console.log("here2")
                    qarr[i][j][3]++;
                    
                    console.log(qarr)
                    sortji(qarr[i],pid)
                    console.log(qarr)
                    localStorage.setItem("qlist", JSON.stringify(qarr))

                    showresp(pid);


                    break;
                }
            }
        }
    }

}

function sortji(qarr,pid){

    console.log(qarr)

    const subArray= qarr.slice(4)

    subArray.sort(function(a,b){return ((b[3]-b[4])-(a[3]-a[4]))})

    qarr.splice(4,subArray.length,...subArray)

    return qarr

    

}




function deccount(pid, cid) {

    console.log(pid, cid)

    let qarr = JSON.parse(localStorage.getItem("qlist"))
    length = qarr.length

    for (let i = 0; i < length; i++) {

        console.log(qarr[i][0])
        if (pid == qarr[i][0]) {

            console.log("here")
            // console.log(length)

            for (let j = 4; j < qarr[i].length; j++) {
                console.log(j)
                console.log(qarr[i][j][0])
                console.log(cid)
                if (cid == qarr[i][j][0]) {
                    console.log("here2")
                    qarr[i][j][4]++;

                    sortji(qarr[i],pid)



                    localStorage.setItem("qlist", JSON.stringify(qarr))

                    showresp(pid);


                    break;
                }
            }
        }
    }





}

function showresp(pid) {
    

    let response = document.getElementById("respon")
    response.innerHTML = null

    let qarr = JSON.parse(localStorage.getItem("qlist"))
    let length = qarr.length

    for (let i = 0; i < length; i++) {
        if (pid == qarr[i][0]) {
            let names;
            let responses;
            for (let j = 4; j < qarr[i].length; j++) {
                names = qarr[i][j][1]
                responses = qarr[i][j][2]

                let nrb = document.createElement("div")
                let nam = document.createElement("div")
                let res = document.createElement("div")
                let butholder = document.createElement("div")
                butholder.setAttribute("class", "butholder")
                let upbutton = document.createElement("button")
                let downbutton = document.createElement("button")
                let like = document.createElement("label")
                let dislike = document.createElement("label")

                upbutton.setAttribute("class", "buttons")
                upbutton.setAttribute("id", "upbuttons")
                downbutton.setAttribute("class", "buttons")
                downbutton.setAttribute("id", "downbuttons")

                like.setAttribute("for", "upbuttons")
                dislike.setAttribute("for", "downbuttons")

                let timlab = document.createElement("label")
                timlab.setAttribute("class","timeclass")
                timlab.setAttribute("id",qarr[i][j][5])


                nam.innerHTML = names
                res.innerHTML = responses
                like.innerHTML = qarr[i][j][3]
                dislike.innerHTML = qarr[i][j][4]



                nrb.appendChild(nam)
                nrb.appendChild(res)
                butholder.appendChild(upbutton)
                butholder.appendChild(like)
                butholder.appendChild(downbutton)
                butholder.appendChild(dislike)
                nrb.appendChild(butholder)
                nrb.appendChild(timlab)

                nrb.setAttribute("id", qarr[i][j][0])

                let hr = document.createElement("hr")
                nrb.append(hr)
                response.appendChild(nrb)

                upbutton.setAttribute("onclick", `inccount(${pid},${qarr[i][j][0]})`)
                downbutton.setAttribute("onclick", `deccount(${pid},${qarr[i][j][0]})`)
                


            }
        }
    }

}


function resolvef(item) {

    
    let rdiv = document.getElementById(item)
    console.log(rdiv)
    rdiv.remove()

    let qarr = JSON.parse(localStorage.getItem("qlist"))
    let length = qarr.length

    console.log(qarr)
    console.log(item)


    for (let i = 0; i < length; i++) {
        if (item == qarr[i][0]) {
            qarr.splice(i, 1)
            localStorage.setItem("qlist", JSON.stringify(qarr))
    newqueblk();
    break;

        }
        else
            continue;
    }



}

function newqueblk() {

    let rcont = document.getElementById("rcont")
    rcont.setAttribute("class", "row")
    let rcont1 = document.getElementById("rcont1")
    rcont1.setAttribute("class", "hidden")

}

function addres(item) {
    console.log("herererere")
    // console.log(event.target.parentElement)
    console.log(item)
    let name = document.getElementById("textb1")
    let responsee = document.getElementById("texta1")

    console.log("inhere")

    if (name.value.trim() == "" || responsee.value.trim() == "") {
        console.log("nowhere")
        return
    }

    // let nrb = document.createElement("div")
    let nam = document.createElement("div")
    let res = document.createElement("div")

    // let butholder = document.createElement("div")

    // butholder.setAttribute("class", "butholder")

    // let upbutton = document.createElement("button")
    // let downbutton = document.createElement("button")
    let like = document.createElement("label")
    let dislike = document.createElement("label")


    // upbutton.setAttribute("class", "buttons")
    // upbutton.setAttribute("id", "upbuttons")
    // downbutton.setAttribute("class", "buttons")
    // downbutton.setAttribute("id", "downbuttons")

    // like.setAttribute("for", "upbuttons")
    // dislike.setAttribute("for", "downbuttons")

    like.innerHTML = "0"
    dislike.innerHTML = "0"

    nam.innerHTML = name.value
    res.innerHTML = responsee.value

    // nrb.appendChild(nam)
    // nrb.appendChild(res)
    // butholder.appendChild(upbutton)
    // butholder.appendChild(like)
    // butholder.appendChild(downbutton)
    // butholder.appendChild(dislike)
    // nrb.appendChild(butholder)

    // nrb.setAttribute("id", respid)

    // let hr = document.createElement("hr")
    // nrb.append(hr)

    // let response = document.getElementById("respon")
    // console.log(response)
    // response.appendChild(nrb)

    // upbutton.setAttribute("onclick", `inccount(${item},${respid})`)
    //             downbutton.setAttribute("onclick", `deccount(${item},${respid})`)

    name.value = ""
    responsee.value = ""

    let time = new Date().getTime()

    let arr = [respid, nam.innerHTML, res.innerHTML, like.innerHTML, dislike.innerHTML,time]
    console.log(arr)

    let qarr = JSON.parse(localStorage.getItem("qlist"))
    let length = qarr.length

    console.log(qarr)


    for (let i = 0; i < length; i++) {
        if (item == qarr[i][0]) {
            qarr[i].push(arr)
            sortji(qarr[i],item)
            localStorage.setItem("qlist", JSON.stringify(qarr))
            showresp(item)
            break
        }
        else
            continue;
    }

    respid++



}

function resolve() {

}

function lupdate(node) {
    let qarr = JSON.parse(localStorage.getItem("qlist"))

    let length = qarr.length

    for (let i = 0; i < length; i++) {
        if (node.id == qarr[i][0]) {
            console.log(qarr[i][3][0])
            console.log(node)
            qarr[i][3][0] = node.children[2].getAttribute("value")
            console.log(qarr[i][3][0])


            let file = JSON.stringify(qarr)

            localStorage.setItem("qlist", file)
        }
    }

    retrieve();


}

function lstore(node) {
    if (localStorage.getItem("qlist")) {



        let qarr = JSON.parse(localStorage.getItem("qlist"))

        let id = node.id
        let sub = node.children[0].children[0].innerHTML
        let des = node.children[0].children[1].innerHTML
        console.log("yesesese")
        console.log(node.children[2])
        let starvalue = [node.children[2].getAttribute("value"),node.children[1].id]
        let arrobj = [id, sub, des, starvalue]
        qarr.push(arrobj)
        let file = JSON.stringify(qarr)

        localStorage.setItem("qlist", file)

        // console.log(file)



    }

    else {
        let qarr = [];
        let id = node.id
        let sub = node.children[0].children[0].innerHTML
        let des = node.children[0].children[1].innerHTML
        let starvalue = [node.children[2].getAttribute("value"),node.children[1].id]
        
        // let starvalue = node.children[1].getAttribute("value")

        let arrobj = [id, sub, des, starvalue]

        //  let arrobj = {}
        //  arrobj.id = node.id
        //  arrobj.sub = node.children[0].innerHTML
        //  arrobj.des = node.children[1].innerHTML
        qarr.push(arrobj)
        //  console.log(qarr)
        //  console.log(arrobj)

        let file = JSON.stringify(qarr)

        localStorage.setItem("qlist", file)


    }




}


setInterval(time,1000);


function time(){

    let timearr = document.getElementsByClassName("timeclass")

    for(let item of timearr){

        item.textContent = timecalc(item.id);

    }

    
}

function timecalc(timestamp){
        const now = new Date().getTime();
        const secondsSince = Math.floor((now - timestamp) / 1000);
    
        if (secondsSince < 60) {
            return `${secondsSince} second${secondsSince === 1 ? '' : 's'} ago`;
        }
    
        const minutesSince = Math.floor(secondsSince / 60);
    
        if (minutesSince < 60) {
            return `${minutesSince} minute${minutesSince === 1 ? '' : 's'} ago`;
        }
    
        const hoursSince = Math.floor(minutesSince / 60);
    
        if (hoursSince < 24) {
            return `${hoursSince} hour${hoursSince === 1 ? '' : 's'} ago`;
        }
    
        const daysSince = Math.floor(hoursSince / 24);
    
        if (daysSince < 7) {
            return `${daysSince} day${daysSince === 1 ? '' : 's'} ago`;
        }
    
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = date.toLocaleString('default', { month: 'long' });
    
        return `${month} ${date.getDate()}, ${year}`;
    }

