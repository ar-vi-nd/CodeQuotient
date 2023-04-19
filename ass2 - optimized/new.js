let input = document.getElementById("input")
let tasks = document.getElementById("tasks")

input.addEventListener("keypress", keyps)

function keyps(event) {
    console.log(event)
    if (event.key === "Enter") {

        if (input.value === "" || input.value === "\n") {
            alert("you must write something")
        }

        else {
            let task = document.createElement("div")
            task.setAttribute("class", "row")

            let text = document.createElement("div")
            text.setAttribute("class", "col-9 text-break tex")


            let bardiv = document.createElement("div")
            bardiv.setAttribute("class", "col-9 texb")
            bardiv.setAttribute("style", "display:none;")

            let checkbox = document.createElement("div")
            checkbox.setAttribute("class", "col-1")
            // checkbox.setAttribute("style","background-color:orange")
            checkbox.setAttribute("style", "color:black")


            let button = document.createElement("div")
            button.setAttribute("class", "col-1")

            let edit = document.createElement("div")
            edit.setAttribute('class', "col-1")



            text.textContent = input.value
            input.value = "";
            input.focus();


            let bar = document.createElement("INPUT")
            bar.setAttribute("type", "textbox")

            let check = document.createElement("INPUT")
            check.setAttribute("class", "chkclass")
            check.setAttribute("type", "checkbox")
            check.setAttribute("value", "false")
            // console.log(check.attributes)
            check.setAttribute("onclick", "checkfn(this.parentNode.parentNode,this)")


            check.setAttribute("style", "color:orange;")

            let del = document.createElement("label")
            del.innerHTML = "&#10006"
            del.setAttribute("onclick", "delfn(this.parentNode.parentNode)")

            let ed = document.createElement("label")
            ed.innerHTML = "&#128393"
            ed.setAttribute("onclick", "editfn(this.parentNode.parentNode)")


            bardiv.appendChild(bar)
            checkbox.appendChild(check)
            button.appendChild(del)
            edit.appendChild(ed)

            task.appendChild(text)
            task.appendChild(bardiv)
            task.appendChild(checkbox)
            task.appendChild(edit)
            task.appendChild(button)

            tasks.appendChild(task)
            task.appendChild(document.createElement("hr"))

            console.log(tasks)

    store();


        }



    }
}
function delfn(node) {
    node.remove();
    store()
}

function checkfn(node, tgtnode) {

    if (node.style.textDecoration != "line-through") {
        console.log(node)
        // tgtnode.setAttribute("value","1")
        tgtnode.value = "true"

        node.setAttribute("style", "text-decoration:line-through");
    }
    else {
        node.setAttribute("style", "text-decoration:none")
        // tgtnode.setAttribute("value","0")
        tgtnode.value = "false";
    }
    store();
}

function editfn(node) {

    console.log(node.children[0])
    node.children[0].setAttribute("style", "display:none")
    node.children[1].setAttribute("style", "display:block")
    console.log(node.children[1])
    node.children[1].children[0].value = node.children[0].innerHTML

    node.children[1].children[0].focus()

    node.children[1].children[0].addEventListener("keypress", function (event) {
        // console.log(event.key)

        if (event.key === "Enter") {
            console.log(event)
            node.children[0].innerHTML = node.children[1].children[0].value
            node.children[0].setAttribute("style", "display:block")
            node.children[1].setAttribute("style", "display:none")

            store()

        }


    }
    )


    node.children[1].children[0].onblur = function () {

        node.children[0].innerHTML = node.children[1].children[0].value
        node.children[0].setAttribute("style", "display:block")
        node.children[1].setAttribute("style", "display:none")

        store()


    }
    // store()



    // why arent we able to change attribute using class name as below
    // node.tex.setAttribute("style","display:none;")
    // node.texb.setAttribute("style","display:block")


}

function store() {

    let arrele = document.getElementById("tasks")
    let len = document.getElementById("tasks").children.length
    let n = len-1
    let arrstr = []

    console.log(arrele)
    console.log(len)
    // console.log(arrele.children[0])
    // console.log(arrele.children[0].children[0])

    for(let i = 0 ; i<len;i++){
        let arrobj = {}

        console.log(arrele.children[i].children[0].innerHTML)
        console.log(arrele.children[i].children[2].children[0].value)
    arrobj.textst = arrele.children[i].children[0].innerHTML;
    arrobj.chkval = arrele.children[i].children[2].children[0].value;
    arrstr.push(arrobj)
    console.log(arrstr)





    }

    // console.log(arrele.children[0].children[0].innerHTML)
    // arrobj.textst = arrele.children[0].children[0].innerHTML;
    // console.log(arrele.children[0].children[2])
    // console.log(arrele.children[0].children[2].children[0].value)
    // arrobj.chkval = arrele.children[0].children[2].children[0].value;

    // console.log(arrobj)
    // arrstr.push(arrobj)

    console.log(arrstr)
    localStorage.setItem("arrayofobj",JSON.stringify(arrstr))
    
    // localStorage.setItem("storedtasks", tasks.innerHTML)

}



    let temp = localStorage.getItem("arrayofobj")
    let temp1 =JSON.parse(temp)
    let templen = temp1.length
    console.log(JSON.parse(temp))
    console.log(temp1.length)
    console.log(temp1[0])

    for(let i =0;i<templen;i++){
        adddata(temp1[i])
    }

    function adddata(obje){

        let task = document.createElement("div")
            task.setAttribute("class", "row")

            let text = document.createElement("div")
            text.setAttribute("class", "col-9 text-break tex")


            let bardiv = document.createElement("div")
            bardiv.setAttribute("class", "col-9 texb")
            bardiv.setAttribute("style", "display:none;")

            let checkbox = document.createElement("div")
            checkbox.setAttribute("class", "col-1")
            checkbox.setAttribute("style", "color:black")


            let button = document.createElement("div")
            button.setAttribute("class", "col-1")

            let edit = document.createElement("div")
            edit.setAttribute('class', "col-1")

            text.textContent = obje.textst

            let bar = document.createElement("INPUT")
            text.setAttribute("type", "textbox")

            let check = document.createElement("INPUT")
            check.setAttribute("class", "chkclass")
            check.setAttribute("type", "checkbox")

            if(obje.chkval=="false"){
            check.setAttribute("value", "false")}

            else{
                check.setAttribute("value","true")
            }
            // console.log(check.attributes)
            check.setAttribute("onclick", "checkfn(this.parentNode.parentNode,this)")


            check.setAttribute("style", "color:orange;")

            let del = document.createElement("label")
            del.innerHTML = "&#10006"
            del.setAttribute("onclick", "delfn(this.parentNode.parentNode)")

            let ed = document.createElement("label")
            ed.innerHTML = "&#128393"
            ed.setAttribute("onclick", "editfn(this.parentNode.parentNode)")


            bardiv.appendChild(bar)
            checkbox.appendChild(check)
            button.appendChild(del)
            edit.appendChild(ed)

            task.appendChild(text)
            task.appendChild(bardiv)
            task.appendChild(checkbox)
            task.appendChild(edit)
            task.appendChild(button)

            tasks.appendChild(task)
            task.appendChild(document.createElement("hr"))

            


    }




// let temp = localStorage.getItem("storedtasks")
// tasks.innerHTML = temp

// let chkarr = document.getElementsByClassName("chkclass")
// console.log(chkarr)
// for (let i of chkarr) {
//     console.log(i)
//     if (i.value == "true") {
//         i.checked = true;
//     }
// }






