let button = document.getElementById("submitb")
button.addEventListener("click",get_data)

function get_data(){
    let xmlobj = new XMLHttpRequest()
    xmlobj.open("GET","/getData")
    xmlobj.send()
    xmlobj.addEventListener("load",function(){
        console.log(JSON.parse(xmlobj.responseText))
        let div = document.createElement("div")
        // div.innerText = JSON.parse(xmlobj.responseText)
        // is line se [object object console ho raha tha so mene bina parse kiye hi console krwa diya use string print ho gayi]


        div.innerText = xmlobj.responseText
        document.body.appendChild(div)
    })
}